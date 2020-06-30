import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Data = () => {
    return (
      <View style={styles.container}>
        <Text>Details of user</Text>
        
      </View>
    );
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});