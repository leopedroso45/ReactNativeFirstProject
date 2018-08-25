import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Image, ScrollView } from 'react-native';

export default class Something extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, backgroundColor: '#262626' }}>
            <Text style={{ textAlign: 'center', color: '#b3b3b3', fontSize: 30, paddingTop: 30 }}>Tio Hugo</Text>
          </View>
          <View style={{ flex: 4, backgroundColor: '#595959' }}>
            <Image source={require('./seila.jpg')} style={{ width: 'auto', height: 400, alignContent: 'center' }} />
          </View>
          <View style={{ flex: 1, backgroundColor: '#262626' }}>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPressButton} title="Log in" color="#b3b3b3" />
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPressButton} title="Sign Up" color="green" />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  buttonContainer: {
    margin: 2,
    padding: 1
  },
});
