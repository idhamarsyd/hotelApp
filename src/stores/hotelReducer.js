import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchHotel = createAsyncThunk('hotel/fetchHotel', async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=10&checkIn=2022-05-20&checkOut=2022-05-27&adults1=1&sortOrder=PRICE&locale=en_US&currency=IDR',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': 'c19d3f542dmshb0260884d91b3bep19caa8jsne06d29c23052',
      },
    });
    const formatRes = await res.data.data.body.searchResults.results;
    return formatRes;
  } catch (error) {
    console.warn(error);
  }
});

const initialState = {
  hotelList: [
    // this is just a dummy to draw a structure of fetching result above
    {
      id: 2159513600,
      name: 'Hotel Pergola JFK Airport',
      starRating: 2.5,
      address: {
        countryName: 'United States',
      },
      optimizedThumbUrls: {
        srpDesktop:
          'https://exp.cdn-hotels.com/hotels/68000000/67460000/67453600/67453550/556383f5_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
      },
    },
  ],
  cityList: [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617234084793-11a2b9345949?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374',
      cityName: 'Bandung',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374',
      cityName: 'Jakarta',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1604999333679-b86d54738315?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450',
      cityName: 'Bali',
    },
  ],
  isLoading: false,
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchHotel.fulfilled]: (state, action) => {
      state.hotelList = action.payload;
      state.isLoading = false;
    },
    [fetchHotel.pending]: state => {
      state.isLoading = true;
    },
  },
});

// export const {userLogin, userLogout, userInfoUpdate} = userSlice.actions;

export default hotelSlice.reducer;
