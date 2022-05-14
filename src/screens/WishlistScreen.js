import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomText from '../components/CustomText';
import HotelCard from '../components/HotelCard';

const WishlistScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.headline}>
        <CustomText label="Wishlist" type="headline" color="black" />
      </View>
      <ScrollView>
        <View style={styles.list}>
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => console.warn('Lesgo')}
            onSave={() => console.warn('Saved!')}
            saved={true}
          />
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
