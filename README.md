
# React-Native Delivery App

a delivery app by react native for me to learn and expand my knowledge in the technology.



## installation

clone the repo first
```bash
  npm clone git@github.com:medomy/react-native-delivery.git
  cd react-native-delivery
```
then start the app 
```bash
  npm i
  npm start
```

## Tech Stack

**Client:** React-Native, Redux, Typescript

**Server:** dummy data found in the src/data directory

**libraries:** 
- @react-native-community/geolocation
- react-native-reanimated-carousel
- react-native-maps
- react-native-svg
## Appendix
design inspired from : [dribble design](https://dribbble.com/shots/14527824-Food-Delivery-Mobile-App/attachments/6215067?mode=media)

**note that** to access the map module you should add the google maps api key in **Android/app/src/main/AndroidManifest.xml**

```xml
<application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <!-- put your api key here -->
      <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="Your Google maps API Key Here"/>
```