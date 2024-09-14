import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandlordDashboardScreen from '../../features/landlord/screens/LandlordDashboardScreen';
import LandloardPropertiesScreen from '../../features/landlord/screens/LandlordPropertiesScreen';
import LandlordTenantScreen from '../../features/landlord/screens/LandlordTenantScreen';
import LandlordPaymentScreen from '../../features/landlord/screens/LandlordPaymentScreen';
import LandlordSettingScreen from '../../features/landlord/screens/LandlordSettingScreen';

const LandlordSettingStack = createNativeStackNavigator();

export default function LandlordSettingNavigator() {
  return (
    <LandlordSettingStack.Navigator
      initialRouteName="LandlordSettings"
      screenOptions={{
        headerShown: false,
      }}>
      <LandlordSettingStack.Screen
        name="LandlordSettings"
        component={LandlordSettingScreen}
      />
    </LandlordSettingStack.Navigator>
  );
}
