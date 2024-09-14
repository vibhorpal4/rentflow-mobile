// src/components/common/Button.tsx
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  className = '',
}) => {
  const buttonStyles =
    variant === 'primary'
      ? 'bg-buttonPrimary p-4 rounded-lg'
      : 'bg-bgSecondary p-4 rounded-lg';
  const textStyles = 'text-white font-body text-center';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${buttonStyles} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}>
      <Text className={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
