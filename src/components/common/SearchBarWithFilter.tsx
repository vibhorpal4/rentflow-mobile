import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from './InputField';

type SearchBarWithFilterProps = {
  searchValue: string;
  onSearchChange: (text: string) => void;
  onFilterPress?: () => void;
  placeholder?: string;
  isFilterEnabled?: boolean;
};

const SearchBarWithFilter: React.FC<SearchBarWithFilterProps> = ({
  searchValue,
  onSearchChange,
  onFilterPress,
  placeholder = 'Search...',
  isFilterEnabled = false,
}) => {
  return (
    <View className="flex-row items-center mb-4">
      {/* Search Input */}
      <View className="flex-1">
        <InputField
          label=""
          value={searchValue}
          onChangeText={onSearchChange}
          placeholder={placeholder}
        />
      </View>

      {isFilterEnabled && (
        <TouchableOpacity onPress={onFilterPress} className="ml-2 p-3">
          <Icon name="filter-outline" size={24} color="#333333" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBarWithFilter;
