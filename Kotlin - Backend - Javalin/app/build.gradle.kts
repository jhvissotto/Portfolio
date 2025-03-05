plugins {
    // Apply the org.jetbrains.kotlin.jvm Plugin to add support for Kotlin.
    alias(libs.plugins.kotlin.jvm)

    // Apply the application plugin to add support for building a CLI application in Java.
    application

    // json
    kotlin("plugin.serialization") version "1.8.0" 
}


repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}


dependencies {
    // Use the Kotlin JUnit 5 integration.
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")

    // Use the JUnit 5 integration.
    testImplementation(libs.junit.jupiter.engine)

    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    // This dependency is used by the application.
    implementation(libs.guava)


    // javalin
    implementation("io.javalin:javalin:6.4.0")
    // dotenv
    implementation("io.github.cdimascio:dotenv-kotlin:6.4.1")
    // json
    implementation("com.fasterxml.jackson.core:jackson-databind:2.17.2")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.17.2")
    // auth bcrypt
    implementation("at.favre.lib:bcrypt:0.10.2")
    // auth jwt
    implementation("com.auth0:java-jwt:4.4.0")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")
    // jooq
    implementation("org.jooq:jooq:3.20.1")
    implementation("org.xerial:sqlite-jdbc:3.45.1.0")
}


// Apply a specific Java toolchain to ease working on different environments.
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}


application {
    // Define the main class for the application.
    mainClass = "backend.MainKt"
}


tasks.named<Test>("test") {
    // Use JUnit Platform for unit tests.
    useJUnitPlatform()
}