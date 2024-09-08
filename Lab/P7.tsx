import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';

const getStatusBarStyle = (orientation: string) => {
  if (Platform.OS === 'ios') {
    return orientation === 'portrait' ? 'dark-content' : 'light-content';
  } else {
    return orientation === 'portrait' ? 'dark-content' : 'light-content';
  }
};

const getStatusBarBackgroundColor = (orientation: string) => {
  if (Platform.OS === 'ios') {
    return orientation === 'portrait' ? '#ffffff' : '#000000';
  } else {
    return orientation === 'portrait' ? '#000000' : '#ffffff';
  }
};

const App = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = ({ window }: { window: any }) => {
      setOrientation(window.height > window.width ? 'portrait' : 'landscape');
    };

    // Đăng ký sự kiện thay đổi kích thước
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Xác định hướng hiện tại
    handleOrientationChange({ window: Dimensions.get('window') });

    // Gỡ bỏ sự kiện khi component bị gỡ bỏ
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={getStatusBarStyle(orientation)}
        backgroundColor={getStatusBarBackgroundColor(orientation)}
        translucent={Platform.OS === 'android'}
        hidden={Platform.OS === 'android' ? true : Platform.OS === 'ios' ? true : false}

      />
      <Text style={styles.text}>
        {Platform.OS === 'ios' ? `iOS StatusBar (${orientation})` : `Android StatusBar (${orientation})`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
});

export default App;
