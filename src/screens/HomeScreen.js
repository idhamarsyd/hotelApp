import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import CustomText from './../components/CustomText';
import CustomButton from './../components/CustomButton';
// import CustomDropdown from './../components/CustomDropdown';
import CustomInput from './../components/CustomInput';
import CityCard from './../components/CityCard';
import HotelCard from './../components/HotelCard';
import TabBar from './../components/TabBar/TabBar';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {fetchHotel} from './../stores/hotelReducer';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currency, setCurrency] = useState(null);
  const {isLoading, hotelList, cityList} = useSelector(state => state.hotel);

  useEffect(() => {
    // dispatch(fetchHotel());
  }, []);

  const CustomDropdown = () => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      {label: 'USD', value: 'usd'},
      {label: 'IDR', value: 'idr'},
    ]);
    return (
      <DropDownPicker
        placeholder="CURRENCY"
        open={open}
        value={currency}
        setValue={setCurrency}
        items={items}
        setItems={setItems}
        setOpen={setOpen}
        style={{borderRadius: 40, borderColor: '#FFF7EF', borderWidth: 2}}
        containerStyle={{flex: 1, marginHorizontal: 8}}
        textStyle={{
          fontSize: 12,
          lineHeight: 14,
          letterSpacing: 0.24,
          fontWeight: '900',
          color: '#0A1931',
        }}
      />
    );
  };

  const renderCities = (
    {item}, //item ini refer ke DATA
  ) => (
    <CityCard
      imageUrl={item.imageUrl}
      cityName={item.cityName}
      onPress={() => console.warn('pressed')}
    />
  );

  const renderHotels = (
    {item}, //item ini refer ke DATA
  ) => (
    <HotelCard
      imageUrl={item.optimizedThumbUrls.srpDesktop}
      hotelName={item.name}
      country={item.address.countryName}
      rating={item.starRating}
      onPress={() => console.warn('Lesgo')}
      onSave={() => console.warn('Saved!')}
    />
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: 'white', flex: 1}}>
          {/* Heading */}
          <View style={styles.heading}>
            <CustomText label="Temukan Hotel" type="headline" color="black" />
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
                  <FlatList
                    data={cityList}
                    horizontal={true}
                    renderItem={renderCities}
                    // keyExtractor={item => item.id}
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

          <FlatList
            data={hotelList}
            // horizontal={true}
            renderItem={renderHotels}
            // keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    // borderWidth: 2,
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

export default HomeScreen;
