import React, {useState} from 'react';
import CustomText from './../CustomText';
import {Pressable, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'USD', value: 'USD'},
    {label: 'IDR', value: 'IDR'},
  ]);
  return (
    <DropDownPicker
      placeholder="CURRENCY"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.wrapped}
      containerStyle={styles.container}
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

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    // alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  wrapped: {
    borderRadius: 40,
    borderColor: '#FFF7EF',
    borderWidth: 2,
    // height: 40,
  },
});

export default CustomDropdown;
