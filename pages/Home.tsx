import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileLayout from '../layouts/ProfileLayout';
import { colors } from '../utils/colors';
import AppButton from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function HomePage(): JSX.Element {
    const navigation = useNavigation()

    return (
        <ProfileLayout marginBottom={12}>

            <AppButton title="View Cv" onPress={() => {
                navigation.navigate('CV')
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