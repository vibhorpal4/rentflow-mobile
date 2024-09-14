import {View} from 'react-native';
import React from 'react';
import Text from '../../../../components/common/Text';
import {IRecentActivity} from '../../../../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../../../components/common/Card';

type ReacentActivityProps = {
  activities: IRecentActivity[];
};

const RecentActivity: React.FC<ReacentActivityProps> = ({activities}) => {
  return (
    <>
      <Text variant="heading" style="my-4">
        Recent Activities
      </Text>

      <View>
        {activities.map(activity => (
          <Card key={activity.id} backgroundColor="bg-white" style="p-4  mb-2">
            <View className="flex flex-row items-start">
              {/* Activity Icon */}
              <View className="p-3 bg-[#F5F5F5] rounded-lg mr-4">
                <Icon name={activity.icon} size={30} color="#333333" />
              </View>

              {/* Activity Description */}
              <View className="flex-1">
                <Text variant="primary" style="font-bold text-lg mb-1">
                  {activity.title}
                </Text>
                <Text variant="secondary" style="text-sm mb-1">
                  {activity.details}
                </Text>
                <Text variant="secondary" style="text-xs text-fontSecondary">
                  {activity.timestamp}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </>
  );
};

export default RecentActivity;
