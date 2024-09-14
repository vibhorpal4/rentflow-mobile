// src/navigation/LandlordNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import {Platform, StyleSheet} from 'react-native';
import LandlordDashboardNavigator from './LandlordDashboardNavigator';
import LandlordPropertyNavigator from './LandlordPropertyNavigator';
import LandlordTenantNavigator from './LandlordTenantNavigator';
import LandlordPaymentNavigator from './LandlordPaymentNavigator';
import LandlordSettingNavigator from './LandlordSettingNavigator';

const LandlordTab = createBottomTabNavigator();

const LandlordNavigator = () => {
  return (
    <LandlordTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'grid-outline';

          switch (route.name) {
            case 'DashboardTab':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'PropertiesTab':
              iconName = focused ? 'business' : 'business-outline';
              break;
            case 'TenantsTab':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'PaymentsTab':
              iconName = focused ? 'card' : 'card-outline';
              break;
            case 'SettingsTab':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'grid-outline'; // Default case if no match
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#003366',
        tabBarInactiveTintColor: '#333333',
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
        tabBarShowLabel: false,
      })}>
      <LandlordTab.Screen
        name="DashboardTab"
        component={LandlordDashboardNavigator}
      />
      <LandlordTab.Screen
        name="PropertiesTab"
        component={LandlordPropertyNavigator}
      />
      <LandlordTab.Screen
        name="TenantsTab"
        component={LandlordTenantNavigator}
      />
      <LandlordTab.Screen
        name="PaymentsTab"
        component={LandlordPaymentNavigator}
      />
      <LandlordTab.Screen
        name="SettingsTab"
        component={LandlordSettingNavigator}
      />
    </LandlordTab.Navigator>
  );
};

export default LandlordNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'ios' ? 90 : 70, // More height for better padding
    paddingBottom: Platform.OS === 'ios' ? 20 : 10, // Extra padding for iOS
    backgroundColor: '#fff', // White background
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6', // Light border at the top
  },
  tabLabel: {
    fontSize: 12, // Adjust font size
    marginBottom: Platform.OS === 'ios' ? 8 : 5, // Extra margin for label
  },
  tabIcon: {
    marginTop: Platform.OS === 'ios' ? 10 : 5, // Extra margin for icon on iOS
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    color: '#8e8e93',
  },
  labelFocused: {
    fontSize: 10,
    color: '#ff6347',
  },
});
