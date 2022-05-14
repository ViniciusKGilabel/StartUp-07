import React from 'react'
import { NavigationContainer } from 'react-navigation/native'
import { createStackNavigator } from 'react-navigation-stack'
import LoggedOutStack from './LoggedOutStack'

const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Root" component={LoggedOutStack} />
      </Stack.Navigator>
    </NavigationContainer>
)

}

export default RootStack