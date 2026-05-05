import org.apache.tools.ant.filters.ReplaceTokens
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import java.util.Properties

val localProperties: Properties = Properties().apply {
    val file = rootProject.file("local.properties")
    if (file.exists()) file.inputStream().use { load(it) }
}

fun secret(key: String): String =
    localProperties.getProperty(key)
        ?: providers.environmentVariable(key).orNull
        ?: ""

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.application)
    alias(libs.plugins.compose.multiplatform)
    alias(libs.plugins.kotlin.compose)
}

kotlin {
    androidTarget {
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_11)
        }
    }

    @OptIn(ExperimentalWasmDsl::class)
    wasmJs {
        outputModuleName.set("composeApp")
        browser {
            commonWebpackConfig {
                outputFileName = "composeApp.js"
            }
        }
        binaries.executable()
    }

    // iOS targets — uncomment to enable iOS support.
    // listOf(
    //     iosX64(),
    //     iosArm64(),
    //     iosSimulatorArm64()
    // ).forEach { target ->
    //     target.binaries.framework {
    //         baseName = "ComposeApp"
    //         isStatic = true
    //     }
    // }

    sourceSets {
        commonMain.dependencies {
            implementation(project(":shared"))

            // Compose Multiplatform UI — composeApp 가 본격적으로 소유
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material3)
            implementation(compose.ui)
            implementation(compose.components.resources)
            implementation(compose.components.uiToolingPreview)

            implementation(libs.androidx.lifecycle.viewmodel.compose)
            implementation(libs.androidx.lifecycle.runtime.compose)

            implementation(libs.koin.compose)
            implementation(libs.koin.compose.viewmodel)

            implementation(libs.androidx.navigation.compose)
        }

        androidMain.dependencies {
            implementation(libs.androidx.core.ktx)
            implementation(libs.androidx.activity.compose)
            implementation(libs.androidx.lifecycle.runtime.ktx)
            implementation(libs.koin.android)
            implementation(libs.koin.androidx.compose)
            api(libs.kakao.map.android)
        }

        wasmJsMain.dependencies {
            implementation(libs.kotlinx.browser)
        }

        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}

dependencies {
    debugImplementation(compose.uiTooling)
}

compose.resources {
    publicResClass = true
    packageOfResClass = "com.jeffrey.auctionbridge.resources"
}

// Web (wasmJs) 리소스 빌드 시 index.html 의 @KAKAO_JS_KEY@ 토큰을 치환
tasks.matching { it.name == "wasmJsProcessResources" }.configureEach {
    this as Copy
    val kakaoJsKey = secret("KAKAO_JS_KEY")
    inputs.property("kakaoJsKey", kakaoJsKey)
    filesMatching("index.html") {
        filter<ReplaceTokens>("tokens" to mapOf("KAKAO_JS_KEY" to kakaoJsKey))
    }
}

android {
    namespace = "com.jeffrey.auctionbridge"
    compileSdk = libs.versions.androidCompileSdk.get().toInt()

    defaultConfig {
        applicationId = "com.jeffrey.auctionbridge"
        minSdk = libs.versions.androidMinSdk.get().toInt()
        targetSdk = libs.versions.androidTargetSdk.get().toInt()
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"

        // Kakao Map Native App Key (local.properties → BuildConfig + manifestPlaceholder)
        val kakaoNativeKey = secret("KAKAO_NATIVE_APP_KEY")
        manifestPlaceholders["KAKAO_NATIVE_APP_KEY"] = kakaoNativeKey
        buildConfigField("String", "KAKAO_NATIVE_APP_KEY", "\"$kakaoNativeKey\"")
    }

    sourceSets["main"].apply {
        manifest.srcFile("src/androidMain/AndroidManifest.xml")
        res.srcDirs("src/androidMain/res")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    buildFeatures {
        buildConfig = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}
