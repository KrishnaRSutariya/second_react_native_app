import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    const data = [
        {
            "image": "https://yt3.googleusercontent.com/g_bEA4DiQjWzCdRluwELXUOZ4zWelOaz_sFb61X6S2swcVTuGevoD1v-MDFZ0WS44IZ4zjNPEg=s900-c-k-c0x00ffffff-no-rj",
            "link": "https://www.google.com"
        },
        {
            "image": "https://a.mktgcdn.com/p/k9WbkNOqTICAxppJuO06odRI04NYCoYTLhQiN3d3PUU/1024x1024.png",
            "link": "https://www.bing.com"
        },
        {
            "image": "https://yt3.googleusercontent.com/LZeUOuOM8lzINkYAKi1X3pCQz1xsSD_EndPUR1vOGesaGavUtyM_-bCUq7Gld-LPX_R7uieWsA=s900-c-k-c0x00ffffff-no-rj",
            "link": "https://www.youtube.com"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
            "link": "https://www.facebook.com"
        },
        {
            "image": "https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png",
            "link": "https://www.instagram.com"
        },
        {
            "image": "https://www.dailyroshni.in/storage/2022/07/Twitter-1-1.jpg",
            "link": "https://www.twitter.com"
        },
    ]

    function openWebsite(webLink: string) {
        Linking.openURL(webLink);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Action Card</Text>
            <ScrollView horizontal style={styles.card}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={{ margin: 5 }} key={index}>
                                <TouchableOpacity onPress={() => openWebsite(item.link)} style={styles.cardImage}>
                                    <Image source={{ uri: item.image }} width={49.3} height={49.3} style={{ borderRadius: 50 }}></Image>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 10,
        padding: 10,
        backgroundColor: 'orange',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    card: {
        margin: 5,
    },
    cardImage: { padding: 5, backgroundColor: 'red', borderRadius: 50 }
})