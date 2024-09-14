import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TenantSettingScreen from '../../features/tenant/screens/TenantSettingScreen';

const TenantSettingStack = createNativeStackNavigator();

export default function TenantSettingNavigator() {
  return (
    <TenantSettingStack.Navigator
      initialRouteName="TenantSettings"
      screenOptions={{
        headerShown: false,
      }}>
      <TenantSettingStack.Screen
        name="TenantSettings"
        component={TenantSettingScreen}
      />
    </TenantSettingStack.Navigator>
  );
}
