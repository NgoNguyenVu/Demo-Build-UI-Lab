import React from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Alert } from 'react-native';

const PlatformLayout = () => {
  const handlePress = () => {
    Alert.alert('Alert!', 'Khum có gì.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trôn trôn vi en</Text>
      <Text style={styles.infoText}>
        Ai sợ thì đi về
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Bấm zô!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 24,
  },
  button: {
    backgroundColor: Platform.OS === 'ios' ? '#007AFF' : '#FF5722', // Different colors for iOS and Android
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Larger radius for a more noticeable difference
    alignItems: 'center',
    borderWidth: Platform.OS === 'ios' ? 2 : 0, // Add border for iOS
    borderColor: Platform.OS === 'ios' ? '#0051A8' : 'transparent', // Border color for iOS
    elevation: Platform.OS === 'android' ? 10 : 0, // Higher elevation for Android
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent', // Shadow color for iOS
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 4 } : undefined, // Shadow offset for iOS
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : undefined, // Shadow opacity for iOS
    shadowRadius: Platform.OS === 'ios' ? 5 : undefined, // Shadow radius for iOS
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default PlatformLayout;
