import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandlordDashboardScreen from '../../features/landlord/screens/LandlordDashboardScreen';
import LandloardPropertiesScreen from '../../features/landlord/screens/LandlordPropertiesScreen';
import LandlordTenantScreen from '../../features/landlord/screens/LandlordTenantScreen';
import LandlordPaymentScreen from '../../features/landlord/screens/LandlordPaymentScreen';
import LandlordSettingScreen from '../../features/landlord/screens/LandlordSettingScreen';

const LandlordDashboardStack = createNativeStackNavigator();

export default function LandlordDashboardNavigator() {
  return (
    <LandlordDashboardStack.Navigator
      initialRouteName="LandlordDashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <LandlordDashboardStack.Screen
        name="LandlordDashboard"
        component={LandlordDashboardScreen}
      />
    </LandlordDashboardStack.Navigator>
  );
}
