import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnycolorButton extends Component {
  alertbox() {
    alert('this is my first made alert box');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="Click Me"
        onPress={this.alertbox}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <AnycolorButton color="orange" />
        <Text>My First React Component</Text>
      </View>
    );
  }
}
