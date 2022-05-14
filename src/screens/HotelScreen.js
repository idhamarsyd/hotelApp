import React from 'react';
import {ScrollView, StyleSheet, Pressable, View, Image} from 'react-native';
import CustomText from './../components/CustomText';
import CustomButton from './../components/CustomButton';
import CustomDropdown from './../components/CustomDropdown';
import CustomInput from './../components/CustomInput';
import CityCard from './../components/CityCard';
import HotelCard from './../components/HotelCard';
import TabBar from './../components/TabBar/TabBar';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon, StarIcon} from 'react-native-heroicons/solid';
import HeroIcon from '../components/HeroIcon/HeroIcon';
import Chip from '../components/Chip/Chip';

const HotelScreen = ({saved = false, onSave}) => {
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
              <CustomText label="Hotel Detail" type="headline" color="black" />
            </View>
          </View>
          {/* Hotel Image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb',
              }}
            />
            <Pressable style={styles.loveIcon} onPress={onSave}>
              <HeroIcon icon={!saved ? 'HeartOutline' : 'HeartSolid'} />
            </Pressable>
          </View>
          {/* Hotel Info */}
          <View style={{margin: 16}}>
            <View style={styles.hotelInfo}>
              <View style={styles.titleContainer}>
                <CustomText
                  label="Refinery Hotel"
                  type="headline"
                  color="black"
                />
                <View style={styles.ratingContainer}>
                  <StarIcon size={16} color="#FFC947" />
                  <View style={styles.rating}>
                    <CustomText label="2" type="caption" color="#FFC947" />
                  </View>
                </View>
              </View>
              <View style={{opacity: 0.4}}>
                <CustomText
                  label="63 W 38th St, New York, NY, 10018, United States of America"
                  type="body"
                  color="black"
                />
              </View>
            </View>
            <View style={styles.hotelAbout}>
              <View style={{marginBottom: 8}}>
                <CustomText label="About" type="caption" color="black" />
              </View>
              <CustomText
                label="Luxury hotel with 2 bars/lounges, near 5th Avenue."
                type="body"
                color="black"
              />
            </View>
          </View>
          <ScrollView style={styles.hotelFeatures} horizontal={true}>
            <Chip label="FREE WIFI" />
            <Chip label="FREE WIFI" />
            <Chip label="FREE WIFI" />
            <Chip label="FREE WIFI" />
            <Chip label="FREE WIFI" />
            <Chip label="FREE WIFI" />
          </ScrollView>
          {/* HotelImages */}
          <ScrollView horizontal={true}>
            <View style={styles.carouselContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb',
                }}
              />
            </View>
            <View style={styles.carouselContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb',
                }}
              />
            </View>
            <View style={styles.carouselContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb',
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="BOOK THIS HOTEL"
            onPress={() => console.warn('pressed')}
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
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    height: 128,
    // borderWidth: 2,
    // width: '50%',
    // height: '100%',
  },
  buttonContainer: {
    flex: 0,
    padding: 16,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    // borderWidth: 2,
    bottom: 0,
    alignItems: 'center',
    // position: 'absolute',
  },
  loveIcon: {
    // borderWidth: 2,
    // borderColor: 'white',
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 0,
    margin: 8,
  },
  ratingContainer: {
    // borderWidth: 2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#0A1931',
    // flex: 1,
    // alignItems: 'center',
  },
  rating: {
    marginHorizontal: 4,
  },
  titleContainer: {
    // flex: 1,
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 16,
  },
  hotelInfo: {
    marginBottom: 16,
  },
  hotelFeatures: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginBottom: 16,
    // borderWidth: 2,
    // overflow: 'visible',
  },
  carouselContainer: {
    // borderWidth: 2,
    height: 128,
    flexDirection: 'row',
    width: 172,
  },
});

export default HotelScreen;
