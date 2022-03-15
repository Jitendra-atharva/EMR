import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import {commonStyles} from '../../themes';

import SignUpController from './SignUpController';

export default class SignUpScreen extends SignUpController {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Screen</Text>
      </View>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  ...commonStyles,
});
// Customizable Area End
