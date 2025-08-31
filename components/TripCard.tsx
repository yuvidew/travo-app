import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { images } from '../constants/images'

interface Props {
    /** Trip image */
    image?: any;
    /** Title of the trip */
    title: string;
    /** Price of the trip */
    price: string;
    /** Rating value */
    rating: number;
    /** Optional click handler */
    onPress?: () => void;
}

/**
 * TripCard component
 *
 * Displays a trip card with an image, title, price, and rating.
 *
 * @example
 * ```tsx
 * <TripCard
 *   image={images.adventure}
 *   title="Mountain Adventure"
 *   price="$250"
 *   rating={4.7}
 *   onPress={() => console.log("Trip pressed")}
 * />
 * ```
 */
const TripCard = ({ image = images.adventure, title, price, rating, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* Trip Image */}
            <View style={styles.image_box}>
                <Image
                    source={image}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    resizeMode="cover"
                />
            </View>

            {/* Trip Details */}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.rating}>⭐ {rating}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TripCard

const styles = StyleSheet.create({
    container: {
        height: 160,
        width: "100%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        flexDirection: "row",
        gap: 10
    },
    image_box: {
        width: "45%",
        borderRadius: 8,
        overflow: "hidden"
    },
    details: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000"
    },
    price: {
        fontSize: 16,
        fontWeight: "500",
        color: "#2C969B"
    },
    rating: {
        fontSize: 14,
        color: "#666"
    }
})
