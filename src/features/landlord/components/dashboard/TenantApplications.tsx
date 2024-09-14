import {View} from 'react-native';
import React from 'react';
import {ITenantApplication} from '../../../../interfaces';
import Text from '../../../../components/common/Text';
import Card from '../../../../components/common/Card';
import Icon from 'react-native-vector-icons/Ionicons';

type TenantApplicationProps = {
  applications: ITenantApplication[];
};
const TenantApplications: React.FC<TenantApplicationProps> = ({
  applications,
}) => {
  return (
    <>
      <Text variant="heading" style="my-4">
        Tenant Applications
      </Text>

      <View>
        {applications.map(application => (
          <Card
            key={application.id}
            backgroundColor="bg-white"
            style="p-4 mb-2">
            <View className="flex flex-row items-start">
              {/* Application Icon */}
              <View className="p-3 bg-[#F5F5F5] rounded-lg mr-4">
                <Icon name="document-text-outline" size={30} color="#333333" />
              </View>

              {/* Application Details */}
              <View className="flex-1">
                <Text variant="primary" style="font-bold text-lg mb-1">
                  {application.tenantName}
                </Text>
                <Text variant="secondary" style="text-sm mb-1">
                  {application.propertyName}
                </Text>
                <Text variant="secondary" style="text-xs text-fontSecondary">
                  {application.applicationDate}
                </Text>
              </View>

              {/* Status */}
              <View
                className={`p-2 rounded-full ${
                  application.status === 'Pending'
                    ? 'bg-yellow-500'
                    : application.status === 'Rejected'
                    ? 'bg-red-500'
                    : 'bg-success'
                }`}>
                <Text variant="secondary" style="text-xs text-white">
                  {application.status === 'Pending'
                    ? 'Pending'
                    : application.status === 'Rejected'
                    ? 'Rejected'
                    : 'Approved'}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </>
  );
};

export default TenantApplications;
