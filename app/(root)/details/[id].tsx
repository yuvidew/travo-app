import { Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetTripById } from '../../../hooks/useTrips'
import {ErrorToast, PendingTost} from '../../../components/ErrorToast';

const Details = () => {
    const {data , isPending , isError} = useGetTripById();

    if (isError) {
        return (
            <ErrorToast/>
        )
    }

    if (isPending) {
        return <PendingTost/>
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <Text>hello</Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({

})