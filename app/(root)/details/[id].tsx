import { Text, ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, {  useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetTripById } from '../../../hooks/useTrips'
import { ErrorToast, PendingTost } from '../../../components/ErrorToast';
import Swiper from "react-native-swiper";
import { Color } from '../../../assets/Color';
import { Icons } from '../../../constants/icons';
import { router } from 'expo-router';
import { InfoPills } from './_components/InfoPill';
import CustomButton from '../../../components/custom-button';

const Details = () => {
    const { data, isPending, isError } = useGetTripById();

    const swiperRef = useRef<Swiper>(null);

    const tripResult = data?.result;


    const pillsItems = useMemo(
        () =>
            tripResult
                ? [
                    {
                        text: tripResult.travelStyle ?? "",
                        bg: "#F7EDF6",
                        color: "#C11574"
                    },
                    {
                        text: tripResult.groupType ?? "",
                        bg: "#E9F3FB",
                        color: "#175CD3"
                    },
                    {
                        text: tripResult.budget ?? "",
                        bg: "#ECFDF3",
                        color: "#027A48"
                    },
                    {
                        text: tripResult.interests ?? "",
                        bg: "#F0F9FF",
                        color: "#026AA2"
                    },
                ]
                : [],
        [tripResult]
    );

    const visitTimeAndWeather = useMemo(() =>
        tripResult
            ? [
                {
                    text: "Best Time to Visit",
                    items: tripResult?.bestTimeToVisit || [],
                },
                {
                    text: "Weather",
                    items: tripResult?.weatherInfo || [],
                },
            ]
            :
            []
        , [tripResult])


    if (isError) {
        return (
            <ErrorToast />
        )
    }

    if (isPending) {
        return <PendingTost />
    }



    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {/* start to back and save button */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.back_button}
                        onPress={() => router.back()}
                    >
                        <Image
                            source={Icons.back}
                            style={{
                                width: 15,
                                height: 15
                            }}
                            resizeMode="contain"
                            tintColor={Color.primary}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.back_button}
                        onPress={() => router.back()}
                    >
                        <Image
                            source={Icons.save}
                            style={{
                                width: 15,
                                height: 15
                            }}
                            resizeMode="contain"
                            tintColor={Color.primary}
                        />
                    </TouchableOpacity>
                </View>
                {/* end to back and save button */}

                {/* start to swiper */}
                <Swiper
                    ref={swiperRef}
                    dot={
                        <View style={styles.dot} />
                    }
                    activeDot={
                        <View style={styles.activeDot} />
                    }

                    style={{
                        height: 300
                    }}
                    autoplay
                >
                    {data?.trip.images.split(",") !== undefined &&
                        data.trip.images.split(",").map((item: string, index: number) => (
                            <View
                                key={index}
                                style={styles.box_image}

                            >
                                <Image
                                    src={item}
                                    resizeMode="cover"
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />

                            </View>
                        ))}
                </Swiper>
                {/* end to swiper */}

                {/* start to place location, name and rating*/}
                <View style={styles.place}>
                    <View
                        style={{
                            gap: 15,
                            width: "80%"
                        }}
                    >
                        <Text style={styles.placeName}>{tripResult?.name}</Text>

                        <View
                            style={{
                                gap: 15,
                                flexDirection: "row"
                            }}
                        >
                            <InfoPills
                                text={`${tripResult?.duration} day plan`}
                                imageSrc={Icons.calender}
                                tintColor={Color.primary}
                            />

                            <InfoPills
                                text={
                                    tripResult?.itinerary
                                        ?.slice(0, 2)
                                        .map((day) => day.location)
                                        .join(", ") || "Unknown Location"
                                }
                                imageSrc={Icons.location}
                                tintColor={Color.primary}
                            />
                        </View>

                        {/* start to badge */}

                        <View style={styles.badge_container}>
                            {pillsItems.map(({ text, bg, color }, i) => (
                                <TouchableOpacity
                                    key={i}
                                    style={[styles.badge, { backgroundColor: bg }]}
                                >
                                    <Text style={{
                                        color: color
                                    }}>
                                        {text}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* end to badge */}
                    </View>
                    {/* start to trips details */}
                    <View
                        style={{
                            gap: 10
                        }}
                    >
                        <Text style={{
                            fontSize: 25,
                            color: Color.foreground
                        }}>
                            {tripResult?.duration}-Day {tripResult?.country}{" "}
                            {tripResult?.travelStyle} Trip
                        </Text>

                        <Text style={{
                            fontSize: 17,
                            color: Color.secondary
                        }}>
                            {tripResult?.budget}, {tripResult?.groupType}, and{" "}
                            {tripResult?.interests}
                        </Text>
                    </View>

                    <Text style={{
                        fontSize: 20,
                        color: Color.primary
                    }}>
                        {tripResult?.estimatedPrice}
                    </Text>
                    {/* end to trips details */}

                    {/* start to description  */}
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "400",
                        color: "#666",
                    }}>
                        {tripResult?.description}
                    </Text>
                    {/* end to description  */}

                    {/* start itinerary */}
                    <View style={styles.itinerary_container}>
                        {tripResult?.itinerary?.map((day, index) => (
                            <View key={index} style={styles.dayContainer}>
                                <Text style={styles.dayHeading}>
                                    Day {day.day}: {day.location}
                                </Text>

                                <View style={styles.activitiesList}>
                                    {day?.activities?.map(({ time, description }: { time: string, description: string }, activityIndex: number) => (
                                        <View key={activityIndex} style={styles.activityItem}>
                                            <Text style={styles.activityTime}>{time} </Text>
                                            <Text style={styles.activityDescription}>{description}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                    {/* end itinerary */}

                    {/* start to visit time and weather */}
                    <View style={styles.visitContainer}>
                        {visitTimeAndWeather?.map((item, index) => (
                            <View key={index} style={styles.visitSection}>
                                <Text style={styles.visitTitle}>{item.text}</Text>

                                <View style={styles.visitList}>
                                    {item.items?.map((subItem, subIndex) => (
                                        <Text key={subIndex} style={styles.visitListItem}>
                                            {subItem}
                                        </Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                    {/* end to visit time and weather */}

                    {/* start to booking button */}
                    <View style = {{
                        flexDirection : "row",
                        justifyContent : "space-between",
                        alignItems : "center"
                    }}>

                        {/* start to price */}
                        <View style = {{
                            flexDirection : "column",
                            gap : 6
                        }}>
                            <Text style = {{ color : Color.secondary}}>Total price</Text>
                            <Text style = {{ color : Color.primary , fontSize : 24}}>{tripResult?.estimatedPrice}</Text>
                        </View>
                        {/* end to price */}

                        <CustomButton
                            title="Book now"
                        />
                    </View>
                    {/* end to booking button */}
                </View>
                {/* end to place location, name and rating*/}

            </SafeAreaView>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        gap: 32,
        position: "relative",
        paddingBottom : 10
    },
    header: {
        position: "absolute",
        top: 40,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
        paddingHorizontal: 10,
        width: "100%"
    },
    back_button: {
        backgroundColor: Color.white,
        width: 30,
        height: 30,
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center"
    },

    dot: {
        width: 7,
        height: 7,
        marginHorizontal: 2,
        backgroundColor: "#ede0d4",
        borderRadius: "100%"
    },
    activeDot: {
        width: 32,
        height: 7,
        marginHorizontal: 2,
        backgroundColor: Color.primary,
        borderRadius: 30
    },

    box_image: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 56,
        height: "100%"
    },
    place: {
        justifyContent: "space-between",
        gap: 30,
        paddingHorizontal: 15
    },

    placeName: {
        fontFamily: "Jakarta-Bold",
        fontSize: 23,
        color: "#000",
    },

    placeLocation: {
        fontFamily: "Jakarta-Medium",
        fontSize: 16,
        color: Color.secondary,
    },

    badge_container: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start"
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20
    },

    itinerary_container: {
        flexDirection: "column",
        gap: 20, // works in RN 0.71+, else use marginBottom
    },
    dayContainer: {
        flexDirection: "column",
        marginBottom: 30,
    },
    dayHeading: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
    },
    activitiesList: {
        paddingLeft: 15,
        flexDirection: "column",
        gap: 10,
    },
    activityItem: {
        marginBottom: 10,
    },
    activityTime: {
        fontSize: 15,
        fontWeight: "600",
        color: Color.foreground
    },
    activityDescription: {
        fontSize: 18,
        fontWeight: "400",
        color: "#666",
    },

    visitContainer: { 
        // parent container if you need extra spacing/padding
    },
    visitSection: {
        marginBottom: 20, // gap-[20px]
    },
    visitTitle: {
        fontSize: 20,
        fontWeight: '600', // font-semibold
        color: '#000',
        // fontFamily: 'Jakarta-SemiBold',
    },
    visitList: {
        // vertical stack of items
    },
    visitListItem: {
        fontSize: 18,
        fontWeight: '400', // font-normal
        color: '#7F7E83',  // replace with your Color token if desired
        marginBottom: 18,  // gap-[18px]
        // fontFamily: 'Jakarta-Regular',
    },

})