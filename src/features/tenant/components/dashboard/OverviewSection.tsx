import {View} from 'react-native';
import React from 'react';
import Card from '../../../../components/common/Card';
import Text from '../../../../components/common/Text';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const OverviewSection = () => {
  return (
    <>
      <View className="flex flex-row justify-between items-center  py-2">
        <Card isShadow={true} style="flex-1 mx-1 p-3">
          <View className="flex flex-row gap-2 items-center">
            <View className="p-3 bg-bgSecondary rounded-lg">
              <FAIcon size={24} name="money" color="#ffffff" />
            </View>

            <View>
              <Text variant="secondary" style="font-bold uppercase text-xs">
                Total Paid
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                ₹5,000
              </Text>
            </View>
          </View>
        </Card>

        <Card isShadow={true} style="flex-1 mx-1 p-3">
          <View className="flex flex-row gap-2 items-center">
            <View className="p-2 bg-buttonPrimary rounded-lg">
              <FAIcon size={24} name="money" color="#ffffff" />
            </View>

            <View>
              <Text variant="secondary" style="font-bold uppercase text-xs">
                Rent due
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                ₹5,000
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
};

export default OverviewSection;
