// package import
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import  CategoriesListScreen  from "../screens/CategoriesListScreen";
import MoviesListScreen from '../screens/MoviesListScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, drawerType: 'front' }}>
            <Stack.Screen name={'CategoriesList'} component={CategoriesListScreen} />
            <Stack.Screen name={'MoviesList'} component={MoviesListScreen} />
        </Stack.Navigator>
    )
}

const MainNavigation = () => {
    useEffect(() => {
    }, [])

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default MainNavigation
