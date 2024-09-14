import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TenantPaymentsScreen from '../../features/tenant/screens/TenantPaymentsScreen';

const TenantPaymentStack = createNativeStackNavigator();

export default function TenantPaymentNavigator() {
  return (
    <TenantPaymentStack.Navigator
      initialRouteName="TenantPayments"
      screenOptions={{
        headerShown: false,
      }}>
      <TenantPaymentStack.Screen
        name="TenantPayments"
        component={TenantPaymentsScreen}
      />
    </TenantPaymentStack.Navigator>
  );
}
