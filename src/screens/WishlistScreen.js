import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import CustomText from '../components/CustomText';
import HotelCard from '../components/HotelCard';
import {addWishlist, updateWishlist} from './../stores/wishlistReducer';
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {wishlist} = useSelector(state => state.wishlist);
  const {isAuth} = useSelector(state => state.user);

  const savePressed = item => {
    if (!checkItem(item)) {
      dispatch(addWishlist(item));
    } else {
      const newWishlist = wishlist.filter(el => el.name !== item.name);
      dispatch(updateWishlist(newWishlist));
    }
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
      onPress={() => console.warn('Lesgo')}
      onSave={() => savePressed(item)}
      saved={checkItem(item) ? true : false}
    />
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.headline}>
        <CustomText label="Wishlist" type="headline" color="black" />
      </View>
      <ScrollView>
        <View style={styles.list}>
          {isAuth ? (
            <FlatList
              data={wishlist}
              // horizontal={true}
              renderItem={renderHotels}
              // keyExtractor={item => item.id}
            />
          ) : (
            <View style={{height: 40}}>
              <CustomButton
                label="MASUK"
                onPress={() => navigation.push('Login')}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    margin: 16,
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 2,
    // alignSelf: 'flex-start',
  },
});

export default WishlistScreen;
