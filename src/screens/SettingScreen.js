import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import CustomText from '../components/CustomText';
import CustomInput from '../components/CustomInput';
import CustomDropdown from '../components/CustomDropdown';
import CustomButton from '../components/CustomButton';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View>
        {/* Heading */}
        <View style={styles.heading}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color="black" size={24} />
          </Pressable>
          <View style={{marginLeft: 16}}>
            <CustomText label="Settings" type="headline" color="black" />
          </View>
        </View>

        {/* Form */}
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Email" />
        <View style={styles.buttonContainer}>
          <CustomDropdown />
          <CustomButton
            label="SIMPAN"
            onPress={() => console.warn('pressed')}
          />
        </View>
      </View>
      <View style={styles.logout}>
        <CustomButton
          type="SECONDARY"
          label="KELUAR"
          onPress={() => console.warn('pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
  },
  heading: {
    // borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    // borderColor: 'white',
  },
  logout: {
    // borderWidth: 2,
    height: 40,
    marginVertical: 32,
  },
});

export default SettingScreen;
