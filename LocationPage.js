import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Dimensions, Image } from "react-native";
import * as Location from "expo-location";

const LocationPage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied.");
        return;
      }

      try {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        setErrorMsg("Failed to fetch location. Please try again.");
      }
    };

    getLocation();
  }, []);

  const handleGetLocation = () => {
    if (location) {
      Alert.alert(
        "Current Location",
        `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`
      );
    } else {
      Alert.alert("Error", errorMsg || "Unable to fetch location.");
    }
  };

  const getMapUrl = () => {
    if (location) {
      const { latitude, longitude } = location.coords;
      const zoom = 15; // Zoom level for the map
      const size = "600x300"; // Size of the map image
      const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace this with your actual API key
      return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${size}&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location Services</Text>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <Image
          source={{ uri: getMapUrl() }}
          style={styles.mapImage}
          resizeMode="cover"
        />
      ) : (
        <Text style={styles.infoText}>Fetching location...</Text>
      )}

      <Text style={styles.button} onPress={handleGetLocation}>
        Show Current Location
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  mapImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
  },
});

export default LocationPage;
