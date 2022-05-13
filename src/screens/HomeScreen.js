import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomText from './../components/CustomText';
import CustomButton from './../components/CustomButton';
import CustomDropdown from './../components/CustomDropdown';
import CustomInput from './../components/CustomInput';
import CityCard from './../components/CityCard';
import HotelCard from './../components/HotelCard';
import TabBar from './../components/TabBar/TabBar';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: 'white', flex: 1, paddingVertical: 8}}>
          {/* Heading */}
          <View style={styles.heading}>
            <CustomText label="Temukan Hotel!" type="headline" color="black" />
          </View>

          {/* Form */}
          <CustomInput placeholder="Country/City" />
          <View style={styles.buttonContainer}>
            <CustomDropdown />
            <CustomButton
              label="CARI"
              onPress={() => console.warn('pressed')}
            />
          </View>

          {/* Countries */}
          <View style={styles.countries}>
            <View style={styles.heading}>
              <CustomText
                label="Kota-kota di Indonesia"
                type="subheadline"
                color="black"
              />
            </View>
            <View style={styles.cards}>
              <ScrollView style={styles.scroll} horizontal={true}>
                <View style={styles.wrapped}>
                  <CityCard
                    imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
                    cityName="Bandung"
                    onPress={() => console.warn('Prsss')}
                  />
                  <CityCard
                    imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
                    cityName="Bandung"
                    onPress={() => console.warn('Prsss')}
                  />
                  <CityCard
                    imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
                    cityName="Bandung"
                    onPress={() => console.warn('Prsss')}
                  />
                  <CityCard
                    imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
                    cityName="Bandung"
                    onPress={() => console.warn('Prsss')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.heading}>
            <CustomText
              label="Destinasi Populer"
              type="subheadline"
              color="black"
            />
          </View>
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => console.warn('Lesgo')}
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
    marginVertical: 16,
    marginHorizontal: 16,
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

export default HomeScreen;
