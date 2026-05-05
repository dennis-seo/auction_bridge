pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
plugins {
    id("org.gradle.toolchains.foojay-resolver-convention") version "1.0.0"
}
dependencyResolutionManagement {
    // Kotlin/Wasm 플러그인이 Node.js ivy 저장소를 프로젝트 레벨에 동적으로 추가하므로 PREFER_PROJECT 사용
    repositoriesMode.set(RepositoriesMode.PREFER_PROJECT)
    repositories {
        google()
        mavenCentral()
        // Kakao Map Android SDK
        maven("https://devrepo.kakao.com/nexus/content/groups/public/")
    }
}

rootProject.name = "auction-bridge"
include(":composeApp")
include(":shared")
