import {View} from 'react-native';
import React from 'react';
import Text from '../../../components/common/Text';
import Card from '../../../components/common/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMaintenanceRequest} from '../../../interfaces';
import MaintenanceRequestCard from './MaintenanceRequestCard';
type MaintenanceRequestProps = {
  maintenanceRequests: IMaintenanceRequest[];
};
const MaintenanceRequest: React.FC<MaintenanceRequestProps> = ({
  maintenanceRequests,
}) => {
  return (
    <>
      <Text variant="heading" style="my-4">
        Maintenance Requests
      </Text>
      {maintenanceRequests.map(request => (
        <MaintenanceRequestCard key={request.id} {...request} />
      ))}
    </>
  );
};

export default MaintenanceRequest;
