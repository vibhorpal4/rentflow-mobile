import React from 'react';
import {View, Image} from 'react-native';
import Card from '../../../../components/common/Card';
import Text from '../../../../components/common/Text';

type PropertyInformationProps = {
  propertyName: string;
  address: string;
  rent: string;
  ownerName: string;
  ownerContact: string;
  propertyImage?: string; // Optional property image
  rentingDate: string;
};

const PropertyInformation: React.FC<PropertyInformationProps> = ({
  propertyName,
  address,
  rent,
  ownerName,
  ownerContact,
  propertyImage,
  rentingDate,
}) => {
  return (
    <Card style=" p-4" isShadow={true}>
      <View className="flex flex-row items-start">
        {/* Property Image */}
        {propertyImage ? (
          <Image
            source={{uri: propertyImage}}
            className="w-20 h-20 rounded-lg"
          />
        ) : (
          <View className="w-20 h-20 bg-gray-300 rounded-lg" />
        )}

        {/* Property Details */}
        <View className="ml-4 flex-1">
          <Text variant="heading" style="text-lg font-bold">
            {propertyName}
          </Text>
          <Text variant="secondary" style="text-sm mt-1">
            {address}
          </Text>
          <Text variant="primary" style="text-base mt-1 font-bold">
            Rent: ₹{rent}/m
          </Text>
          <Text variant="secondary" style="text-sm mt-1">
            Owner: {ownerName} ({ownerContact})
          </Text>
          <Text variant="secondary" style="text-sm mt-1">
            Renting Since: {rentingDate}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default PropertyInformation;
