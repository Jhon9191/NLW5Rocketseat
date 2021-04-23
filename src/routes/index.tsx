import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import StackNavigator from './routes'

const Routes = () => (
  <NavigationContainer>
      <StackNavigator/>
  </NavigationContainer>  
)

export default Routes;