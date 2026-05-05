import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.serialization)
}

kotlin {
    androidTarget {
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_11)
        }
    }

    // Kotlin/JS — React webApp 가 소비하는 npm-style ESM 라이브러리 출력
    js(IR) {
        outputModuleName.set("auctionbridge-shared")
        browser()
        binaries.library()
        useEsModules()
        generateTypeScriptDefinitions()
    }

    @OptIn(ExperimentalWasmDsl::class)
    wasmJs {
        outputModuleName.set("shared")
        browser()
    }

    // iOS targets — uncomment to enable iOS support.
    // listOf(
    //     iosX64(),
    //     iosArm64(),
    //     iosSimulatorArm64()
    // ).forEach { target ->
    //     target.binaries.framework {
    //         baseName = "Shared"
    //         isStatic = true
    //     }
    // }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.coroutines.core)

            // androidx-lifecycle-viewmodel 은 KMP 친화 (Compose 의존 없음)
            implementation(libs.androidx.lifecycle.viewmodel)

            implementation(libs.koin.core)
            implementation(libs.kotlinx.serialization.json)
        }

        androidMain.dependencies {
            implementation(libs.androidx.core.ktx)
            implementation(libs.kotlinx.coroutines.android)
            implementation(libs.kotlinx.coroutines.play.services)
            implementation(libs.koin.android)
            implementation(libs.play.services.location)
        }

        // jsMain 은 Kotlin/JS 내장 DOM API 사용 — 별도 kotlinx-browser 의존성 불필요
        val wasmJsMain by getting {
            dependencies {
                implementation(libs.kotlinx.browser)
            }
        }

        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}

android {
    namespace = "com.jeffrey.auctionbridge.shared"
    compileSdk = libs.versions.androidCompileSdk.get().toInt()

    defaultConfig {
        minSdk = libs.versions.androidMinSdk.get().toInt()
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}
