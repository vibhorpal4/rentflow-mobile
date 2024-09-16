import {View, Text} from 'react-native';
import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Button from '../../../components/common/Button';
import {useAppDispatch} from '../../../hooks';
import {setInterface} from '../../../stores/slices/commonSlice';
import {AppInterfaceEnum} from '../../../enums';

const LandlordSettingScreen = () => {
  const dispatch = useAppDispatch();
  const switchInterface = () => {
    dispatch(setInterface(AppInterfaceEnum.TENANT));
  };
  return (
    <AppLayout title="Settings">
      <Button
        onPress={switchInterface}
        title="Switch to tenant"
        variant="secondary"
      />
    </AppLayout>
  );
};

export default LandlordSettingScreen;
