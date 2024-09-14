import {createSlice} from '@reduxjs/toolkit';
import {AppInterfaceEnum} from '../../enums';

interface ICommonSlice {
  appInterface: AppInterfaceEnum;
}

const initialState: ICommonSlice = {
  appInterface: AppInterfaceEnum.TENANT,
};

const commonSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInterface: (state, action) => {
      state.appInterface = action.payload;
    },
  },
});

export const {setInterface} = commonSlice.actions;

export default commonSlice.reducer;
