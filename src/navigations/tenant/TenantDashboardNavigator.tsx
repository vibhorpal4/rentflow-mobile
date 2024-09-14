import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TenantDashboardScreen from '../../features/tenant/screens/TenantDashboardScreen';

const TenantDashboardStack = createNativeStackNavigator();

export default function TenantDashboardNavigator() {
  return (
    <TenantDashboardStack.Navigator
      initialRouteName="TenantDashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <TenantDashboardStack.Screen
        name="LandlordDashboard"
        component={TenantDashboardScreen}
      />
    </TenantDashboardStack.Navigator>
  );
}
