import React from 'react';
import {View} from 'react-native';
import Card from '../../../../components/common/Card';
import Text from '../../../../components/common/Text';
import Icon from 'react-native-vector-icons/Ionicons';

const LeaseDetails = () => {
  return (
    <Card style="flex-1 mx-1 p-4  shadow-lg" isShadow={true}>
      <View className="flex flex-row items-center">
        <View className="p-2 bg-bgPrimary rounded-lg">
          <Icon size={24} name="document-text-outline" color="#ffffff" />
        </View>
        <View className="ml-2">
          <Text variant="secondary" style="font-bold text-xs uppercase">
            Lease Details
          </Text>
          <Text variant="primary" style="text-xl font-bold">
            Lease End: Dec 31, 2024
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default LeaseDetails;
