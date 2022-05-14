import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomText from '../components/CustomText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.headline}>
        <CustomText label="Hello" type="headline" color="black" />
      </View>
      <View style={styles.form}>
        <CustomInput placeholder="Username" />
        <CustomInput placeholder="Password" />
        <View style={styles.buttonContainer}>
          <CustomButton label="LOGIN" onPress={() => console.warn('pressed')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    margin: 16,
  },
  form: {
    // borderWidth: 2,
    // margin: 16,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
  },
});

export default LoginScreen;
