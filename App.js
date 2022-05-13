import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CustomText from './src/components/CustomText';
import CustomButton from './src/components/CustomButton';
import CustomDropdown from './src/components/CustomDropdown';
import CustomInput from './src/components/CustomInput';
import CityCard from './src/components/CityCard';
import HotelCard from './src/components/HotelCard';
import HeroIcon from './src/components/HeroIcon/HeroIcon';
import TabBar from './src/components/TabBar/TabBar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchIcon, HeartIcon, UserIcon} from 'react-native-heroicons/outline';
import HomeScreen from './src/screens/HomeScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <View style={{flex: 1}}>
    //   <HomeScreen />
    // </View>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingTop: 8,
            paddingBottom: 12,
            backgroundColor: '#0A1931',
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <SearchIcon
                  size={20}
                  color="#FFC947"
                  opacity={focused ? 1 : 0.6}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 10,
                    lineHeight: 12,
                    letterSpacing: -0.2,
                    color: '#FFC947',
                    opacity: focused ? 1 : 0.6,
                  }}>
                  Search
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <HeartIcon
                  size={20}
                  color="#FFC947"
                  opacity={focused ? 1 : 0.6}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 10,
                    lineHeight: 12,
                    letterSpacing: -0.2,
                    color: '#FFC947',
                    opacity: focused ? 1 : 0.6,
                  }}>
                  Wishlist
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <UserIcon
                  size={20}
                  color="#FFC947"
                  opacity={focused ? 1 : 0.6}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 10,
                    lineHeight: 12,
                    letterSpacing: -0.2,
                    color: '#FFC947',
                    opacity: focused ? 1 : 0.6,
                  }}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
