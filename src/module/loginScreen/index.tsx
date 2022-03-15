import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput, CustomButton} from '../../components';
import {assets, commonStyles} from '../../themes';
import LoginController from './LoginController';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
const {t} = useTranslation();

export default class LoginScreen extends LoginController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomInput
          leftIcon={assets.ic_user}
          label="Email"
          ref={this.userNameRef}
          value={this.state.userName}
          onChangeText={this.handleChangeUserName}
          placeholder={'user name'}
          errorMessage={''}
        />
        <CustomInput
          leftIcon={assets.ic_lock}
          label="Password"
          ref={this.passwordRef}
          value={this.state.password}
          onChangeText={this.handleChangePassword}
          placeholder={'password'}
          errorMessage={''}
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
