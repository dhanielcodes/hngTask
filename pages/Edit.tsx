import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileLayout from '../layouts/ProfileLayout';
import { colors } from '../utils/colors';
import { phoneHeight, phoneWidth } from '../utils/dimensions';
import AppButton from '../components/Button';
import AppInput from '../components/AppInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItem, setItem } from '../utils/useLocalStorage';
import { useNavigation } from '@react-navigation/native';


function EditPage(): JSX.Element {
    const [profile, setProfile] = useState({
        fullname: '',
        slackname: '',
        github: '',
        bio: ''
    })

    const navigation = useNavigation()

    const storeDetails = async (itemKey: any, itemVal: any) => {
        try {
            const jsonValue = JSON.stringify(itemVal);
            await AsyncStorage.setItem(`${itemKey}`, jsonValue);
            navigation.navigate('Home')

        } catch (e) {
            // saving error
        }

    };
    return (
        <ProfileLayout marginBottom={12}>
            {/* <Image style={{ height: phoneHeight * 0.56 / 2, width: phoneWidth * 1.2 / 2, borderRadius: 50, resizeMode: 'cover', marginTop: 20 }} source={require('../assets/profile.jpeg')} /> */}
            <View style={styles.others}>
                <AppInput setText={(val) => {
                    setProfile({ ...profile, fullname: val })
                }} placeholder="Full Name" />
                <AppInput setText={(val) => {
                    setProfile({ ...profile, slackname: val })
                }} placeholder="Slack Username" />
                <AppInput setText={(val) => {
                    setProfile({ ...profile, github: val })
                }} placeholder="Github Handle" />
                <AppInput setText={(val) => {
                    setProfile({ ...profile, bio: val })
                }} placeholder="Bio" />
            </View>
            <AppButton title="Save Updates" onPress={() => {
                if (profile?.fullname && profile?.slackname && profile?.github && profile?.bio) {
                    storeDetails('fullname', profile?.fullname)
                    storeDetails('slackname', profile?.slackname)
                    storeDetails('github', profile?.github)
                    storeDetails('bio', profile?.bio)
                } else {
                    return
                }
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