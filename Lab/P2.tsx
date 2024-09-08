import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const ImageLayout = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image
       source={require('../assets/troll.png')}
       // Use your local image path here
        style={[styles.image, { width: screenWidth * 0.8, height: (screenWidth * 0.8) * 0.6 }]} // Adjust height based on aspect ratio
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default ImageLayout;
