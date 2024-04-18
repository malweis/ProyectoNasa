import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from  '../views/Home'
import Detail from '../views/Detail';
// Import your screens here


const Stack = createNativeStackNavigator();


const  routeScreenDefaultOptions : NativeStackNavigationOptions  = {
    headerStyle: {
        backgroundColor: 'rgba(7,26,93,255)',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={routeScreenDefaultOptions}
            >
                <Stack.Screen name="Home" component={Home}   />
                <Stack.Screen name="About" component={Detail}     />
             
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;