import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icons } from '../constants/icons'
import { Color } from '../assets/Color';

const ErrorToast = () => {
    return (
        <SafeAreaView style={styles.error_container}>
            <View
                style={styles.error_box}

            >
                <Image
                    source={Icons.alert}
                    tintColor={Color.primary}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                <Text style={{
                    color: Color.primary,
                    fontSize: 20
                }}>
                    Failed to Fetch data
                </Text>
            </View>
        </SafeAreaView>
    )
}

const PendingTost = () => {
    return (
        <SafeAreaView style={styles.error_container}>
            <View
                style={styles.error_box}

            >
                <ActivityIndicator
                    size={"large"}
                    color={ Color.primary}
                />
            </View>
        </SafeAreaView>
    )
}

export {PendingTost , ErrorToast}

const styles = StyleSheet.create({
    error_container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
    error_box: {
        width: 350,
        // height : 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.white,
        borderRadius: 9,
        gap: 10,
        paddingVertical: 30
    }
})