import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Icons } from '../../constants/icons'
import { Link, router } from 'expo-router'
import InputField from '../../components/input-fields'
import CustomButton from '../../components/custom-button'

const ResetPassword = () => {
    const [form, setForm] = useState({
        new_password: "",
        confirm_password: "",
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_box}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/(auth)/sign-in")}
                >
                    <Image
                        source={Icons.back}
                        style={{
                            width: 25,
                            height: 25,
                        }}
                        tintColor={"#fb2c36"}
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
                        Set new password
                    </Text>
                    {/* end to heading  */}
                </View>


                {/* start to description */}
                <Text style={{
                    fontSize: 14,
                    color: "#09090b"
                }}
                >
                    Must be at last 8 characters.
                </Text>
                {/* end to description */}

                {/* start to sign in form */}
                <View
                    style={{
                        gap: 16,
                        marginTop: 20,
                    }}
                >

                    {/* start to new password */}
                    <InputField
                        label="New password"
                        placeholder='••••••••'
                        isPassword
                        onChangeText={(value) => setForm({ ...form, new_password: value })}
                    />
                    {/* end to new password */}

                    {/* start to confirm password */}
                    <InputField
                        label="Confirm password"
                        placeholder='••••••••'
                        isPassword
                        onChangeText={(value) => setForm({ ...form, confirm_password: value })}
                    />
                    {/* end to confirm password */}

                    {/* start to submit button */}
                    <CustomButton
                        title='Submit'
                        style={{
                            marginTop: 12,
                        }}
                    />


                </View>
                {/* end to sign in form */}

                {/* start to redirect */}
                <View style={{
                    flexDirection: "row",
                    gap: 4,
                    justifyContent: "center",
                    marginTop: 10
                }}>

                    <Link
                        href={"/(auth)/welcome"}
                        style={{
                            color: "fb2c36"
                        }}
                    >
                        Reset code
                    </Link>
                </View>
                {/* end to redirect */}

            </View>
        </SafeAreaView>
    )
}

export default ResetPassword

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
        position: "relative"
    },
    button: {
        position: "absolute",
        top: 15,
        left: 5
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