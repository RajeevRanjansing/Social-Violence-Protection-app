import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Emergency Alert App</Text>
      </View>

    {/* <View style={styles.icoons}>
    <Icon name="home" size={30} color="#000" />
      <Icon name="my-location" size={30} color="#000" />
      <Icon name="phone" size={30} color="#d32f2f" />
      <TouchableOpacity>
        <Icon name="menu" size={30} />
      </TouchableOpacity >
    </View> */}


      <View style={styles.content}>
        <Text style={styles.infoText}>
          Press the power button three times to send an alert.
        </Text>

        <Button title="Emergency Alert" onPress={() => alert('Emergency Alert Sent!')} color="#ff6347" />
        
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
        
        <View style={styles.alerts}>
          <Text style={styles.alertsTitle}>Recent Alerts</Text>
          <Text>No recent alerts</Text>
        </View>
        
        <View style={styles.contacts}>
          <Text style={styles.contactsTitle}>Emergency Contacts</Text>
          <Text>John Doe: 123-456-7890</Text>
          <Text>Jane Smith: 098-765-4321</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Text style={styles.footerText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
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
    marginTop:40,
  },
  icoons: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor:"coral",
    // marginTop:50,
    height:10,
    flexDirection:"row",
    padding: 20,
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
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4682b4',
  },
  contacts: {
    marginTop: 20,
    alignItems: 'center',
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4682b4',
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

