import React from 'react';
import {ScrollView, StyleSheet, Pressable, View} from 'react-native';
import CustomText from './../components/CustomText';
import CustomButton from './../components/CustomButton';
import CustomDropdown from './../components/CustomDropdown';
import CustomInput from './../components/CustomInput';
import CityCard from './../components/CityCard';
import HotelCard from './../components/HotelCard';
import TabBar from './../components/TabBar/TabBar';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: 'white', flex: 1}}>
          {/* Heading */}
          <View style={styles.heading}>
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowLeftIcon color="black" size={24} />
            </Pressable>
            <View style={{marginLeft: 16}}>
              <CustomText label="Pencarian" type="headline" color="black" />
            </View>
          </View>

          {/* Form */}
          <CustomInput placeholder="Country/City" value="Singapura" />
          <View style={styles.buttonContainer}>
            <CustomDropdown />
            <CustomButton
              label="CARI"
              onPress={() => console.warn('pressed')}
            />
          </View>
          <View style={styles.heading}>
            <CustomText
              label="Hasil Pencarian"
              type="subheadline"
              color="black"
            />
          </View>
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => navigation.push('Hotel')}
            onSave={() => console.warn('Saved!')}
          />
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => console.warn('Lesgo')}
            onSave={() => console.warn('Saved!')}
          />
        </View>
      </ScrollView>
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
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
  },
  cards: {
    flexDirection: 'row',
    // borderWidth: 2,
    // paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  wrapped: {
    marginHorizontal: 8,
    flexDirection: 'row',
  },
});

export default SearchScreen;
