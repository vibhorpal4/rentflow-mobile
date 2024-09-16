import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Card from '../../../components/common/Card';
import Text from '../../../components/common/Text';
import SearchBarWithFilter from '../../../components/common/SearchBarWithFilter';

const TenantPropertiesScreen = () => {
  const [search, setSearch] = useState('');
  const properties = [
    {
      id: '1',
      name: 'Sunset Apartments',
      location: '123 Main St, City',
      rent: '20,000',
      bedrooms: '2BHK',
      image: '',
    },
    {
      id: '2',
      name: 'Downtown Villas',
      location: '456 Park Avenue, City',
      rent: '35,000',
      bedrooms: '3BHK',
      image: '',
    },
  ];
  return (
    <AppLayout title="Properties">
      <SearchBarWithFilter
        searchValue={search}
        onSearchChange={e => setSearch(e)}
      />
      {properties.map(property => (
        <Card key={property.id} backgroundColor="bg-white" style="p-4 mb-2">
          <View className="flex flex-row items-start">
            {/* Property Image */}
            {property.image ? (
              <Image
                source={{uri: property.image}}
                className="w-20 h-20 rounded-lg"
              />
            ) : (
              <View className="w-20 h-20 bg-white rounded-lg" />
            )}

            {/* Property Description */}
            <View className="flex-1 ml-1">
              <Text variant="primary" style="font-bold text-lg mb-1">
                {property.name}
              </Text>
              <Text variant="secondary" style="text-sm mb-1">
                {property.location}
              </Text>
              <Text variant="secondary" style="text-sm">
                Rent: ₹{property.rent}/m
              </Text>
              <Text variant="secondary" style="text-xs text-fontSecondary">
                {property.bedrooms}, Parking Available
              </Text>
            </View>
          </View>
        </Card>
      ))}
    </AppLayout>
  );
};

export default TenantPropertiesScreen;
