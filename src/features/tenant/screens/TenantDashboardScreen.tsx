import {View} from 'react-native';
import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Text from '../../../components/common/Text';
import PropertyInformation from '../components/dashboard/PropertyInformation';
import OverviewSection from '../components/dashboard/OverviewSection';
import {IMaintenanceRequest, IPaymentHistory} from '../../../interfaces';
import MaintenanceRequest from '../../shared/common/MaintenanceRequest';
import LeaseDetails from '../components/dashboard/LeaseDetails';
import PaymentHistory from '../components/dashboard/PaymentHistory';

const details = {
  propertyName: 'Property 1',
  address: '123 Main St, Anytown, USA',
  rent: '500',
  ownerName: 'Jane Doe',
  ownerContact: '123-456-7890',
  propertyImage:
    'https://unsplash.com/photos/outdoor-lamps-turned-on-XbwHrt87mQ0',
  rentingDate: 'July 2021',
};
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
const payments: IPaymentHistory[] = [
  {
    id: '1',
    amount: '5000',
    paymentDate: '2024-09-10',
    paymentMode: 'UPI',
  },
  {
    id: '2',
    amount: '5000',
    paymentDate: '2024-09-10',
    paymentMode: 'UPI',
  },
  {
    id: '3',
    amount: '5000',
    paymentDate: '2024-09-10',
    paymentMode: 'UPI',
  },
  {
    id: '4',
    amount: '5000',
    paymentDate: '2024-09-10',
    paymentMode: 'UPI',
  },
];

const TenantDashboardScreen = () => {
  return (
    <AppLayout title="Dashboard" headerBorder={true} isActionShown={true}>
      <View className="mb-4 px-1">
        <Text variant="heading" style="text-2xl font-bold">
          Welcome, John !
        </Text>
      </View>
      <PropertyInformation
        propertyName={details.propertyName}
        propertyImage={details.propertyImage}
        address={details.address}
        rent={details.rent}
        ownerName={details.ownerName}
        ownerContact={details.ownerContact}
        rentingDate={details.rentingDate}
      />
      <OverviewSection />
      <LeaseDetails />
      <MaintenanceRequest maintenanceRequests={maintenanceRequests} />
      <PaymentHistory payments={payments} />
    </AppLayout>
  );
};

export default TenantDashboardScreen;
