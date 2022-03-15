import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput, CustomButton} from '../../components';
import {commonStyles} from '../../themes';
import LoginController from './LoginController';
import {useTranslation} from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
const {t} = useTranslation();

export default class LoginScreen extends LoginController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomInput
          ref={this.userNameRef}
          value={this.state.userName}
          onChangeText={this.handleChangeUserName}
          placeholder={''}
        />
        <CustomInput
          ref={this.passwordRef}
          value={this.state.password}
          onChangeText={this.handleChangePassword}
          placeholder={''}
        />
        <CustomButton title={t('button.login')} onPress={this.onPressLogin} />
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  ...commonStyles,
});
// Customizable Area End
