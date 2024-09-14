import {View} from 'react-native';
import React from 'react';
import {IPaymentHistory} from '../../../../interfaces';
import Card from '../../../../components/common/Card';
import Text from '../../../../components/common/Text';
import FAIcon from 'react-native-vector-icons/FontAwesome';

type PaymentHistoryProps = {
  payments: IPaymentHistory[];
};

const PaymentHistory: React.FC<PaymentHistoryProps> = ({payments}) => {
  return (
    <View>
      <Text variant="heading" style="my-4">
        Payment History
      </Text>
      {payments.map((payment, i) => (
        <Card style="flex-1 mx-1 p-4 mb-2 bg-bgLight shadow-lg" key={i}>
          <View className="flex flex-row items-center">
            <View
              className={`p-3 ${
                i % 2 === 0 ? 'bg-bgSecondary' : 'bg-fontHighlight'
              } rounded-lg mr-4`}>
              <FAIcon name="history" size={30} color="#ffffff" />
            </View>
            <View className="flex-1">
              <Text variant="secondary" style="font-bold text-xs uppercase">
                {payment.paymentDate}
              </Text>
              <Text variant="primary" style="text-xl font-bold">
                ₹${payment.amount}
              </Text>
              <Text variant="secondary" style="text-xs">
                Payment Mode: ${payment.paymentMode}
              </Text>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default PaymentHistory;
