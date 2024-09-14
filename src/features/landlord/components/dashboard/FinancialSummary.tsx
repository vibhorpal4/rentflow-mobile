import {View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Card from '../../../../components/common/Card';
import Text from '../../../../components/common/Text';

// Financial Summary Component
const FinancialSummary = () => {
  return (
    <>
      {/* Total Revenue */}
      <Card isShadow={true} style="flex-1 mx-1 p-4 ">
        <View className="flex flex-row items-center">
          <View className="p-2 bg-bgPrimary rounded-lg">
            <FAIcon size={24} name="money" color="#ffffff" />
          </View>
          <View className="ml-2">
            <Text variant="secondary" style="font-bold text-xs uppercase  ">
              Total Revenue
            </Text>
            <Text variant="primary" style="text-xl font-bold">
              ₹15,000
            </Text>
          </View>
        </View>
      </Card>
      <View className="flex flex-row justify-between py-2">
        {/* Total Expenses */}
        <Card isShadow={true} style="flex-1 mx-1 p-4">
          <View className="flex flex-row items-center">
            <View className="p-2 bg-buttonPrimary rounded-lg">
              <FAIcon size={24} name="shopping-bag" color="#ffffff" />
            </View>
            <View className="ml-2">
              <Text variant="secondary" style="font-bold text-xs uppercase  ">
                Total Expenses
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                ₹5,000
              </Text>
            </View>
          </View>
        </Card>

        {/* Net Income */}
        <Card isShadow={true} style="flex-1 mx-1  p-4">
          <View className="flex flex-row items-center">
            <View className="p-2 bg-bgSecondary rounded-lg">
              <FAIcon size={24} name="line-chart" color="#ffffff" />
            </View>
            <View className="ml-2">
              <Text variant="secondary" style="font-bold text-xs uppercase  ">
                Net Income
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                ₹10,000
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
};

export default FinancialSummary;
