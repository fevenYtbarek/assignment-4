import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

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
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Employee Information Form</Text>
        <Text style={styles.subtitle}>
          Please fill in the employee details below.
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
          onSubmit={(values, { resetForm }) => {
            console.log("SUBMITTED");
            console.log(values);
            window.alert("Employee submitted successfully!");
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
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter full name"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              {touched.fullName && errors.fullName ? (
                <Text style={styles.error}>{errors.fullName}</Text>
              ) : null}

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email ? (
                <Text style={styles.error}>{errors.email}</Text>
              ) : null}

              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="phone-pad"
              />
              {touched.phone && errors.phone ? (
                <Text style={styles.error}>{errors.phone}</Text>
              ) : null}

              <Text style={styles.label}>Department</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter department"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("department")}
                onBlur={handleBlur("department")}
                value={values.department}
              />
              {touched.department && errors.department ? (
                <Text style={styles.error}>{errors.department}</Text>
              ) : null}

              <Text style={styles.label}>Employee ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter employee ID"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("employeeId")}
                onBlur={handleBlur("employeeId")}
                value={values.employeeId}
              />
              {touched.employeeId && errors.employeeId ? (
                <Text style={styles.error}>{errors.employeeId}</Text>
              ) : null}

              <TouchableOpacity
                style={[styles.button, !isValid && styles.disabled]}
                onPress={() => {
                  handleSubmit();
                }}
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
    backgroundColor: "#f8fafc",
  },

  container: {
    padding: 20,
    paddingTop: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#1f2937",
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 15,
    color: "#111827",
  },

  error: {
    color: "#ef4444",
    marginBottom: 10,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#4f46e5",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },

  disabled: {
    backgroundColor: "#9ca3af",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});