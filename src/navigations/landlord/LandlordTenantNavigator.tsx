import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandlordDashboardScreen from '../../features/landlord/screens/LandlordDashboardScreen';
import LandloardPropertiesScreen from '../../features/landlord/screens/LandlordPropertiesScreen';
import LandlordTenantScreen from '../../features/landlord/screens/LandlordTenantScreen';
import LandlordPaymentScreen from '../../features/landlord/screens/LandlordPaymentScreen';
import LandlordSettingScreen from '../../features/landlord/screens/LandlordSettingScreen';

const LandlordTenantStack = createNativeStackNavigator();

export default function LandlordTenantNavigator() {
  return (
    <LandlordTenantStack.Navigator
      initialRouteName="LandlordTenants"
      screenOptions={{
        headerShown: false,
      }}>
      <LandlordTenantStack.Screen
        name="LandlordTenants"
        component={LandlordTenantScreen}
      />
    </LandlordTenantStack.Navigator>
  );
}
