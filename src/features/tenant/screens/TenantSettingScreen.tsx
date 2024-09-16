import React from 'react';
import {useAppDispatch} from '../../../hooks';
import {setInterface} from '../../../stores/slices/commonSlice';
import {AppInterfaceEnum} from '../../../enums';
import Button from '../../../components/common/Button';
import AppLayout from '../../../components/layout/AppLayout';

const TenantSettingScreen = () => {
  const dispatch = useAppDispatch();

  const switchInterface = () => {
    dispatch(setInterface(AppInterfaceEnum.LANDLORD));
  };
  return (
    <AppLayout title="Settings">
      <Button
        onPress={switchInterface}
        title="Switch to Landlord"
        variant="secondary"
      />
    </AppLayout>
  );
};

export default TenantSettingScreen;
