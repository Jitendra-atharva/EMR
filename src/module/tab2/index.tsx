import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {commonStyles} from '../../themes';

import Tab2Controller from './Tab2Controller';

export default class Tab2 extends Tab2Controller {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Tab2</Text>
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
