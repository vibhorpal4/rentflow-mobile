import React, {useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import AppLayout from '../../../components/layout/AppLayout';
import Text from '../../../components/common/Text';
import SearchBarWithFilter from '../../../components/common/SearchBarWithFilter';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const LandlordPropertyScreen = () => {
  // State to manage search value and properties
  const [searchValue, setSearchValue] = useState('');

  // Example property data
  const properties = [
    {
      id: '1',
      name: 'Sunset Apartments',
      address: '123 Main St, City',
      rent: '25,000',
      tenant: 'John Doe',
      status: 'Occupied',
      image: '',
    },
    {
      id: '2',
      name: 'Downtown Villas',
      address: '456 Park Avenue, City',
      rent: '35,000',
      tenant: 'Sarah Lee',
      status: 'Occupied',
      image: '',
    },
    {
      id: '3',
      name: 'Sunset Apartments',
      address: '123 Main St, City',
      rent: '25,000',
      tenant: 'John Doe',
      status: 'Occupied',
      image: '',
    },
    {
      id: '4',
      name: 'Downtown Villas',
      address: '456 Park Avenue, City',
      rent: '35,000',
      tenant: 'Sarah Lee',
      status: 'Occupied',
      image: '',
    },
    {
      id: '5',
      name: 'Sunset Apartments',
      address: '123 Main St, City',
      rent: '25,000',
      tenant: 'John Doe',
      status: 'Occupied',
      image: '',
    },
    {
      id: '6',
      name: 'Downtown Villas',
      address: '456 Park Avenue, City',
      rent: '35,000',
      tenant: 'Sarah Lee',
      status: 'Occupied',
      image: '',
    },
    {
      id: '7',
      name: 'Sunset Apartments',
      address: '123 Main St, City',
      rent: '25,000',
      tenant: 'John Doe',
      status: 'Occupied',
      image: '',
    },
    {
      id: '8',
      name: 'Downtown Villas',
      address: '456 Park Avenue, City',
      rent: '35,000',
      tenant: 'Sarah Lee',
      status: 'Occupied',
      image: '',
    },
    {
      id: '9',
      name: 'Sunset Apartments',
      address: '123 Main St, City',
      rent: '25,000',
      tenant: 'John Doe',
      status: 'Occupied',
      image: '',
    },
    {
      id: '10',
      name: 'Downtown Villas',
      address: '456 Park Avenue, City',
      rent: '35,000',
      tenant: 'Sarah Lee',
      status: 'Occupied',
      image: '',
    },
  ];

  const handleFilterPress = () => {
    // Logic for filtering properties
    console.log('Filter button pressed');
  };

  const handleAddProperty = () => {
    // Navigate to the AddPropertyScreen when the button is clicked
  };

  return (
    <AppLayout title="Properties" headerBorder={true}>
      <View className="px-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text variant="heading" style="text-2xl font-bold mb-4 flex-1">
            Your Properties
          </Text>

          {/* Add New Property Button at the top */}
          <View>
            <TouchableOpacity
              onPress={handleAddProperty}
              className="border border-fontPrimary p-1 rounded-lg shadow-xl">
              <Icon name="add" size={30} color="#333333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar with Filter */}
        <SearchBarWithFilter
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onFilterPress={handleFilterPress}
          placeholder="Search properties..."
        />

        {/* Property List */}
        <View>
          {properties
            .filter(property =>
              property.name.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map(property => (
              <Card style="p-4" key={property.id}>
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

                  {/* Property Details */}
                  <View className="ml-4 flex-1">
                    <Text variant="primary" style="text-lg font-bold">
                      {property.name}
                    </Text>
                    <Text variant="secondary" style="text-sm mt-1">
                      {property.address}
                    </Text>
                    <Text variant="primary" style="text-sm mt-1 ">
                      Rent: ₹{property.rent}/m
                    </Text>
                    <Text variant="secondary" style="text-sm mt-1">
                      Tenant: {property.tenant} ({property.status})
                    </Text>
                  </View>
                </View>
              </Card>
            ))}
        </View>
      </View>
    </AppLayout>
  );
};

export default LandlordPropertyScreen;
