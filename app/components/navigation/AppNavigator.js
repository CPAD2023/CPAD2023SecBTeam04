import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsDetail from '../screens/NewsDetail';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SearchBar from '../SearchBar';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: 'white',
                headerLeftContainerStyle: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'rgba(92,90,91,0.7)',
                    alignItems: 'center',
                    marginLeft: 10,
                },
            }}
        >
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
            <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="SearchBar" options={{ headerShown: false }} component={SearchBar} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
        </Stack.Navigator>
    )
};

export default AppNavigator;