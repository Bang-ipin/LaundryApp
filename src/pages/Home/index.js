import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {ImageHeader, Logo} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.Logo} />
        <Text> Selamat Datang </Text>
        <Text> Ervin Santoso </Text>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal:20,
    paddingTop:10
  },
  Logo:{
    width:windowWidth * 0.3,
    height:windowHeight * 0.06,
    marginBottom:10
  }
});
