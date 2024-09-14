import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TenantMaintenanceScreen from '../../features/tenant/screens/TenantMaintenanceScreen';

const TenantMaintenanceStack = createNativeStackNavigator();

export default function TenantMaintenanceNavigator() {
  return (
    <TenantMaintenanceStack.Navigator
      initialRouteName="TenantMaintenances"
      screenOptions={{
        headerShown: false,
      }}>
      <TenantMaintenanceStack.Screen
        name="TenantMaintenances"
        component={TenantMaintenanceScreen}
      />
    </TenantMaintenanceStack.Navigator>
  );
}
