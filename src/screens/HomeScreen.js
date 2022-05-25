import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';
import CustomText from './../components/CustomText';
import CustomButton from './../components/CustomButton';
import CustomInput from './../components/CustomInput';
import CityCard from './../components/CityCard';
import HotelCard from './../components/HotelCard';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  fetchHotel,
  updateSearchQuery,
  setLoading,
  setDetail,
} from './../stores/hotelReducer';
import {addWishlist, updateWishlist} from './../stores/wishlistReducer';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currency, setCurrency] = useState(null);
  const [city, setCity] = useState(null);
  const {isLoading, hotelList, cityList} = useSelector(state => state.hotel);
  const {wishlist} = useSelector(state => state.wishlist);
  const {isAuth} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchHotel());
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

  const searchPressed = async () => {
    const createQuery = {
      city: city,
      currency: currency ? currency : 'idr',
    };
    await dispatch(updateSearchQuery(createQuery));
    navigation.navigate('Search');
  };

  const cityPressed = async query => {
    const createQuery = {
      city: query,
      currency: 'idr',
    };
    await dispatch(updateSearchQuery(createQuery));
    navigation.navigate('Search');
  };

  const renderCities = (
    {item}, //item ini refer ke DATA
  ) => (
    <CityCard
      imageUrl={item.imageUrl}
      cityName={item.cityName}
      onPress={() => cityPressed(item.cityValue)}
    />
  );

  const savePressed = item => {
    if (isAuth) {
      if (!checkItem(item)) {
        dispatch(addWishlist(item));
      } else {
        const newWishlist = wishlist.filter(el => el.name !== item.name);
        dispatch(updateWishlist(newWishlist));
      }
    } else {
      navigation.navigate('Login');
    }
  };

  const hotelPressed = async item => {
    await dispatch(setDetail(item));
    // dispatch(setLoading());
    navigation.navigate('Hotel');
  };

  const checkItem = query => {
    const found = wishlist.some(el => el.name === query.name);
    return found;
  };

  const renderHotels = (
    {item}, //item ini refer ke DATA
  ) => (
    <HotelCard
      imageUrl={item.optimizedThumbUrls.srpDesktop}
      hotelName={item.name}
      country={item.address.countryName}
      rating={item.starRating}
      onPress={() => hotelPressed(item)}
      onSave={() => savePressed(item)}
      saved={checkItem(item) ? true : false}
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
          <CustomInput
            placeholder="Country/City"
            value={city}
            onChangeText={city => setCity(city)}
          />
          <View style={styles.buttonContainer}>
            <CustomDropdown />
            <CustomButton label="CARI" onPress={() => searchPressed()} />
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
          {isLoading ? (
            <View style={styles.searching}>
              <CustomText
                label="Mencari Destinasi Populer..."
                type="headline"
                color="black"
              />
            </View>
          ) : (
            <>
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

export default HomeScreen;
