import { useCallback, useState } from "react";
import Home from "./screens/Home";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
  // <View onLayout={onLayoutRootView}>
  //   <Home/>
  // </View>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} onLayout={onLayoutRootView}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}
