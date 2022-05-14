import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      {/*
      COMO FAZER O STACK NAVIGATION ABAIXO CADA SCREEN TEM A FUNÇÃO DE 1 PAGINA DO APP
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default AppStack