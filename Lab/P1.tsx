import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const ButtonLayout = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Button 1 */}
      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.45 }]}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>

      {/* Button 2 */}
      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.45 }]}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default ButtonLayout;
