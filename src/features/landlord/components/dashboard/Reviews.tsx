import {View} from 'react-native';
import React from 'react';
import {ITenantReview} from '../../../../interfaces';
import Card from '../../../../components/common/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../../../../components/common/Text';

type ReviewsProps = {
  reviews: ITenantReview[];
};
const Reviews: React.FC<ReviewsProps> = ({reviews}) => {
  return (
    <>
      <Text variant="heading" style="my-4">
        Reviews/Feedback
      </Text>

      <View>
        {reviews.map(review => (
          <Card key={review.id} backgroundColor="bg-white" style="p-4 mb-2">
            <View className="flex flex-row items-start">
              {/* Tenant Profile Icon */}
              <View className="p-3 bg-[#F5F5F5] rounded-lg mr-4">
                <Icon name="person-outline" size={30} color="#333333" />
              </View>

              {/* Review Content */}
              <View className="flex-1">
                <Text variant="primary" style="font-bold text-lg mb-1">
                  {review.tenantName}
                </Text>
                <Text variant="secondary" style="text-sm mb-1">
                  {review.feedback}
                </Text>
                <View className="flex flex-row items-center">
                  <Icon name="star" size={16} color="#F5C518" />
                  <Text variant="secondary" style="text-sm ml-1">
                    {review.rating}/5
                  </Text>
                </View>
                <Text
                  variant="secondary"
                  style="text-xs text-fontSecondary mt-1">
                  {review.timestamp}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </>
  );
};

export default Reviews;
