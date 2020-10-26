import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text,Button,Input,Block,NavBar} from 'galio-framework'

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar back title="Lets travel boys!"></NavBar>
      <Text p muted>Open up s to start working on your app!</Text>
      <Button round> Basic Bitch Button</Button>
      <Input rounded placeholder="Type into me!"></Input>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
