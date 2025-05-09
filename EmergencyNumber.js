import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const EmergencyNumber = () => {
  const handleCall = (service) => {
    Alert.alert("Calling...", `${service} service`, [{ text: "OK" }]);
    // In a real app, you would integrate a call feature with react-native-phone-call or Linking API.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Emergency Numbers</Text>

      {/* Police */}
      <View style={styles.card}>
        <Text style={styles.service}>Police</Text>
        <Text style={styles.number}>100</Text>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => handleCall("Police")}
        >
          <Text style={styles.buttonText}>Call Police</Text>
        </TouchableOpacity>
      </View>

      {/* Ambulance */}
      <View style={styles.card}>
        <Text style={styles.service}>Ambulance</Text>
        <Text style={styles.number}>102</Text>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => handleCall("Ambulance")}
        >
          <Text style={styles.buttonText}>Call Ambulance</Text>
        </TouchableOpacity>
      </View>

      {/* Fire */}
      <View style={styles.card}>
        <Text style={styles.service}>Fire</Text>
        <Text style={styles.number}>101</Text>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => handleCall("Fire")}
        >
          <Text style={styles.buttonText}>Call Fire Brigade</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3, // For shadow effect on Android
    shadowColor: "#000", // For shadow effect on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: "center",
  },
  service: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#007bff",
  },
  number: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  callButton: {
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

export default EmergencyNumber;
