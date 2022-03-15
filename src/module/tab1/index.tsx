import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {commonStyles} from '../../themes';

import Tab1Controller from './Tab1Controller';

export default class Tab1 extends Tab1Controller {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Tab1</Text>
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
