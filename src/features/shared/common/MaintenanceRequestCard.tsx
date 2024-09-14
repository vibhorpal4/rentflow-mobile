import React from 'react';
import {View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {IMaintenanceRequest} from '../../../interfaces';
import Card from '../../../components/common/Card';
import Text from '../../../components/common/Text';

const MaintenanceRequestCard = ({
  propertyName,
  tenantName,
  issue,
  status,
  requestDate,
  dueDate,
}: IMaintenanceRequest) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Resolved':
        return 'bg-green-500';
      default:
        return 'bg-fontPrimary';
    }
  };

  return (
    <Card style="p-4 mb-2">
      <View className="flex flex-row items-start">
        {/* Icon */}
        <View className="p-3 bg-[#F5F5F5] rounded-lg mr-4">
          <FAIcon name="wrench" size={30} color="#333333" />
        </View>

        {/* Request Info */}
        <View className="flex-1">
          <Text variant="primary" style="font-bold text-lg">
            {propertyName}
          </Text>
          <Text variant="secondary" style="text-sm">
            Tenant: {tenantName}
          </Text>
          <Text variant="secondary" style="text-sm">
            Issue: {issue}
          </Text>
          <Text variant="secondary" style="text-xs text-fontSecondary">
            Requested on: {requestDate}
          </Text>
          {dueDate && (
            <Text variant="secondary" style="text-xs text-fontSecondary">
              Due by: {dueDate}
            </Text>
          )}
        </View>
        {/* Status */}
        <View className={`p-2 rounded-full ${getStatusColor()}`}>
          <Text variant="secondary" style="text-xs text-white">
            {status}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default MaintenanceRequestCard;
