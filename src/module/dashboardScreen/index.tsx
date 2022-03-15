import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {commonStyles} from '../../themes';

import DashboardController from './DashboardController';

export default class DashboardScreen extends DashboardController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  ...commonStyles,
});
// Customizable Area End
