import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants/images';
import { Color } from '../../assets/Color'

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
                    onPress={() => router.push("/(root)/(tabs)")}
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
        color: Color.primary,
    },

    p: {
        fontSize: 16,
        fontWeight: "400",
        color: "#71717b",
    },

    button : {
        backgroundColor : Color.primary,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        padding : 5,
        height : 45,
        borderRadius : 10,
        
    }
})
