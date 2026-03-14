import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export default function Login() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                <   Ionicons name="arrow-back" size={24} color="#F8FAFC" />
                    </Pressable>
                    <Text style={styles.title}>Welcome Back</Text>
                </View>
                <Text style={styles.subtitle}>Log in to your account</Text>

                <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                    Alert.alert("Success", "Logged in successfully!");
                    console.log(values);
                    resetForm();
                }}
                >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                dirty,
            }) => (
                <View style={styles.form}>
                <View style={styles.field}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                    style={[
                        styles.input,
                        touched.email && errors.email && styles.inputError,
                    ]}
                    placeholder="you@example.com"
                    placeholderTextColor="#64748B"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    />
                    {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                    )}
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                    style={[
                        styles.input,
                        touched.password && errors.password && styles.inputError,
                    ]}
                    placeholder="At least 6 characters"
                    placeholderTextColor="#64748B"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    />
                    {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                    )}
                </View>

                <Pressable
                    style={[
                    styles.button,
                    !(isValid && dirty) && styles.buttonDisabled,
                    ]}
                    onPress={() => handleSubmit()}
                    disabled={!(isValid && dirty)}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                    
                </Pressable>
                <Text style={styles.signUp}>Not yet a member?{" "}
                    <Text style={styles.link} onPress={() => router.push("/sign-up")}>Sign Up!</Text>
                </Text>

                </View>
            )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  scroll: {
    padding: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#F8FAFC",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginBottom: 32,
    marginLeft: 35
  },

  form: {
    gap: 20,
  },

  field: {
    gap: 6,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#CBD5E1",
  },

  input: {
    backgroundColor: "#1E293B",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#334155",
  },

  inputError: {
    borderColor: "#EF4444",
  },

  error: {
    color: "#EF4444",
    fontSize: 12,
  },

  button: {
    backgroundColor: "#6366F1",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

signUp: {
  textAlign: "center",
  color: "#64748B",
  fontSize: 16,
  marginTop: 16,
},

link: {
  color: "#6366F1",
  fontWeight: "600",
},

});
