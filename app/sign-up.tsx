import React from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function Signup() {
    const router = useRouter();

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
            <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
            </Pressable>
            <Text style={styles.title}>Create Account</Text>
        </View>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        <Formik
            initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values, { resetForm }) => {
            const fullName = `${values.firstName} ${values.lastName}`;
            Alert.alert("Success", `Welcome, ${fullName}!`);
            console.log({ ...values, fullName });
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
                <View style={styles.row}>
                <View style={[styles.field, { flex: 1 }]}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                    style={[
                        styles.input,
                        touched.firstName && errors.firstName && styles.inputError,
                    ]}
                    placeholder="John"
                    placeholderTextColor="#64748B"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                    />
                    {touched.firstName && errors.firstName && (
                    <Text style={styles.error}>{errors.firstName}</Text>
                    )}
                </View>

                <View style={[styles.field, { flex: 1 }]}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                    style={[
                        styles.input,
                        touched.lastName && errors.lastName && styles.inputError,
                    ]}
                    placeholder="Doe"
                    placeholderTextColor="#64748B"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                    />
                    {touched.lastName && errors.lastName && (
                    <Text style={styles.error}>{errors.lastName}</Text>
                    )}
                </View>
                </View>

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

                <View style={styles.field}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={[
                    styles.input,
                    touched.confirmPassword &&
                        errors.confirmPassword &&
                        styles.inputError,
                    ]}
                    placeholder="Re-enter your password"
                    placeholderTextColor="#64748B"
                    secureTextEntry
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
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
                <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
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
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginBottom: 32,
  },

  form: {
    gap: 20,
  },

  row: {
    flexDirection: "row",
    gap: 12,
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
});