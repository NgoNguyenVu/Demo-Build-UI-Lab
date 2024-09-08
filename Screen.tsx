import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native';

// Import your screens
import ButtonLayout from './Lab/P1';
import ImageLayout from './Lab/P2';
import OrientationLayout from './Lab/P3';
import KeyboardLayout from './Lab/P4';
import PlatformLayout from './Lab/P5';
import StatusBarLayout from './Lab/P6';
import StatusBarCustom from './Lab/P7';
import UIcustom from './Lab/P8';

const TabScreen = () => {
  const [activeScreen, setActiveScreen] = useState('home'); 
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const renderScreen = () => {
    switch (activeScreen) {
      case 'buttons':
        return <ButtonLayout />;
      case 'images':
        return <ImageLayout />;
      case 'orientation':
        return <OrientationLayout />;
      case 'keyboard':
        return <KeyboardLayout />;
      case 'platform':
        return <PlatformLayout />;
      case 'statusbar':
        return <StatusBarLayout />;
      case 'statusbarcustom':
        return <StatusBarCustom />;
      case 'custom':
        return <UIcustom />;
      default:
        return null; // Render nothing when on the main screen (only buttons)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {activeScreen === 'home' ? (
        // If on the main screen, show only the buttons
        <View style={[styles.buttonContainer, isLandscape && styles.landscapeButtonContainer]}>
          <Text style={styles.title}>Choose a Section</Text>
          
          {/* Buttons for navigating to different sections */}
          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('buttons')}>
            <Text style={styles.buttonText}>Buttons Section</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('images')}>
            <Text style={styles.buttonText}>Images Section</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('orientation')}>
            <Text style={styles.buttonText}>Orientation Section</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('keyboard')}>
            <Text style={styles.buttonText}>Keyboard Section</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('platform')}>
            <Text style={styles.buttonText}>Platform Section</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('statusbar')}>
            <Text style={styles.buttonText}>StatusBar Section</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('statusbarcustom')}>
            <Text style={styles.buttonText}>StatusBar Custom</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('custom')}>
            <Text style={styles.buttonText}>Change Custom</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // If in one of the sections, show the corresponding screen and a "Back" button
        <View style={[styles.screenContainer, isLandscape && styles.landscapeScreenContainer]}>
          <TouchableOpacity style={styles.backButton} onPress={() => setActiveScreen('home')}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          {renderScreen()}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  landscapeButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20, // Adjust as needed to ensure Back button is visible
  },
  landscapeScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  backButton: {
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20, // Space between Back button and screen content
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default TabScreen;
