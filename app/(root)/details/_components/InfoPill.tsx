import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type InfoPillsProps = {
    text: string;
    imageSrc: string;
    tintColor? : string
};

/**
 * InfoPills component displays a small pill with an icon and text.
 *
 * @param {string} text - The text to display next to the icon.
 * @param {string} imageSrc - The URI of the image icon to display.
 */

export const InfoPills: React.FC<InfoPillsProps> = ({ text, imageSrc , tintColor}) => {
    return (
        <View style={styles.container}>
            <Image
                source={imageSrc as ImageSourcePropType}
                style={styles.icon}
                resizeMode="contain"
                tintColor={tintColor}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6, 
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        color: '#7F7E83',
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 6, 
        fontFamily : "Jakarta-Medium"
    },
});
