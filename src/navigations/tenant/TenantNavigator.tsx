// src/navigation/TenantNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import {Platform, StyleSheet} from 'react-native';
import TenantDashboardNavigator from './TenantDashboardNavigator';
import TenantMaintenanceNavigator from './TenantMaintenanceNavigator';
import TenantPaymentNavigator from './TenantPaymentNavigator';
import TenantSettingNavigator from './TenantSettingNavigator';
import TenantPropertiesScreen from '../../features/tenant/screens/TenantPropertiesScreen';

const TenantTab = createBottomTabNavigator();

const TenantNavigator = () => {
  return (
    <TenantTab.Navigator
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
            case 'MaintenanceTab':
              iconName = focused ? 'hammer' : 'hammer-outline';
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
      <TenantTab.Screen
        name="DashboardTab"
        component={TenantDashboardNavigator}
      />

      <TenantTab.Screen
        name="MaintenanceTab"
        component={TenantMaintenanceNavigator}
      />
      <TenantTab.Screen
        name="PropertiesTab"
        component={TenantPropertiesScreen}
      />
      <TenantTab.Screen name="PaymentsTab" component={TenantPaymentNavigator} />
      <TenantTab.Screen name="SettingsTab" component={TenantSettingNavigator} />
    </TenantTab.Navigator>
  );
};

export default TenantNavigator;

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
