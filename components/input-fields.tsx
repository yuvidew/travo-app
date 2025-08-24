import React, { useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Platform,
    Keyboard,
    TouchableOpacity,
    StyleSheet,
    TextInputProps,
    ViewStyle,
    TextStyle,
    ImageStyle,
} from "react-native";
import { Icons } from "../constants/icons";

type InputFieldProps = {
    label: string;
    labelStyle?: TextStyle;
    placeholder?: string;
    isPassword?: boolean;
    value?: string;
    inputStyle?: TextStyle;
    containerStyle?: ViewStyle;
    iconStyle?: ImageStyle;
    secureTextEntry?: boolean;
    textContentType?: TextInputProps["textContentType"];
} & TextInputProps;

const COLORS = {
    secondary800: "#1F2937", // map your "text-secondary-800" here
    neutral400: "#9CA3AF",   // map your "placeholder:text-neutral-400" here
};

/**
 * InputField Component
 *
 * A reusable text input field with optional label, password toggle,
 * and custom styles.
 *
 * @param {string} label - Label text for the input field
 * @param {TextStyle} [labelStyle] - Optional style for the label
 * @param {string} [placeholder] - Placeholder text inside the input
 * @param {boolean} [isPassword=false] - If true, input works as password field with toggle visibility
 * @param {string} [value] - Current value of the input
 * @param {TextStyle} [inputStyle] - Optional style for the input
 * @param {ViewStyle} [containerStyle] - Optional style for the container
 * @param {ImageStyle} [iconStyle] - Optional style for the password toggle icon
 * @param {boolean} [secureTextEntry=false] - Whether to obscure the text
 * @param {TextInputProps["textContentType"]} [textContentType] - Content type for autofill
 * @param {TextInputProps} props - Additional TextInput props
 */

const InputField = ({
    label,
    labelStyle,
    placeholder,
    isPassword = false,
    value,
    inputStyle,
    containerStyle,
    iconStyle,
    secureTextEntry = false,
    textContentType,
    ...props
}: InputFieldProps) => {
    const [isShow, setIsShow] = useState(false);
    const isSecure = isPassword ? !isShow : secureTextEntry;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.wrapper}>
                    <Text style={[styles.label, labelStyle]}>{label}</Text>

                    <View style={[styles.inputRow, containerStyle]}>
                        <TextInput
                            style={[styles.input, inputStyle]}
                            placeholder={placeholder}
                            placeholderTextColor={COLORS.neutral400}
                            secureTextEntry={isSecure}
                            textContentType={isPassword ? "password" : textContentType}
                            value={value}
                            {...props}
                        />

                        {isPassword && (
                            <TouchableOpacity onPress={() => setIsShow(!isShow)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                                <Image
                                    source={!isShow ? Icons.closeEye : Icons.openEye}
                                    style={[styles.icon, iconStyle]}
                                    resizeMode="contain"
                                    tintColor={"#fb2c36"}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%", // w-full
    },
    label: {
        fontSize: 16, // text-md
        fontFamily: "Jakarta-SemiBold", // font-JakartaSemiBold
        color: COLORS.secondary800, // text-secondary-800
        marginBottom: 8,
    },
    inputRow: {
        flexDirection: "row",     // flex flex-row
        justifyContent: "flex-start", // justify-start
        alignItems: "center",     // items-center
        position: "relative",     // relative
        borderColor : "#e4e4e7",
        borderWidth : 2,
        borderRadius : 10,
        paddingHorizontal : 4
    },
    input: {
        flex: 1,                  // flex-1
        borderRadius: 8,          // rounded-md
        paddingVertical: 14,      // py-4
        fontSize: 16,             // text-xl
        textAlign: "left",        // text-left
        fontFamily: "Jakarta-SemiBold", // font-JakartaSemiBold
        
    },
    icon: {
        width: 24,  // size-6
        height: 24, // size-6
        marginLeft: 8,
        marginRight : 10
    },
});

export default InputField;
