import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import hotelReducer from './hotelReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    hotel: hotelReducer,
  },
});
