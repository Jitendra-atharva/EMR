# EMR

Project Structure

src
  -component 
    // custom componet like textInput
    
  -fremework
   //contain app block, enum, and singletonFactory 
   
  -module
   -screenName
     -index
     -controler
     
  -localization
   //location releted file
  -resources
    -icon
      -screen
        //png jpeg icon
    -image
      -screen
        //png jpeg image
  -thems
    -assets
      //contain all image and icon name 
    -colors
      //contain all app style and font color
    -fonts
      //contain all app font famaly
    -style
     //contain common app style
  -utilities
    -networkconfig
      //contain base url, method, end point
    -constant
     //contain static string or numner
    -other util file
    //contain navigation, storage, validation 
    
#Setup

node v17.3.1
yarn v1.22.11 (OR npm v8.3.0)

$ npm install -g npm@latest
$ npm install -g yarn
Other (Optional)

npm install -g react-native-cli
npm install -g expo-cli

Build and run the app
Install React Native as described at https://facebook.github.io/react-native/docs/getting-started.html#content

Clone this repository

Run yarn install , all required components will be installed automatically

iOS
Run pod install from Shopify-RN/ios folder
Start XCode and open generated ShopifyRN.xcworkspace
Android
no steps required

It is recommended to run react-native start command from root project directory.

Run your project from XCode (Cmd+R) for iOS, or use react-native run-android to run your project on Android.
    
