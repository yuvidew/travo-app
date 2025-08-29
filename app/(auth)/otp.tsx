import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/custom-button'
import InputField from '../../components/input-fields'
import { Icons } from '../../constants/icons'
import { useVerifyOTP } from './hook/useAuth'
import { Color } from '../../assets/Color'

const Otp = () => {
    const [form, setForm] = useState({
        pin: "",
    });

    const {mutate : onVerifyOtp, isPending} = useVerifyOTP()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_box}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => router.push("/(auth)/sign-in")}
                >
                    <Image 
                        source={Icons.back}
                        style = {{
                            width : 25,
                            height : 25,
                        }}
                        tintColor={Color.primary}
                    />
                </TouchableOpacity>
                {/* start to logo  */}
                <Image
                    source={Icons.logo}
                    resizeMode="contain"
                    style={styles.logo}
                />
                {/* end to logo  */}
            </View>
            <View style={{
                gap: 14
            }}>
                <View style={{ gap: 6 }}>
                    {/* start to heading  */}
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 700,
                            color: "#09090b"
                        }}
                    >
                        Send verification code
                    </Text>
                    {/* end to heading  */}
                </View>


                {/* start to description */}
                <Text style={{
                    fontSize: 14,
                    color: "#09090b"
                }}
                >
                    We&lsquo;ll send a code to your email to verify your aaccount
                </Text>
                {/* end to description */}

                {/* start to otp verify form form */}
                <View
                    style={{
                        gap: 16,
                        marginTop: 20,
                    }}
                >

                    {/* start to code */}
                    <InputField
                        label="Code"
                        placeholder='1234'
                        onChangeText={(value) => setForm({ ...form, pin: value })}
                    />
                    {/* end to code */}

                    {/* start to submit button */}
                    <CustomButton
                        title='Submit'
                        style={{
                            marginTop: 12,
                        }}
                        loading = {isPending}
                        onPress={() => onVerifyOtp(form)}
                    />


                </View>
                {/* end to otp verify form form */}

            </View>
        </SafeAreaView>
    )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // justifyContent : "center",
        gap: 28
    },
    image_box: {
        alignItems: "flex-start",
        justifyContent: "flex-end",
        height: 200,
        position : "relative"
    },
    button : {
        position : "absolute",
        top : 15,
        left : 5
    },
    logo: {
        width: 70,
        height: 70,
    },
    or_container: {
        flexDirection: "row",      // flex flex-row
        justifyContent: "center",  // justify-center
        alignItems: "center",      // items-center
        marginTop: 16,             // mt-4
    },
    line: {
        flex: 1,                   // flex-1
        height: 1,
        // borderWidth : 1,              // h-[1px]
        backgroundColor: "#AAAAAA",
        marginHorizontal: 6,       // gap-x-3 (≈ 0.75rem = 12px total gap, so 6px each side)
    },
    text: {
        fontSize: 18,              // text-lg
    },
})