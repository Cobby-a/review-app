import { useCallback, useState } from "react";
import Home from "./screens/Home";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
const [fontsLoaded] = useFonts({
  'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf'),
});
const onLayoutRootView = useCallback(async () => {
  if(fontsLoaded){
    await SplashScreen.hideAsync();
  }
},[fontsLoaded]);
if(!fontsLoaded){
  return null;
}
return(
  <View onLayout={onLayoutRootView}>
    <Home/>
  </View>
)
}
