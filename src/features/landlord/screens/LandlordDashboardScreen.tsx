import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Text from '../../../components/common/Text';

import RecentActivity from '../components/dashboard/RecentActivity';
import Reviews from '../components/dashboard/Reviews';
import MaintenanceRequest from '../../shared/common/MaintenanceRequest';
import {IMaintenanceRequest} from '../../../interfaces';
import TenantApplications from '../components/dashboard/TenantApplications';
import FinancialSummary from '../components/dashboard/FinancialSummary';
import OverviewSection from '../components/dashboard/OverviewSection';

const {width, height} = Dimensions.get('window');

const LandlordDashboardScreen = () => {
  const activities = [
    {
      id: 1,
      icon: 'cash-outline',
      title: 'Rent Payment Received',
      details: 'Tenant John paid $1,200 for September rent.',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      icon: 'hammer-outline',
      title: 'Maintenance Request',
      details: 'Leaking faucet in Apt 23 reported by Tenant Sarah.',
      timestamp: '1 day ago',
    },
    {
      id: 3,
      icon: 'document-text-outline',
      title: 'Lease Agreement Signed',
      details: 'New lease agreement signed by Tenant Mark.',
      timestamp: '3 days ago',
    },
    {
      id: 4,
      icon: 'cash-outline',
      title: 'Rent Payment Received',
      details: 'Tenant John paid $1,200 for September rent.',
      timestamp: '2 hours ago',
    },
    {
      id: 5,
      icon: 'hammer-outline',
      title: 'Maintenance Request',
      details: 'Leaking faucet in Apt 23 reported by Tenant Sarah.',
      timestamp: '1 day ago',
    },
  ];
  const maintenanceRequests: IMaintenanceRequest[] = [
    {
      id: '1',
      propertyName: 'Sunset Apartments',
      tenantName: 'John Doe',
      issue: 'Leaking faucet in the kitchen',
      status: 'Pending',
      requestDate: '2024-09-05',
      dueDate: '2024-09-12',
    },
    {
      id: '2',
      propertyName: 'Downtown Villas',
      tenantName: 'Jane Smith',
      issue: 'Air conditioner not working',
      status: 'In Progress',
      requestDate: '2024-09-03',
      dueDate: '2024-09-10',
    },
    {
      id: '3',
      propertyName: 'Green Valley Condos',
      tenantName: 'Bob Johnson',
      issue: 'Water heater malfunction',
      status: 'Resolved',
      requestDate: '2024-08-28',
      dueDate: '2024-09-02',
    },
    {
      id: '4',
      propertyName: 'Palm Springs Residences',
      tenantName: 'Alice Williams',
      issue: 'Broken window in the living room',
      status: 'Pending',
      requestDate: '2024-09-07',
      dueDate: '2024-09-14',
    },
  ];

  const reviews = [
    {
      id: '1',
      tenantName: 'Jane Doe',
      feedback: 'Great property, well-maintained!',
      rating: 5,
      timestamp: '2024-09-13 09:15 AM',
    },
    {
      id: '2',
      tenantName: 'John Smith',
      feedback: 'Quick response from the landlord regarding maintenance.',
      rating: 4,
      timestamp: '2024-09-12 02:30 PM',
    },
    {
      id: '3',
      tenantName: 'Sarah Lee',
      feedback:
        'Had some issues with the water supply, but overall good experience.',
      rating: 3,
      timestamp: '2024-09-11 06:45 PM',
    },
  ];
  const financialSummary = {
    totalIncome: 50000, // in dollars
    totalExpenses: 10000, // in dollars
    netProfit: 40000, // in dollars
  };
  const applications = [
    {
      id: '1',
      tenantName: 'Alice Johnson',
      propertyName: '123 Oak Street, Apt 4B',
      applicationDate: '2024-09-10',
      status: 'Pending', // 'approved' or 'pending'
    },
    {
      id: '2',
      tenantName: 'Michael Brown',
      propertyName: '456 Maple Avenue, Apt 12C',
      applicationDate: '2024-09-09',
      status: 'Approved',
    },
    {
      id: '3',
      tenantName: 'Emma Wilson',
      propertyName: '789 Pine Road, Apt 7A',
      applicationDate: '2024-09-08',
      status: 'Rejected',
    },
  ];

  return (
    <AppLayout title="Dashboard" headerBorder={true}>
      <View className="mb-4 px-1">
        <Text variant="heading" style="text-2xl font-bold">
          Welcome, John !
        </Text>
      </View>
      <FinancialSummary />
      <OverviewSection />
      <RecentActivity activities={activities} />
      <MaintenanceRequest maintenanceRequests={maintenanceRequests} />
      <TenantApplications applications={applications} />
      <Reviews reviews={reviews} />
    </AppLayout>
  );
};

export default LandlordDashboardScreen;
