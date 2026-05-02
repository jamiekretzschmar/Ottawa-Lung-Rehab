# Custom APK Compilation Guide (GitHub/Termux)

This application has been structured as a mobile-first PWA (Progressive Web App) and configured with **CapacitorJS**. It is fully ready to be turned into a native Android `.apk` file using command-line tools like **Termux** or GitHub Actions.

## Legal & Medical Validity
A comprehensive **Legal, Privacy & Medical Disclaimer** page has been added to ensure the application communicates clearly that it operates only as an informational tool and does not provide official medical advice or circumvent real healthcare provider directives.

## Compiling Android APK

Ensure you have cloned this repository into an environment with Node.js and an Android SDK, such as a properly configured Termux environment or a GitHub Actions runner.

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Web Assets
Compile the React/Vite front end. This outputs the app to the `/dist` directory.
```bash
npm run build
```

### Step 3: Add Android Platform (Capacitor)
Use the Capacitor CLI to synchronize the web assets and prepare the native Android project.
```bash
npx cap add android
npx cap sync android
```

### Step 4: Build the APK
If you have Android Studio installed or are using GitHub Actions, you can enter the android folder and build using Gradle.

```bash
cd android
./gradlew assembleDebug
```
*Your APK will be generated at: `android/app/build/outputs/apk/debug/app-debug.apk`*

### Important Termux Note
If you are compiling exclusively on an Android phone using **Termux**, you may need to use a toolscript or a package specifically built to compile Android apps in Termux (e.g. installing `ecj` and `dx` manually), as setting up the full Gradle build pipeline inside Termux can be complex. Alternatively, the easiest approach is to push your codebase to a GitHub repository and let an automated GitHub Action handle the SDK compilation and upload the `.apk` back to you as an artifact.
