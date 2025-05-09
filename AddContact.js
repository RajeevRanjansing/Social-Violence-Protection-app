import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView } from "react-native";

const AddContact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* User Sections */}
          {Array.from({ length: 5 }, (_, index) => (
            <View style={styles.user} key={index}>
              <Text style={styles.userHeading}>User{index + 1}</Text>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="Number" keyboardType="numeric" />
            </View>
          ))}

          {/* Submit Button */}
          <View style={styles.AddContactButton}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    padding: 10,
  },
  user: {
    marginBottom: 20,
  },
  userHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  AddContactButton: {
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddContact;
