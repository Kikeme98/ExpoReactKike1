import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hola from './Hola';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Hola></Hola>
      </View>
      <View style={styles.body}>

      </View>
      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
  },
  header: {
    height: "10%",
    backgroundColor: 'purple'
  },
  body: {
    height: "80%",
    backgroundColor: 'cornflowerblue',
    borderRadius: '20px',
    margin: '10px',
    shadowRadius: '10px'
  },
  footer:{
    height: "10%",
    backgroundColor: 'darkgray' 
  }
});
