import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {colors, fonts} from '../themes';
import {deviceBasedDynamicDimension} from '../utilities/Util';
import Constant from '../utilities/Constant';

type MyProps = {
  testID?: string;
  title: string;
  onPress?: () => void;
  customStyle?: object;
  titleStyle?: object;
};
type MyState = {};

export default class CustomButton extends Component<MyProps, MyState> {
  static propTypes = {
    testID: PropTypes.string,
    title: PropTypes.string,
    onPress: PropTypes.func,
  };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const {testID, title, onPress, customStyle, titleStyle} = this.props;

    return (
      <Button
        {...this.props}
        testID={testID}
        buttonStyle={[styles.button, customStyle]}
        title={title}
        onPress={() => onPress && onPress()}
        titleStyle={[styles.title, titleStyle]}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: Constant.staticStyle.br6,
    height: Constant.staticStyle.h45,
    borderColor: colors.text,
  },
  title: {
    fontFamily: fonts.MED,
    fontSize: Constant.staticStyle.fnt16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.black,
  },
});
