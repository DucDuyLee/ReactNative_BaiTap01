import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Homepage'); // Sau 10 giây chuyển sang Homepage
    }, 10000); 

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị tháo rời
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bạn! Tôi là Duy.</Text>
      <Text style={styles.subtitle}>Trang giới thiệu bản thân</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
});

export default IntroScreen;
