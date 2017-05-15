import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { Sae } from "react-native-textinput-effects"
import { CreditCard } from "react-native-bankcard"
import React, { Component } from "react"

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

export default class bankcard extends Component {
  constructor() {
    super()
    this.state = {
      number: ''
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <CreditCard ref={(node) => this.card = node} card={{
            name: 'Fisrtname Lastname',
            number: this.state.number,
            expiry: '11/22',
            cvc: '987',
          }} />
        </View>

        <View style={styles.box}>
          <Sae
            onChangeText={(number) => this.setState({ number })}
            inputStyle={{ color: 'rgba(0,0,0, 0.85)' }}
            labelStyle={{ color: 'rgba(0,0,0, 0.7)' }}
            iconClass={FontAwesomeIcon}
            iconName="credit-card"
            label="Card number"
            iconColor="#2196F3"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    padding: 15,
    width: 300
  },

  container: {
    justifyContent: 'center',
    backgroundColor: '#EEE',
    alignItems: 'center',
    flex: 1,
  },

  input: {
    borderWidth:1, borderColor: '#000',
    marginTop: 4,
    height: 48,
  },

  content: {
    borderColor: 'rgba(0,0,0, 0.2)',
    justifyContent: 'center',
    borderStyle: 'dashed',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
  }
});
