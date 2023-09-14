import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { colors } from '../utils/colors';
import { phoneFontScale, phoneHeight, phoneWidth } from '../utils/dimensions';
import AppButton from '../components/Button';
import { useNavigation } from '@react-navigation/native';
export default function ProfileLayout({
  children,
  title = 'Title',
  desc,
  onPress,
  marginBottom = 50,
  setWebView,
  webView,
  geData
}) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      if (geData) {
        geData()
      }
    }, 2000);
  }, []);
  const navigation = useNavigation()

  const routes = navigation.getState()?.routeNames;
  const prevRoute = routes[routes.length - 2]
  useEffect(() => {
    onRefresh()
  }, [prevRoute])

  console.log(prevRoute)
  return (
    <ScrollView
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        height: phoneHeight,
        position: 'relative',
      }} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{ marginTop: 50 }}>
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
              style={{ borderRadius: 30 }}
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