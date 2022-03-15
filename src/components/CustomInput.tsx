import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {assets, colors, commonStyles, fonts} from '../themes';
import Constant from '../utilities/Constant';
import {deviceBasedDynamicDimension} from '../utilities/Util';
import Typography from './Typography';

interface Props {
  customStyle?: any;
  onChangeText: (value: string) => void;
  onPressIcon?: () => void;
  onSubmitEditing?: () => void;
  value?: string;
  testID: string;
  placeholder: string;
  showIcon?: boolean;
  IsShow?: boolean;
  customRef?: any;
  returnKeyType?: any;
  errorMessage: string;
  leftIcon: number;
  rightIcon: number;
}
interface State {
  value?: string;
  showIcon?: boolean;
  IsShow?: boolean;
}

export default class CustomTextInput extends Component<Props, State> {
  static propTypes = {
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func,
    onPressIcon: PropTypes.func,
    testID: PropTypes.string,
    placeholder: PropTypes.string,
    showIcon: PropTypes.bool,
    IsShow: PropTypes.bool,
    customRef: PropTypes.any,
    returnKeyType: PropTypes.any,
    errorMessage: PropTypes.string,
    leftIcon: PropTypes.number,
    rightIcon: PropTypes.number,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value,
      showIcon: props.showIcon,
      IsShow: props.IsShow,
    };
  }

  render() {
    const {
      testID,
      placeholder,
      showIcon,
      customRef,
      returnKeyType,
      onSubmitEditing,
      errorMessage,
      leftIcon,
      rightIcon,
    } = this.props;

    return (
      <View>
        <View style={errorMessage ? styles.errorContainer : styles.container}>
          <View style={styles.appIconPadding}>
            <Image
              source={leftIcon}
              style={styles.appIconStyle}
              resizeMode={'cover'}
            />
          </View>
          <TextInput
            ref={customRef}
            {...this.props}
            testID={testID}
            style={[styles.inputBox, this.props.customStyle]}
            placeholderTextColor={colors.black}
            placeholder={placeholder}
            onChangeText={text => this.props.onChangeText(text)}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoCapitalize="none"
            //@ts-ignore
            autoCompleteType="off"
            textContentType="none"
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
          />
          {!showIcon ? (
            <TouchableOpacity
              style={styles.appIconPadding}
              onPress={() =>
                this.props.onPressIcon && this.props.onPressIcon()
              }>
              <Image
                style={styles.appIconStyle}
                source={rightIcon}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {errorMessage ? (
          <Typography color="error" font="MED">
            {errorMessage}
          </Typography>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    backgroundColor: colors.primaryInput,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Constant.staticStyle.br6,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.error,
    borderRadius: Constant.staticStyle.br6,
    borderWidth: 1,
  },
  inputBox: {
    flex: 1,
    height: Constant.staticStyle.h45,
    borderRadius: Constant.staticStyle.br6,
    fontFamily: fonts.MED,
    fontSize: Constant.staticStyle.fnt16,
  },
});
