import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Icons } from '../../constants/icons'
import { Link } from 'expo-router'
import InputField from '../../components/input-fields'
import CustomButton from '../../components/custom-button'

const Signup = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name : ""
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_box}>
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
                        Create account {""}
                    </Text>
                    {/* end to heading  */}
                </View>


                {/* start to description */}
                <Text style={{
                    fontSize: 14,
                    color: "#09090b"
                }}
                >
                    Create a new account to get started and enjoy seamless access to oout features
                </Text>
                {/* end to description */}

                {/* start to sign in form */}
                <View
                    style={{
                        gap: 16,
                        marginTop: 20,
                    }}
                >

                    {/* start to name */}
                    <InputField
                        label="Name"
                        placeholder='John doe'
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />
                    {/* end to name */}

                    {/* start to email */}
                    <InputField
                        label="Email"
                        placeholder='m@example.com'
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    {/* end to email */}
                    {/* start to password */}
                    <InputField
                        label="Password"
                        placeholder='••••••••'
                        isPassword
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                    {/* end to password */}

                    {/* start to submit button */}
                    <CustomButton
                        title='Sign in'
                        style={{
                            marginTop: 12,
                        }}
                    />
                    {/* end to submit button */}

                    <View style={styles.or_container}>
                        <View style={styles.line} />
                        <Text style={styles.text}>Or continue with</Text>
                        <View style={styles.line} />
                    </View>

                    {/* start to submit button */}
                    <CustomButton
                        IconLeft={
                            <Image
                                source={Icons.google}
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                                resizeMode="contain"
                            />
                        }
                        title='Continue with Goggle'
                        bgVariant="outline"
                        textVariant="outline"

                        style={{
                            marginTop: 12,
                        }}
                    />
                    {/* end to submit button */}

                </View>
                {/* end to sign in form */}

                {/* start to redirect */}
                <View style={{
                    flexDirection: "row",
                    gap: 4,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: "#09090b"
                    }}>
                    Already you have a account?{" "}
                    </Text>

{/* TODO: change /(auth)/otp to /(auth)/sing-in */}
                    <Link
                        href={"/(auth)/otp"}
                        style={{
                            textDecorationLine: "underline"
                        }}
                    >
                        Sign in
                    </Link>
                </View>
                {/* end to redirect */}

            </View>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent : "center",
        gap: 28
    },
    image_box: {

        alignItems: "flex-start",
        justifyContent: "flex-end",
        // height: 200,
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