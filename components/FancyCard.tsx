import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {

    const data = [
        {
            "image": "https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Taj Mahal",
            "location": "Agra"
        },
        {
            "image": "https://img.freepik.com/free-photo/mount-fuji-japan-peak-snow-sky-background_1150-4004.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Mount Fuji",
            "location": "Japan"
        },
        {
            "image": "https://img.freepik.com/free-photo/eiffel-tower-paris-france-famous-landmark_1150-3048.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Eiffel Tower",
            "location": "Paris"
        },
        {
            "image": "https://img.freepik.com/free-photo/statue-liberty-new-york-city_1150-2254.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Statue of Liberty",
            "location": "New York"
        },
        {
            "image": "https://img.freepik.com/free-photo/sydney-opera-house-australia-architectural-wonder_1150-3510.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Sydney Opera House",
            "location": "Sydney"
        },
        {
            "image": "https://img.freepik.com/free-photo/colosseum-rome-italy-ancient-amphitheater-italian-tourism_1150-3179.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Colosseum",
            "location": "Rome"
        },
        {
            "image": "https://img.freepik.com/free-photo/leaning-tower-pisa-italy-famous-landmark_1150-2466.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Leaning Tower of Pisa",
            "location": "Pisa"
        },
        {
            "image": "https://img.freepik.com/free-photo/great-wall-china-ancient-walls-architecture_1150-3496.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Great Wall of China",
            "location": "China"
        },
        {
            "image": "https://img.freepik.com/free-photo/krakow-poland-market-square-famous-tourist-location_1150-3587.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Krakow Market Square",
            "location": "Poland"
        },
        {
            "image": "https://img.freepik.com/free-photo/stonehenge-england-mystery-monument-landscape_1150-3019.jpg?t=st=1736492413~exp=1736496013~hmac=d3c62cc4661c9d87b686bba72fbd6762f200303e74b0378e22a2ca72b2f1eca3&w=1380",
            "title": "Stonehenge",
            "location": "England"
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Treading Places</Text>
            <ScrollView horizontal>
                {
                    data.map((item) => (
                        <View style={styles.card} key={item?.title}>
                            <Image source={{ uri: item?.image }} style={{ width: "100%", height: "80%", borderRadius: 5 }}></Image>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ paddingLeft: 10, paddingTop: 5, textAlign: 'left', fontWeight: 'bold', fontSize: 16 }}>{item?.title}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ paddingLeft: 10, textAlign: 'left', fontWeight: 'bold', fontSize: 14 }}>{item?.location}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'yellow',
    },
    card: {
        margin: 10,
        borderRadius: 5,
        width: 157,
        height: 250,
        backgroundColor: 'orange',
        boxShadow: "1px 1px 10"
    },
})