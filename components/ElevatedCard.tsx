import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Elevated Card</Text>
            <ScrollView horizontal>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 1</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 2</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 3</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 4</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 5</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 5</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textWhite}>Box - 6</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCard

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
        backgroundColor: 'yellow'
    },
    card: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 100,
        height: 100,
        elevation: 8,
        backgroundColor: 'red'
    },
    textWhite: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})