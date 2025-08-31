import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import React from "react";
import Header from "../../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../constants/images";
import PopularCard from "../../../components/PopularCard";
import { Color } from "../../../assets/Color";
import { demy_tours } from "../../../constants/data";
import TripCard from "../../../components/TripCard";

export default function Index() {
  return (
    <>
      {/* start to header */}
      <Header />
      {/* end to header */}

      {/* start to trips home view  */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => (
            <TripCard
              title="Mountain Adventure"
              price="$250"
              rating={4.7}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 160,
            gap: 16,
          }}

          ListHeaderComponent={
            <View style={{ gap: 25 }}>
              {/* start to hero views */}
              <View style={styles.hero}>
                <Image
                  source={images.hero_1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="stretch"
                />

                <View style={styles.hero_view}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                    }}
                  >
                    Plan Your
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 25,
                    }}
                  >
                    Trip with{" "}
                    <Text style={{ fontSize: 30, fontWeight: 500 }}>
                      Travo
                    </Text>
                  </Text>
                </View>
              </View>
              {/* end to hero views */}

              {/* start to popular destination */}
              <View style={{ gap: 5 }}>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >

                  <Text style={{
                    color: Color.secondary,
                    fontSize: 18,
                    fontWeight: 500
                  }}>
                    Featured Travel Destinations
                  </Text>
                </View>

                <FlatList
                  data={demy_tours}
                  // keyExtractor={}
                  renderItem={({ item, index }) => (
                    <PopularCard
                      key={index}
                      image={item.image}
                      rating={item.raring}
                      destination_name={item.destination_name}
                    />
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  contentContainerStyle={{
                    display: "flex",
                    gap: 8,
                    marginTop: 8
                  }}
                />
              </View>
              {/* end to popular destination */}

              {/* start to destination */}
              <View style={{ gap: 5 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >

                  <Text style={{
                    color: Color.secondary,
                    fontSize: 18,
                    fontWeight: 500
                  }}>
                    Handpicked Trips
                  </Text>
                </View>
              </View>
              {/* end to destination */}
            </View>
          }
        />
      </SafeAreaView>
      {/* end to trips home view  */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 25
  },

  hero: {
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },

  hero_view: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    padding: 20,
  },
});
