import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {commonStyles} from '../../themes';

import Tab3Controller from './Tab3Controller';

export default class Tab3 extends Tab3Controller {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>tab3</Text>
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  ...commonStyles,
  container:{
    justifyContent:'center',
    alignItems:'center'
  }
});
// Customizable Area End
