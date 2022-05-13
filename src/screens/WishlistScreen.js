import React from 'react';
import {View, Text} from 'react-native';
import CustomText from '../components/CustomText';

const WishlistScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomText label="Wishlist" type="headline" color="black" />
    </View>
  );
};

export default WishlistScreen;
