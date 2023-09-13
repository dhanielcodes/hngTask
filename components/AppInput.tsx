import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { colors } from '../utils/colors';
import { phoneFontScale, phoneHeight, phoneWidth } from '../utils/dimensions';

export default function AppInput({ setText, placeholder, style }): JSX.Element {
  const [color, setColor] = useState(colors.dark)
  return (
    <View style={{
      marginBottom: (phoneHeight * 0.07) / 2,
      width: '100%',
      ...style

    }}>
      <TextInput
        onFocus={() => {
          setColor(colors.mainColor)
        }}
        onBlur={() => {
          setColor(colors.dark)
        }}
        selectTextOnFocus={true}
        style={{
          paddingTop: (phoneHeight * 0.048) / 2,
          paddingBottom: (phoneHeight * 0.048) / 2,
          paddingLeft: (phoneWidth * 0.14) / 2,
          paddingRight: (phoneWidth * 0.14) / 2,
          backgroundColor: colors.white,
          fontSize: phoneFontScale * 36 / 2,
          borderRadius: 100,
          color: colors.darkTwo,
          borderColor: color,
          borderWidth: 1
        }}
        placeholder={placeholder}
        placeholderTextColor="#00000082"
        onChangeText={setText}
      />
    </View>
  );
}
