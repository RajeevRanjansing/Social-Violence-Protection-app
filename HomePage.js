import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = ({ navigation }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setIsMenuVisible(true); // Show the menu
  };

  const handleCloseMenu = () => {       
    setIsMenuVisible(false); // Hide the menu
  };
  const navigateToAddContact = () => {
    setIsMenuVisible(false); // Close the menu
    navigation.navigate("AddContact"); // Navigate to AddContact screen
  };

  const navigateToEmergencyNumber = () => {
    setIsMenuVisible(false); // Close the menu
    navigation.navigate("EmergencyNumber"); // Navigate to EmergencyNumber screen
  };

  const navigateToLocationPage = () => {
    setIsMenuVisible(false); // Close the menu
    navigation.navigate("LocationPage"); // Navigate to LocationPage screen
  };

  return (
    <View style={styles.container}>
      {/* StatusBar for proper alignment with system UI */}
      <StatusBar backgroundColor="#4682b4" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuClick}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Emergency Alert App</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.infoText}>
          Press the power button three times to send an alert.
        </Text>

        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>

        <View style={styles.alerts}>
          <Text style={styles.alertsTitle}>Recent Alerts</Text>
          <Text>No recent alerts</Text>
        </View>

        <View style={styles.contacts}>
          <Text style={styles.contactsTitle}>Emergency Contacts</Text>
          <Text>Father: 123-456-7890</Text>
          <Text>Mother: 098-765-4321</Text>
          <Text>Brother: 998-765-4321</Text>
          <Text>Sister: 898-765-4321</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Menu Options */}
      <Modal visible={isMenuVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={navigateToAddContact}>
              <Text style={styles.menuOption}>Add Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToEmergencyNumber}>
              <Text style={styles.menuOption}>Emergency Number</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToLocationPage}>
              <Text style={styles.menuOption}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseMenu}>
              <Text style={[styles.menuOption, { color: 'red' }]}>Close Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f0f8ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4682b4',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  settingsButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4682b4',
    borderRadius: 5,
  },
  settingsText: {
    fontSize: 16,
    color: '#fff',
  },
  alerts: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e6f2ff',
    borderRadius: 5,
    width: '100%',
  },
  alertsTitle: {
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 5,
  },
  contacts: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e6f2ff',
    borderRadius: 5,
    width: '100%',
  },
  contactsTitle: {
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#4682b4',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  menuOption: {
    fontSize: 18,
    color: '#4682b4',
    padding: 10,
    textAlign: 'center',
  },
});

export default HomePage;
