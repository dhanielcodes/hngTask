import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileLayout from '../layouts/ProfileLayout';
import { colors } from '../utils/colors';
import { phoneHeight, phoneWidth } from '../utils/dimensions';
import AppButton from '../components/Button';
import AppInput from '../components/AppInput';
import AsyncStorage from '@react-native-community/async-storage';



function EditPage({ navigation }): JSX.Element {
    const [profile, setProfile] = useState({
        fullname: 'Daniel Adekoya',
        slackname: 'Dhaniel',
        github: 'dhanielcodes',
        bio: "'Dhaniel' is a Frontend and Mobile Engineer. Does everything from Vue to React 💚",
    })
    const storeUser = async (value) => {
        try {
            await AsynStorage.setItem("user", JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    const getUser = async () => {
        try {
            const userData = JSON.parse(await AsynStorage.getItem("user"))
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser()
    }, [])

    return (
        <ProfileLayout marginBottom={12}>
            {/* <Image style={{ height: phoneHeight * 0.56 / 2, width: phoneWidth * 1.2 / 2, borderRadius: 50, resizeMode: 'cover', marginTop: 20 }} source={require('../assets/profile.jpeg')} /> */}
            <View style={styles.others}>
                <AppInput placeholder="Full Name" />
                <AppInput placeholder="Slack Username" />
                <AppInput placeholder="Github Handle" />
                <AppInput placeholder="Bio" />
            </View>
            <AppButton title="Save Changes" onPress={() => {
                storeUser()
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


export default EditPage;