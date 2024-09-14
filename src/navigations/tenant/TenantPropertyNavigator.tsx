import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TenantPropertiesScreen from '../../features/tenant/screens/TenantPropertiesScreen';

const TenantPropertyStack = createNativeStackNavigator();

export default function TenantPropertyNavigator() {
  return (
    <TenantPropertyStack.Navigator
      initialRouteName="TanantProperties"
      screenOptions={{
        headerShown: false,
      }}>
      <TenantPropertyStack.Screen
        name="TanantProperties"
        component={TenantPropertiesScreen}
      />
    </TenantPropertyStack.Navigator>
  );
}
