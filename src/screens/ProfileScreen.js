import React from 'react';
import {View, Text} from 'react-native';
import CustomText from '../components/CustomText';

const ProfileScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomText label="Profile" type="headline" color="black" />
    </View>
  );
};

export default ProfileScreen;
