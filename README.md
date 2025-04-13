# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with
[`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app
  development with Expo

For the project to run, you'll also need to get the backend running, and put the
api url in the .env file. Follow .env.example as a template. Backend repo:
https://github.com/Batu-end/Orionix-backend

Initially we planned to fetch viewable space events from some api, but we didn't
find such an api, so we built our 'database' of events by hand using different
resources. 
Another idea was to sort out events from our database if the weather
on that day was going to be bad, but all weather APIs we could find provided
only 1-2 days of data for free, so that idea was also scrapped. Instead, we show
the 'quality' of the weather at the top of the list, and based on that we decide
whether is worth going somewhere.
