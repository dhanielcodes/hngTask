import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/Home';
import EditPage from './pages/Edit';
import CvPage from './pages/Cv';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'HNG TASK' }}
        />
        <Stack.Screen
          options={{ title: 'Edit' }}
          name="Edit" component={EditPage} />
        <Stack.Screen
          name="CV"
          component={CvPage}
          options={{ title: 'Daniel Adekoya' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;