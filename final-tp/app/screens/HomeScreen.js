import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from '../containers/home/home' //Import the component file

const HomeScreen = ({ navigation }) =>(
  <View style={styles.container}>
    <Home 
      navigationProp={ navigation }
    />
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
});

export default HomeScreen;