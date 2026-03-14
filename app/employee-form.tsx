import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const EmployeeSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  phone: Yup.string()
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone is required"),

  department: Yup.string().required("Department is required"),

  employeeId: Yup.string().required("Employee ID is required"),
});

export default function EmployeeForm() {
  const router= useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}><Pressable onPress={() => router.push("/")}>
                <Ionicons name="arrow-back" size={24} color="#F8FAFC"/>
        </Pressable>
        <Text style={styles.title}>Employee Information Form</Text>
        </View>

        <Text style={styles.subtitle}>
          Fill in the employee details below
        </Text>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            department: "",
            employeeId: "",
          }}
          validationSchema={EmployeeSchema}
          validateOnMount
          onSubmit={(values, { resetForm }) => {
            console.log(values);

            Alert.alert(
              "Success",
              "Employee form submitted successfully!",
              [{ text: "OK" }]
            );

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
          }) => (
            <View>
              {/* Full Name */}
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter full name"
                placeholderTextColor="#94a3b8"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              {touched.fullName && errors.fullName && (
                <Text style={styles.error}>{errors.fullName}</Text>
              )}

              {/* Email */}
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="#94a3b8"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              {/* Phone */}
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                placeholderTextColor="#94a3b8"
                keyboardType="phone-pad"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />

              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}

              {/* Department */}
              <Text style={styles.label}>Department</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter department"
                placeholderTextColor="#94a3b8"
                onChangeText={handleChange("department")}
                onBlur={handleBlur("department")}
                value={values.department}
              />

              {touched.department && errors.department && (
                <Text style={styles.error}>{errors.department}</Text>
              )}

              {/* Employee ID */}
              <Text style={styles.label}>Employee ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter employee ID"
                placeholderTextColor="#94a3b8"
                onChangeText={handleChange("employeeId")}
                onBlur={handleBlur("employeeId")}
                value={values.employeeId}
              />

              {touched.employeeId && errors.employeeId && (
                <Text style={styles.error}>{errors.employeeId}</Text>
              )}

              {/* Submit Button */}
              <TouchableOpacity
                style={[styles.button, !isValid && styles.disabled]}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#071633",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 4,
  },

  container: {
    padding: 20,
    paddingTop: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#ffffff",
  },

  subtitle: {
    fontSize: 15,
    color: "#94a3b8",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#ffffff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#1e2d4a",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 15,
    color: "#ffffff",
  },

  error: {
    color: "#f87171",
    marginBottom: 12,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#4f46e5",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  disabled: {
    backgroundColor: "#6b7280",
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
