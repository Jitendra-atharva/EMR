import React, {PureComponent} from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';
import {normalize} from 'react-native-elements';

import {ColorType} from '../themes/colors';
import {fontType} from '../themes/fonts';
import {colors, fonts} from '../themes';
import {dimensions} from '../utilities/Util';

type Color = ColorType;
type Font = fontType;

type DefaultProps = Readonly<typeof defaultProps>;

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: Color;
  font?: Font;
} & Partial<DefaultProps>;

const defaultProps = {
  color: 'primary',
  size: 16,
  style: {},
  lines: 0,
  font: 'REG',
  pd: 0,
};

class Typography extends PureComponent<Props & DefaultProps> {
  render() {
    const {lines, style, children, size, color, font, pd} = this.props;

    return (
      <Text
        numberOfLines={lines ? lines : 0}
        adjustsFontSizeToFit
        style={[getStyles(color, font, size, pd).textStyle, style]}>
        {children}
      </Text>
    );
  }

  static defaultProps = defaultProps;
}

const getStyles = (color: Color, font: Font, size: number, pd: number) =>
  StyleSheet.create({
    textStyle: {
      color: colors[color || 'black'],
      fontFamily: fonts[font || 'REG'],
      fontSize: normalize(size || 16),
      padding: dimensions.hp(pd || 0),
    },
  });

export default Typography;
