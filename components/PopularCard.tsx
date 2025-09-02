import { Image, StyleSheet, View, Text, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Color } from '../assets/Color';

interface Props {
    image: ImageSourcePropType,
    rating: number,
    destination_name: string,
    onPress? : () => void
}

/**
 * PopularCard component
 *
 * Renders a destination card with an image background, rating badge, 
 * and destination name. Can be pressed to trigger an action.
 *
 * @param {Object} props - The component props.
 * @param {ImageSourcePropType} props.image - The image displayed in the card.
 * @param {number} props.rating - The rating value shown in the badge.
 * @param {string} props.destination_name - The name of the destination.
 * @param {Function} [props.onPress] - Optional callback when the card is pressed.
 *
 * @example
 * ```tsx
 * <PopularCard
 *   image={require("../assets/images/paris.jpg")}
 *   rating={4.8}
 *   destination_name="Paris"
 *   onPress={() => console.log("Card pressed!")}
 * />
 * ```
 */

const PopularCard = ({ image, rating, destination_name }: Props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={image}
                style={{
                    width: "100%",
                    height: "100%"
                }}
                resizeMode="stretch"
            />

            {/* start to text container */}
            <View style={styles.text_box}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "flex-end"
                }}>
                    <Text style={styles.badge}>{rating}</Text>
                </View>

                <Text
                    style={{
                        color: Color.white,
                        fontSize: 18,
                        fontWeight: 500,
                        marginBottom: 10
                    }}
                >{destination_name}</Text>
            </View>
            {/* end to text container */}
        </TouchableOpacity>
    )
}

export default PopularCard

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 170,
        borderRadius: 10,
        position: "relative",
        overflow: "hidden"
    },
    text_box: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0 ,0 , 0 , 0.3)",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        padding: 10
    },
    badge: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        color: Color.primary,
        fontSize: 12
    }
})

