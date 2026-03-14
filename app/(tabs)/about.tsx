import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text style={styles.assign}>Hello</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    assign: {
        color: "black",
    }
})