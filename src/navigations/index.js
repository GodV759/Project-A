import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import ListWorks from '../screens/ListWorks';
import Register from '../screens/Register';
import ListWorksDetails from '../screens/ListWorksDetails';

const Stack = createStackNavigator();

function RootNativation(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="ListWorks" component={ListWorks}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="ListWorksDetails" component={ListWorksDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNativation;