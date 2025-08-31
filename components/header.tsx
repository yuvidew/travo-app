import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icons } from '../constants/icons'
import { Color } from '../assets/Color'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image_box}>
                {/* start to image */}
                <Image
                    source={Icons.logo}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                {/* end to image */}

                <Text style={{
                    fontSize: 18,
                    fontWeight: 500
                }}>
                    Travo
                </Text>
            </View>

            <View style={styles.bell_box}>
                <Image
                    source={Icons.bell}
                    style={{
                        width: 23,
                        height: 23
                    }}
                />
                {/* TODO: get the notification count from the backend also add the redirect function to redirect notification page */}
                <View style={styles.notification_count}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 12
                    }}>10</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        height: 85,
        paddingBottom: 15,

    },

    image_box: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    bell_box: {
        position: "relative",
    },
    notification_count: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: -12,
        right : -7,
        backgroundColor: Color.primary,
        width: 25,
        height: 25,
        padding : 3,
        borderRadius: 100,
    }
})