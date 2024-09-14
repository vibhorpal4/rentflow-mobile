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
            <View className="p-2 bg-bgSecondary rounded-lg">
              <Icon size={24} name="business-outline" color="#ffffff" />
            </View>

            <View>
              <Text variant="secondary" style="font-bold uppercase text-xs">
                Properties
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                12
              </Text>
            </View>
          </View>
        </Card>

        <Card isShadow={true} style="flex-1 mx-1 p-3">
          <View className="flex flex-row gap-2 items-center">
            <View className="p-2 bg-buttonPrimary rounded-lg">
              <Icon size={24} name="people-outline" color="#ffffff" />
            </View>

            <View>
              <Text variant="secondary" style="font-bold uppercase text-xs">
                Tenants
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                12
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View className="flex flex-row justify-between items-center  py-1">
        {/* <Card isShadow={true} style="flex-1 mx-1 p-3">
          <View className="flex flex-row gap-2 items-center">
            <View className="p-2 bg-buttonPrimary rounded-lg px-4">
              <FAIcon size={24} name="rupee" color="#ffffff" />
            </View>

            <View>
              <Text variant="secondary" style="font-bold uppercase text-xs">
                Rent collected
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                ₹10,000
              </Text>
            </View>
          </View>
        </Card> */}

        <Card isShadow={true} style="flex-1 mx-1 p-3">
          <View className="flex flex-row gap-2 items-center">
            <View className="p-2 bg-bgSecondary rounded-lg">
              <FAIcon size={24} name="money" color="#ffffff" />
            </View>

            <View>
              <Text variant="secondary" style="font-bold uppercase text-xs">
                Rent Due
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
