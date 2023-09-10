import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileLayout from './layouts/ProfileLayout';
import { colors } from './utils/colors';
import { phoneHeight, phoneWidth } from './utils/dimensions';
import AppButton from './components/Button';
import { WebView } from 'react-native-webview';


function App(): JSX.Element {
  const [webView, setWebView] = useState(false)
  return (
    <ProfileLayout marginBottom={12} webView={webView} setWebView={setWebView}>
      <Image style={{ height: phoneHeight * 0.56 / 2, width: phoneWidth * 1.2 / 2, borderRadius: 50, resizeMode: 'cover', marginTop: 20 }} source={require('./assets/profile.jpeg')} />
      <View style={styles.others}>
        <Text
          style={{
            borderRadius: 20,
            alignSelf: 'center',
            fontSize: 35,
            fontWeight: 600,
            width: 'fit',
            marginBottom: 20,
            color: colors.darkTwo,
            alignSelf: 'flex-start'
          }}>
          Dhaniel <Text style={{ color: colors.other, fontSize: 20 }}>( Slack Username )</Text>
        </Text>
        <Text
          style={{
            padding: 10,
            paddingTop: 12,
            paddingHorizontal: 14,
            borderColor: colors.darkTwo,
            backgroundColor: colors.darkTwo,
            color: colors.white,
            borderWidth: 2,
            borderRadius: 40,
            alignSelf: 'flex-start',
            fontWeight: 600,
            width: 'fit',
          }}>React Native Mobile Dev</Text>
      </View>
      <AppButton title="Open Github" onPress={() => {
        setWebView(true)
      }} style={{ borderRadius: 30 }} />


      {webView && <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, width: phoneWidth - 40, height: phoneHeight, }}>
        <WebView
          source={{
            uri: 'https://github.com/dhanielcodes/'
          }}
          style={{ marginTop: 20, height: phoneHeight, }}
        />

      </View>}

    </ProfileLayout>
  );
}


const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
  others: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: colors.other
  },
});


export default App;