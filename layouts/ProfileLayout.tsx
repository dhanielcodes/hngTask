import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {colors} from '../utils/colors';
import {phoneFontScale, phoneHeight, phoneWidth} from '../utils/dimensions';
import AppButton from '../components/Button';
export default function ProfileLayout({
  children,
  title = 'Title',
  desc,
  onPress,
  marginBottom = 50,
  setWebView,
  webView,
}) {
  return (
    <ScrollView
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        height: phoneHeight,
        position: 'relative',
      }}>
      <View style={{marginTop: 50}}>
        <View
          style={{
            marginBottom: marginBottom,
            flex: 1,
          }}>
          <TouchableWithoutFeedback>
            <View style={styles.topBar}>
              <Text
                style={{
                  borderRadius: 20,
                  fontWeight: 900,
                  alignSelf: 'center',
                  color: colors.mainColor,
                  fontSize: 20,
                }}>
                HNG TASK
              </Text>
              <View>
                <Text style={{}}></Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {webView && (
            <AppButton
              title="Close Webview"
              onPress={() => {
                setWebView(false);
              }}
              style={{borderRadius: 30}}
            />
          )}

          {desc && (
            <Text
              style={{
                fontSize: (phoneWidth * 0.08) / 2,
                opacity: 0.5,
                marginTop: 10,
              }}>
              {desc}
            </Text>
          )}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          {children}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text: {
    color: colors.dark,
  },
});