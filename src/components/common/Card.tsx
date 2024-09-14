import React from 'react';
import {View} from 'react-native';

type CardProps = {
  children: React.ReactNode;
  style?: string;
  backgroundColor?: string;
  isShadow?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  style = '',
  backgroundColor = 'bg-white',
  isShadow = false, // Enable or disable Android shadow (default is true)
}) => {
  return (
    <View
      className={`p-4 rounded-lg ${backgroundColor} ${style}`}
      style={{
        ...(isShadow && {
          elevation: 5, // For Android shadow
          shadowColor: '#000', // For iOS shadow
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }),
      }}>
      {children}
    </View>
  );
};

export default Card;
