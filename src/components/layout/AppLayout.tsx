import React from 'react';
import {View, ScrollView, ViewStyle, TouchableOpacity} from 'react-native';
import Text from '../common/Text';
import Icon from 'react-native-vector-icons/Ionicons';
type AppLayoutProps = {
  children: React.ReactNode;
  padding?: boolean;
  margin?: boolean;
  backgroundColor?: string;
  title?: string;
  headerBorder?: boolean;
};

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  padding = true,
  margin = false,
  backgroundColor = 'bg-white',
  title,
  headerBorder = true,
}) => {
  return (
    <ScrollView className={`${backgroundColor}`}>
      <View
        className={`flex-row justify-between items-center p-4 bg-white ${
          headerBorder && 'border-b border-b-borderPrimary'
        } `}>
        {/* Title Text */}
        <Text variant="heading" style="font-bold text-fontPrimary">
          {title}
        </Text>

        {/* Icons Section */}
        <View className="flex-row items-center space-x-4">
          {/* Notification Icon */}
          <TouchableOpacity
            onPress={() => {}}
            className="border border-fontPrimary p-1 rounded-lg shadow-xl">
            <Icon name="notifications" size={24} className="text-fontPrimary" />
          </TouchableOpacity>

          {/* Profile Icon */}
          <TouchableOpacity
            onPress={() => {}}
            className="border border-fontPrimary p-1 rounded-lg shadow-xl">
            <Icon
              name="person-outline"
              size={24}
              className="text-fontPrimary"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className={`${padding && 'p-4'} ${margin && 'm-4'}`}>
        {children}
      </View>
    </ScrollView>
  );
};

export default AppLayout;
