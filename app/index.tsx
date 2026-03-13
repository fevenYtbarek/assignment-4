import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.employeeBtn}
        onPress={() => router.push("/employee-form")}
      >
        <Text style={styles.btnText}>Employee Form</Text>
      </Pressable>
      <Pressable
        style={styles.employeeBtn}
        onPress={() => router.push("/sign-up")}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={styles.employeeBtn}
        onPress={() => router.push("/log-in")}
      >
        <Text style={styles.btnText}>Log In</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    marginVertical: 400,
  },
  employeeBtn: {
    backgroundColor: "#4F46E5",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
