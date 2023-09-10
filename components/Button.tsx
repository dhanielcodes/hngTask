import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {phoneHeight} from '../utils/dimensions';
import {colors} from '../utils/colors';

export default function AppButton({
  title = 'Click Me',
  onPress,
  bgColor = '#2CDF81',
  color = '#032330',
  disabled,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        backgroundColor: bgColor,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
        ...style,
      }}>
      <Text
        disabled={disabled}
        style={{
          textTransform: 'capitalize',
          textAlign: 'center',
          paddingTop: (phoneHeight * 0.04) / 2,
          paddingBottom: (phoneHeight * 0.04) / 2,
          fontSize: 18,
          borderColor: bgColor,
          fontFamily: 'Satoshi-Black',
          color: colors.white,
          fontWeight: 800,
          ...style,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}