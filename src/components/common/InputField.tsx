// src/components/common/InputField.tsx
import React from 'react';
import {TextInput, View, Text} from 'react-native';

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View className="mb-4">
      {label && (
        <Text className="text-fontHeading font-heading mb-1">{label}</Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        className="border border-borderPrimary rounded-lg p-3 text-fontPrimary"
      />
    </View>
  );
};

export default InputField;
