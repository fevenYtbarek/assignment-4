import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Pressable
          onPress={() =>
            Linking.openURL("https://youtu.be/Aq5WXmQQooo?si=HvasjxRzaT043AdA")
          }
        >
          <Image
            source={require("../../assets/images/cutepup.jpg")}
            style={styles.rick}
          />
          <Text style={styles.cutePup}>Click for a funny video of cute dogs!</Text>
        </Pressable>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  view: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 25,
  },

  rick: {
    width: 450,
    height: 300,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: "#EA580C",
  },

  cutePup: {
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
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
