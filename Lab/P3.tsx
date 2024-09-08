import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

const OrientationScreen = () => {
  const [isPortrait, setIsPortrait] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // Function to handle orientation change
    const handleOrientationChange = () => {
      setIsPortrait(height > width);
    };

    // Add event listener for orientation change
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Initial check
    handleOrientationChange();

    // Clean up the listener on component unmount
    return () => {
      subscription?.remove();
    };
  }, [width, height]);

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, isPortrait ? styles.portrait : styles.landscape]}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Button 1</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </View>
      </View>
      <Text style={styles.orientationText}>
      {isPortrait ? 'Portrait Mode' : 'Landscape Mode'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  portrait: {
    flexDirection: 'column',
  },
  landscape: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orientationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default OrientationScreen;
