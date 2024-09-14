// src/navigation/AppNavigator.tsx
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import LandlordNavigator from './landlord/LandlordNavigator';
import TenantNavigator from './tenant/TenantNavigator';
import {useAppDispatch, useAppSelector} from '../hooks';
import {AppInterfaceEnum} from '../enums';
import {login} from '../stores/slices/authSlice';
import {setInterface} from '../stores/slices/commonSlice';

const AppNavigator = () => {
  const {appInterface} = useAppSelector(state => state.common);
  const {isAuthenticated} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  dispatch(login());
  console.log({isAuthenticated});
  console.log({appInterface});
  dispatch(setInterface(AppInterfaceEnum.TENANT));
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        appInterface === AppInterfaceEnum.LANDLORD ? (
          <LandlordNavigator />
        ) : (
          <TenantNavigator />
        )
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
