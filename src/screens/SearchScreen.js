import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Pressable, View, FlatList} from 'react-native';
import CustomText from './../components/CustomText';
import CustomButton from './../components/CustomButton';
import CustomDropdown from './../components/CustomDropdown';
import CustomInput from './../components/CustomInput';
import CityCard from './../components/CityCard';
import HotelCard from './../components/HotelCard';
import TabBar from './../components/TabBar/TabBar';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useSelector, useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  searchHotel,
  updateSearchQuery,
  setHotelId,
  setHotelImage,
} from './../stores/hotelReducer';

const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {searchQuery, searchResult, isLoading} = useSelector(
    state => state.hotel,
  );
  const [currency, setCurrency] = useState(searchQuery.currency);
  const [city, setCity] = useState(searchQuery.city);

  useEffect(() => {
    dispatch(
      searchHotel(
        `https://hotels4.p.rapidapi.com/locations/v2/search?query=${encodeURIComponent(
          searchQuery.city,
        )}&locale=en_US&currency=${searchQuery.currency}`,
      ),
    );
  }, [searchQuery]);

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

  const renderHotels = (
    {item}, //item ini refer ke DATA
  ) => (
    <HotelCard
      imageUrl={
        'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527'
      }
      hotelName={item.name}
      // country={item.address.countryName}
      // rating={item.starRating}
      onPress={() =>
        hotelPressed(
          item.destinationId,
          'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527',
        )
      }
      onSave={() => console.warn('Saved!')}
    />
  );

  const searchPressed = async () => {
    const createQuery = {
      city: city,
      currency: currency,
    };
    await dispatch(updateSearchQuery(createQuery));
  };

  const hotelPressed = (id, image) => {
    dispatch(setHotelId(id));
    dispatch(setHotelImage(image));
    navigation.push('Hotel');
  };

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
          <CustomInput
            placeholder="Country/City"
            value={searchQuery.city}
            onChangeText={city => setCity(city)}
          />
          <View style={styles.buttonContainer}>
            <CustomDropdown />
            <CustomButton label="CARI" onPress={() => searchPressed()} />
          </View>

          {isLoading ? (
            <View style={styles.searching}>
              <CustomText
                label="Sedang Mencari..."
                type="headline"
                color="black"
              />
            </View>
          ) : (
            <>
              <View style={styles.heading}>
                <CustomText
                  label="Hasil Pencarian"
                  type="subheadline"
                  color="black"
                />
              </View>
              <FlatList
                data={searchResult}
                // horizontal={true}
                renderItem={renderHotels}
                // keyExtractor={item => item.id}
              />
            </>
          )}
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
  searching: {
    // borderWidth: 2,
    flex: 1,
    margin: 16,
    alignItems: 'center',
  },
});

export default SearchScreen;
