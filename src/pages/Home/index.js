import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Ini React Native</Text>
      <Text style={styles.bigBlue}>Ini Juga React Native</Text>
      <Text style={[styles.bigBlue, styles.red]}>Ini React Native Juga</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',fontSize: 20,
  },
});
