import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color } from '../../../assets/Color'
import ImageBox from './_components/ImageBox'
import { images } from '../../../constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from '../../../components/custom-button'
import { router } from 'expo-router'

const Travel_Style = [
    {
        image: images.adventure,
        text: "Adventure",
    },
    {
        image: images.relaxed,
        text: "Relaxed",
    },
    {
        image: images.luxury,
        text: "Luxury",
    },
    {
        image: images.cultural,
        text: "Cultural",
    },
    {
        image: images.nature_outdoor,
        text: "Nature & Outdoors",
    },
    {
        image: images.city_explore,
        text: "City Exploration",
    },
]

const SelectTravelStyle = () => {
    const [travel_style, setTravelStyle] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const selected_style = await AsyncStorage.getItem("travel_styles");

            if (selected_style) {
                setTravelStyle(JSON.parse(selected_style))
            }
        }

        fetchData();
    }, [])

    const onSelectStyle = (style: string) => {
        // if (!travel_style.includes(style)) {
        //     setTravelStyle((prev) => {
        //         const update = [...prev , style];
        //         return update;
        //     })
        // }else {
        //     setTravelStyle((prev) => {
        //         const update = prev.filter((ts) => style === ts);
        //         return update;
        //     })
        // }

        setTravelStyle(prev =>
            prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
        );

    }

    const onSubmit = async () => {
        await AsyncStorage.setItem("travel_styles", JSON.stringify(travel_style));
        router.replace("/(root)/(tabs)")
    }


    return (
        <SafeAreaView style={styles.container}>
            {/* start to heading */}
            <View style={styles.heading}>
                <Text style={styles.heading_h2}>
                    Hii {" "}
                    {/* TODO: add user name */}
                    <Text
                        style={{
                            color: Color.primary,
                            fontSize: 22,
                            fontWeight: 700
                        }}
                    >
                        {/* TODO : add user name */}
                        User_name
                    </Text>
                    ,
                </Text>
                <Text style={styles.heading_text}>
                    What do
                    you love most about travling?
                </Text>
            </View>
            {/* end to heading */}

            {/* start to select trips */}
            <View style={styles.trip_style_container}>
                {Travel_Style.map(({ image, text }, i) => (
                    <ImageBox
                        key={i}
                        text={text}
                        image={image}
                        onSelect={() => onSelectStyle(text)}
                        isChecked={travel_style.includes(text)}
                    />
                ))}
            </View>
            {/* end to select trips */}

            {/* start to select button */}
            <CustomButton
                title='Next'
                disabled={travel_style.length === 0}
                onPress={onSubmit}
            />
            {/* end to select button */}
        </SafeAreaView>
    )
}

export default SelectTravelStyle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 35
    },
    heading: {
        paddingVertical: 10,
        gap: 10
    },
    heading_h2: {
        fontSize: 20
    },
    heading_text: {
        fontSize: 16,
        width: 250
    },
    trip_style_container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "space-between",
    },

})