//import { Stack } from "expo-router"
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import {COLORS, icons, images, SIZES, FONT} from "../constants"
import { ScreenHeaderBtn } from "../components"
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Nav from "./(tabs)/Nav";
import Login2 from "./login/Login2";
import Menu from './Screens/Menu';
import { useNavigation } from 'expo-router';
import PostClick from './Screens/PostClick';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/action';

//const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();
 const Stack=createStackNavigator();
const StackLayout=()=>{
    const dispatch=useDispatch();
    const navigation=useNavigation();
    useEffect(() => {
        dispatch(loadUser());
      }, []);
      var { user } = useSelector(state => state.auth)
    const [fontsLoaded]=useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView=useCallback(async()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded])
    if(!fontsLoaded){
        return null;
    }
    

    return(
        <Stack.Navigator>
           <Stack.Screen
            name="login2"
            component={Login2}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/>
            <Stack.Screen
            name="tabs"
            component={Nav}
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return(
                        <View style={{marginLeft:20}}>
                        <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" handlePress={()=>{navigation.navigate('login2')}}/>
                        </View>
                        )
                    },
                    headerRight: () => {
                        return(
                            <View style={{marginRight:20}}>
                        <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%"  handlePress={()=>{navigation.navigate('login')}}/>
                        </View>
                        )
                    },
                    title: "festivity",
          headerTransparent:"true",
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontFamily: FONT.bold,
              fontSize: SIZES.xLarge,
              color: 'black',
              marginTop: 2,
            }
                }}
            />
            <Stack.Screen
            name="menu"
            component={Menu}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/>
              {/* <Stack.Screen
            name="login2"
            component={Login2}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/> */}
              <Stack.Screen
            name="postClick"
            component={PostClick}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/>
        </Stack.Navigator>
    )
}

export default StackLayout