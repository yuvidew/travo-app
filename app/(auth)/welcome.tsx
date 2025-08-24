import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants/images'
import { router } from 'expo-router';

const { width } = Dimensions.get("window")

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* start to welcome image  */}
            <Image
                source={images.welcome}
                style={styles.image}
                resizeMode="cover"
            />
            {/* end to welcome image */}

            {/* Overlay text */}
            <View style={{
                gap: 24,
                marginBottom : 20
            }}>
                <Text style={styles.h2}>
                    Welcome to travo
                </Text>
                <Text style={styles.p}> 
                    Discover your next adventure with Travo.
                    Find hidden gems, explore new destinations,
                    and make every journey unforgettable.
                </Text>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => router.push("/(auth)/sign-in")}
                >
                    <Text style = {{
                        color : "white",
                        fontSize : 16
                    }}>
                        
                        Let&apos;s Start
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
        padding: 12,
        gap: 10,
        justifyContent : "center"
    },

    image: {
        width: width - 24,   
        height: 450,
        borderRadius: 15
    },
    h2: {
        fontSize: 28,
        fontWeight: "700",
        color: "#fb2c36",
    },

    p: {
        fontSize: 16,
        fontWeight: "400",
        color: "#71717b",
    },

    button : {
        backgroundColor : "#fb2c36",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        padding : 5,
        height : 45,
        borderRadius : 10,
        
    }
})
