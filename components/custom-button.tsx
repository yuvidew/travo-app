import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { ButtonProps } from "../types/type";
import Spinner from "./Spinner";
import { Color } from '../assets/Color'

type RNButtonProps = ButtonProps & {
    style?: ViewStyle; // replaces className
    textStyle?: TextStyle; // optional extra text style override
};

const COLORS = {
    primary700: Color.primary, // Tailwind blue-700-ish
    primary200: "#BFDBFE",
    red500: "#EF4444",
    red100: "#FEE2E2",
    green500: "#22C55E",
    green100: "#d1d5db",
    green700: "#6b7280",
    gray100: "#F3F4F6",
    white: "#FFFFFF",
    border: "#e4e4e7",
};

const getBgVariantStyle = (variant: RNButtonProps["bgVariant"]): ViewStyle => {
    switch (variant) {
        case "secondary":
            return { backgroundColor: COLORS.primary200 };
        case "danger":
            return { backgroundColor: COLORS.red500 };
        case "success":
            return { backgroundColor: COLORS.green500 };
        case "outline":
            return {
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: COLORS.green100,
            };
        case "primary":
        default:
            return { backgroundColor: COLORS.primary700 };
    }
};

const getTextVariantStyle = (variant: RNButtonProps["textVariant"]): TextStyle => {
    switch (variant) {
        case "primary":
            return { color: COLORS.primary700 };
        case "outline":
            return { color: COLORS.green700  };
        case "secondary":
            return { color: COLORS.gray100 };
        case "danger":
            return { color: COLORS.red100 };
        case "success":
            return { color: COLORS.green100 };
        case "default":
        default:
            return { color: COLORS.white };
    }
};

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    loading = false,
    disabled,
    style,
    textStyle,
    ...props
}: RNButtonProps) => {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={isDisabled}
            style={[
                styles.base,
                getBgVariantStyle(bgVariant),
                isDisabled && styles.disabled,
                style,
            ]}
            {...props}
        >
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                    {IconLeft ? <>{IconLeft}</> : null}
                    <Text style={[styles.title, getTextVariantStyle(textVariant), textStyle]}>
                        {title}
                    </Text>
                    {IconRight
                        ? React.isValidElement(IconRight)
                            ? IconRight
                            : // If IconRight was passed as a component (like in your original), render it:
                            // @ts-ignore – allow either node or component type
                            React.createElement(IconRight as any)
                        : null}
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        padding: 12, // p-3
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50, // h-16
        borderRadius: 10,
        // shadow-md shadow-neutral-400/70 approximation
        ...Platform.select({
            ios: {
                shadowColor: "rgba(163, 163, 163, 0.7)",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 6,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    title: {
        fontSize: 18, // text-lg
        fontFamily: "Jakarta-Bold", // font-JakartaBold
        marginHorizontal: 8,
    },
    disabled: {
        opacity: 0.45,
    },
});

export default CustomButton;
