import { useCallback, useState } from "react";
import Home from "./screens/Home";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetails from "./screens/ReviewDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/About";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
  return(
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'#444',  height:60}, headerTintColor:'#fff', headerTitleStyle:{letterSpacing: 1.5}, headerTitleAlign:"center"}}>
      <Drawer.Screen name="Home" component={Home}/>
      <Stack.Screen name="About" component={About}/>
    </Drawer.Navigator>
  )
}

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
  <NavigationContainer onLayout={onLayoutRootView}>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#444',  height:60}, headerTintColor:'#fff'}}>
      <Stack.Screen name="Root" component={Root} options={{headerShown:false}}/>
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{title:'Review Details'}}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}
