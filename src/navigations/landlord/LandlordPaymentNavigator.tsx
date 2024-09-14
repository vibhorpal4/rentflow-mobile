import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandlordDashboardScreen from '../../features/landlord/screens/LandlordDashboardScreen';
import LandloardPropertiesScreen from '../../features/landlord/screens/LandlordPropertiesScreen';
import LandlordTenantScreen from '../../features/landlord/screens/LandlordTenantScreen';
import LandlordPaymentScreen from '../../features/landlord/screens/LandlordPaymentScreen';
import LandlordSettingScreen from '../../features/landlord/screens/LandlordSettingScreen';

const LandlordPaymentStack = createNativeStackNavigator();

export default function LandlordPaymentNavigator() {
  return (
    <LandlordPaymentStack.Navigator
      initialRouteName="LandlordPayments"
      screenOptions={{
        headerShown: false,
      }}>
      <LandlordPaymentStack.Screen
        name="LandlordPayments"
        component={LandlordPaymentScreen}
      />
    </LandlordPaymentStack.Navigator>
  );
}
