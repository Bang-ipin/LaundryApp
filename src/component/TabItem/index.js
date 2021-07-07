import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAkunActive,
  IconAkunNotActive,
  IconHomeActive,
  IconHomeNotActive,
  IconPesananActive,
  IconPesananNotActive,
} from '../../assets';
import {WARNA_UTAMA,WARNA_DISABLE} from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <IconHomeActive /> : <IconHomeNotActive />;
    if (label === 'Pesanan')
      return isFocused ? <IconPesananActive /> : <IconPesananNotActive />;
    if (label === 'Akun')
      return isFocused ? <IconAkunActive /> : <IconAkunNotActive />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text:(isFocused) => ({
        fontSize:12,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop:3
    })
});
