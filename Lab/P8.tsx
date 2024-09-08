import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';

const ResponsiveComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/troll.png')}
        style={[styles.image, { width: width * 0.8, height: height * 0.4 }]}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Trôn trôn!')}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Thay đổi màu nền của container
    padding: 20,
  },
  image: {
    borderRadius: 15, // Thêm bo góc cho hình ảnh
    borderWidth: 2,
    borderColor: '#ddd', // Thay đổi màu viền của hình ảnh
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ResponsiveComponent;
