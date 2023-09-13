import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileLayout from '../layouts/ProfileLayout';
import { colors } from '../utils/colors';
import { phoneHeight, phoneWidth } from '../utils/dimensions';
import AppButton from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomePage({ navigation }): JSX.Element {

    const [profile, setProfile] = useState({
        fullname: 'Daniel Adekoya',
        slackname: 'Dhaniel',
        github: 'dhanielcodes',
        bio: "'Dhaniel' is a Frontend and Mobile Engineer. Does everything from Vue to React 💚",
    })

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('details');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    const getMain = () => {
        getData()
            .then(data => data)
            .then(value => {
                console.log("yourKey Value:  " + JSON.stringify(value))
                setProfile(JSON.stringify(value))
                console.log('ot', profile)

            })
            .catch(err => console.log(err))
    }
    const storeDetails = async (itemKey: any, itemVal: any) => {
        try {
            const jsonValue = JSON.stringify(itemVal);
            await AsyncStorage.setItem(`${itemKey}`, jsonValue);
            getMain()
        } catch (e) {
            // saving error
        }

    };
    useEffect(() => {
        storeDetails('details', profile)
    }, [])

    return (
        <ProfileLayout marginBottom={12}>
            {/* <Image style={{ height: phoneHeight * 0.56 / 2, width: phoneWidth * 1.2 / 2, borderRadius: 50, resizeMode: 'cover', marginTop: 20 }} source={require('../assets/profile.jpeg')} /> */}
            <View style={styles.others}>
                <Text
                    style={{
                        borderRadius: 20,
                        alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 600,
                        width: 'fit',
                        marginBottom: 10,
                        color: colors.darkTwo,
                        alignSelf: 'flex-start'
                    }}>
                    {profile.fullname} <Text style={{ color: colors.other, fontSize: 20 }}>( Full Name )</Text>
                </Text>
                <Text
                    style={{
                        borderRadius: 20,
                        alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 600,
                        width: 'fit',
                        marginBottom: 10,
                        color: colors.darkTwo,
                        alignSelf: 'flex-start'
                    }}>
                    {profile.slackname} <Text style={{ color: colors.other, fontSize: 20 }}>( Slack Username )</Text>
                </Text>
                <Text
                    style={{
                        borderRadius: 20,
                        alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 600,
                        width: 'fit',
                        marginBottom: 20,
                        color: colors.darkTwo,
                        alignSelf: 'flex-start'
                    }}>
                    @{profile.github} <Text style={{ color: colors.other, fontSize: 20 }}>( Github Handle )</Text>
                </Text>
                <Text style={{
                    color: colors.darkTwo, fontSize: 20,
                    fontWeight: 600,
                    borderTopWidth: 2,
                    borderColor: colors.other,
                    width: '100%',
                    paddingTop: 10,
                }}>About*</Text>
                <Text
                    style={{
                        borderRadius: 20,
                        alignSelf: 'center',
                        fontSize: 15,
                        fontWeight: 600,
                        width: 'fit',
                        marginBottom: 20,
                        color: colors.darkTwo,
                        alignSelf: 'flex-start'
                    }}>
                    {profile.bio}
                </Text>
                <Text
                    style={{
                        padding: 4,
                        paddingTop: 6,
                        paddingHorizontal: 8,
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
            <AppButton title="Edit Profile" onPress={() => {
                navigation.navigate('Edit')
            }} style={{ borderRadius: 30 }} />
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


export default HomePage;