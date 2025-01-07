import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với trang chính!</Text>
      <Text style={styles.subtitle}>Đây là trang Homepage của bạn.</Text>
      <Button 
        title="Trở lại trang giới thiệu" 
        onPress={() => navigation.navigate('IntroScreen')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebcd',
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

export default Homepage;
