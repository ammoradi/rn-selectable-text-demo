/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { SelectableText } from '@astrocoders/react-native-selectable-text';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SelectableText
          menuItems={["Foo", "Bar"]}
          /* 
            Called when the user taps in a item of the selection menu:
            - eventType: (string) is the label
            - content: (string) the selected text portion
            - selectionStart: (int) is the start position of the selected text
            - selectionEnd: (int) is the end position of the selected text
          */
          onSelection={({ eventType, content, selectionStart, selectionEnd }) => {}}
          value="I crave star damage hbgrlbglergbrlgberlgbergberlgkqogiqg'iorjg'qoierghioqerngoireqgorigjoqrhng"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
