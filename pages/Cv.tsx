import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileLayout from '../layouts/ProfileLayout';
import { colors } from '../utils/colors';
import AppButton from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function CvPage(): JSX.Element {

    const navigation = useNavigation()

    const [fullname, setFullname] = useState('Daniel Adekoya')
    const [slackname, setSlackName] = useState('Dhaniel')
    const [github, setGithub] = useState('dhanielcodes')
    const [bio, setBio] = useState("Dhaniel' is a Frontend and Mobile Engineer. Does everything from Vue to React 💚")

    const getData = async (itemKey) => {
        try {
            const jsonValue = await AsyncStorage.getItem(`${itemKey}`);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    const getMain = () => {
        getData('fullname')
            .then(data => data)
            .then(value => {
                setFullname(value)
            })
        getData('slackname')
            .then(data => data)
            .then(value => {
                setSlackName(value)

            })
        getData('github')
            .then(data => data)
            .then(value => {
                setGithub(value)

            })
        getData('bio')
            .then(data => data)
            .then(value => {
                setBio(value)

            })
    }


    console.log('hello')

    return (
        <ProfileLayout marginBottom={12} geData={getMain}>
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
                    {fullname || 'Daniel Adekoya'} <Text style={{ color: colors.other, fontSize: 20 }}>( Full Name )</Text>
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
                    {slackname || 'Dhaniel'} <Text style={{ color: colors.other, fontSize: 20 }}>( Slack Username )</Text>
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
                    @{github || 'dhanielcodes'} <Text style={{ color: colors.other, fontSize: 20 }}>( Github Handle )</Text>
                </Text>
                <Text style={{
                    color: colors.darkTwo, fontSize: 24,
                    fontWeight: 600,
                    borderTopWidth: 2,
                    borderColor: colors.other,
                    width: '100%',
                    paddingTop: 10,
                }}>Bio</Text>
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
                    {bio || "'Dhaniel' is a Frontend and Mobile Engineer. Does everything from Vue to React 💚"}
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


export default CvPage;