import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, useWindowDimensions } from 'react-native';

const OrientationLayout = () => {
  const { width, height } = useWindowDimensions(); // Get window dimensions

  const isPortrait = height > width; // Determine orientation

  // Adjust styles based on orientation
  const imageStyle = {
    width: width * 0.8,
    height: isPortrait ? (width * 0.8) * 0.6 : (width * 0.8) * 0.4, // Adjust height based on orientation
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/troll.png')} // Update to your image path
        style={[styles.image, imageStyle]} // Apply dynamic styles
        resizeMode="contain"
      />
      <Text style={styles.infoText}>
        {isPortrait ? 'Portrait Mode' : 'Landscape Mode'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  image: {
    borderRadius: 10,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 18,
    color: '#555',
  },
});

export default OrientationLayout;
