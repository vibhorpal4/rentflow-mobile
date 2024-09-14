import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandlordDashboardScreen from '../../features/landlord/screens/LandlordDashboardScreen';
import LandloardPropertiesScreen from '../../features/landlord/screens/LandlordPropertiesScreen';
import LandlordTenantScreen from '../../features/landlord/screens/LandlordTenantScreen';
import LandlordPaymentScreen from '../../features/landlord/screens/LandlordPaymentScreen';
import LandlordSettingScreen from '../../features/landlord/screens/LandlordSettingScreen';

const LandlordPropertyStack = createNativeStackNavigator();

export default function LandlordPropertyNavigator() {
  return (
    <LandlordPropertyStack.Navigator
      initialRouteName="LandlordProperties"
      screenOptions={{
        headerShown: false,
      }}>
      <LandlordPropertyStack.Screen
        name="LandlordProperties"
        component={LandloardPropertiesScreen}
      />
    </LandlordPropertyStack.Navigator>
  );
}
