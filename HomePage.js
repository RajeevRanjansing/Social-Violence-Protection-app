import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Emergency Alert App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>
          Press the power button three times to send an alert.
        </Text>

        <Button title="Emergency Alert" onPress={() => alert('Emergency Alert Sent!')} color="#ff6347" />
        
        <TouchableOpacity style={styles.settingsButton} >
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
        </View>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity >
          <Text style={styles.footerText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.footerText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f0f8ff',
    marginTop: 40,
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
    justifyContent: 'center',
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
    marginTop: 20,
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
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 5,
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 5,
  },
  contacts: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 5,
  },
  contactsTitle: {
    fontSize: 18,
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
});

export default HomePage;
