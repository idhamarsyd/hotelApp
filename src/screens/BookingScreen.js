import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import CustomText from '../components/CustomText';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomDropdown from '../components/CustomDropdown';
import CustomButton from '../components/CustomButton';

const BookingScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      {/* Heading & Form */}
      <View>
        {/* Heading */}
        <View style={styles.heading}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color="black" size={24} />
          </Pressable>
          <View style={{marginLeft: 16}}>
            <CustomText
              label="Booking Information"
              type="headline"
              color="black"
            />
          </View>
        </View>
        {/* Form */}
        <View style={styles.formContainer}>
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Email" />
          <CustomInput placeholder="Phone" />
          <View style={styles.buttonContainer}>
            <CustomDropdown />
            <CustomDropdown />
          </View>
        </View>
      </View>

      {/* Action */}
      <View style={styles.action}>
        <View style={styles.price}>
          <View style={{opacity: 0.4}}>
            <CustomText label="Total Price" type="Caption" color="black" />
          </View>
          <CustomText label="$345" type="headline" color="black" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="BOOK NOW"
            onPress={() => console.warn('pressed')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    // borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    // borderColor: 'white',
  },
  formContainer: {
    // borderWidth: 2,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
  },
  action: {
    marginVertical: 40,
    // borderWidth: 2,
    // position: 'absolute',
    // bottom: 0,
    // flex: 0,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 20,
  },
});

export default BookingScreen;
