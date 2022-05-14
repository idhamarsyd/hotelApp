import React from 'react';
import {View, ScrollView, StyleSheet, Pressable} from 'react-native';
import CustomText from '../components/CustomText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {CogIcon} from 'react-native-heroicons/solid';
import HeroIcon from '../components/HeroIcon/HeroIcon';
import HotelCard from '../components/HotelCard';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headline}>
          <HeroIcon icon="UserOutline" />
          <View style={{marginLeft: 16}}>
            <CustomText label="Idham Ar Rasyid" type="headline" color="black" />
          </View>
        </View>
        <Pressable onPress={() => navigation.push('Setting')}>
          <CogIcon size={24} color="black" />
        </Pressable>
      </View>
      {/* List */}
      <View style={{margin: 16}}>
        <CustomText
          label="Riwayat Pemesanan"
          type="subheadline"
          color="black"
        />
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
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => console.warn('Lesgo')}
            onSave={() => console.warn('Saved!')}
            saved={true}
          />
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => console.warn('Lesgo')}
            onSave={() => console.warn('Saved!')}
            saved={true}
          />
          <HotelCard
            imageUrl="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb"
            hotelName="The Grand NYC"
            country="New York"
            rating={2}
            onPress={() => console.warn('Lesgo')}
            onSave={() => console.warn('Saved!')}
            saved={true}
          />
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 2,
    // alignSelf: 'flex-start',
  },
});

export default ProfileScreen;
