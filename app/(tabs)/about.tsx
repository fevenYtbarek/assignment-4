import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.text1}>Assignment 4: Advanced Form Development and Validation with Formik & Yup{"\n"}</Text>
            
                <Text style={styles.text2}>Group 14</Text>
                <Text style={styles.text3}>Feven Ytbarek</Text>
                <Text style={styles.text3}>Huddwin Almeida</Text>
                <Text style={styles.text3}>Paolo Cruz</Text>
                <Text></Text>
                <Text style={styles.text4}>Instructor: Jacob Koep</Text>
                <Text style={styles.text4}>CPRG-303: Mobile Application Development</Text>
                <Text style={styles.text4}>Southern Alberta Institute of Technology</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0F172A",
        flex: 1,
        paddingTop: 200,
        paddingHorizontal: 50,
    },
    group: {
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "black",
        padding: 10,
        backgroundColor: "white",
        paddingBottom: 30,
        paddingTop: 15,
    },

    text1: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },

    text2: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        // textDecorationLine: "underline",
        marginBottom: 7
    },

    text3: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "center",
    },

    text4: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 3,
    },
})