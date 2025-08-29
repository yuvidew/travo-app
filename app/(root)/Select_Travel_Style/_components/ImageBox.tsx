import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../../../assets/Color'
import { Icons } from '../../../../constants/icons'

interface Props {
    image : ImageSourcePropType,
    text : string,
    isChecked : boolean,
    onSelect : () => void
}

/**
 * ImageBox Component
 *
 * Renders an image with a badge text and an optional
 * overlay check icon when selected.
 *
 * @param {ImageSourcePropType} image - The source of the image (local require or remote URL).
 * @param {string} text - The label text displayed inside the badge.
 * @param {boolean} isChecked - Whether the box is currently selected.
 * @param {() => void} onSelect - Callback function triggered when the box is pressed.
 *
 * @returns {JSX.Element} Touchable box containing an image, badge, and optional selected state.
 *
 * @example
 * // Example usage inside a parent component
 * <ImageBox
 *   image={require("../../assets/images/adventure.jpg")}
 *   text="Adventure"
 *   isChecked={true}
 *   onSelect={() => console.log("Adventure selected")}
 * />
 */


const ImageBox = ({
    image,
    text,
    isChecked,
    onSelect
} : Props) => {
    return (
        <TouchableOpacity 
            style={styles.box}
            onPress={onSelect}
        >
            {/* start to badge */}
            <View style={styles.box_badge}>
                <Text style={styles.box_badge_text}>
                    {text}
                </Text>
            </View>
            {/* end to badge */}

            {/* start to selected icon */}
            { isChecked && <View style={styles.box_selected_icon}>
                <Image
                    source={Icons.checked}
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />
            </View>}
            {/* end to selected icon */}
            <Image
                source={image}
                style={{
                    width: "100%",
                    height: "100%"
                }}
                resizeMode="stretch"
            />
        </TouchableOpacity>
    )
}

export default ImageBox

const styles = StyleSheet.create({
    box: {
        height: 150,
        width: "47.9%",
        marginBottom: 12,
        borderRadius: 10,
        overflow: "hidden",
        position: "relative"
    },

    box_badge: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "transparent",
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 4,
        padding: 10
    },
    box_badge_text: {
        backgroundColor: Color.primary,
        color: "#fff",
        fontSize: 14,
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    box_selected_icon: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.7)",
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 8,
        padding: 10,
    }

})