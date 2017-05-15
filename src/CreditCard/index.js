import LinearGradient from "react-native-linear-gradient"
import FlipCard from "react-native-flip-card"
import autobind from "autobind-decorator"
import React, { Component } from "react"
import CardInfo from "../CardInfo"
import styles from "./styles"
import logos from "./logos"

import {
  Text,
  View,
  Image
} from "react-native"

@autobind
export default class CreditCard extends Component {
  constructor() {
    super()
    this.state = {
      width: null,
      height: null
    }
  }

  onLayout(event) {
    var { width, height } = event.nativeEvent.layout
    this.setState({ height, width })
  }

  colorText(lightness, opacity) {
    var color = (lightness == "dark") ? '255,255,255' : '0,0,0'
    var shadow = (lightness == "dark") ? '#000' : '#FFF'

    return {
      color: `rgba(${color}, ${opacity})`,
      textShadowColor: shadow,
    }
  }

  render() {
    // number, expiry, name, type, cvc
    var { card } = this.props
    
    var info = new CardInfo(card.number)
    this.info = info

    var flipcardProps = {
      style: { borderWidth: 0, borderColor: 'transparent' },
      flipHorizontal: true,
      flipVertical: false,
      clickable: true,
      perspective: 0,
      friction: 6,
      flip: false
    }

    var containerProps = {
      style: [ styles.card
        // , this.calculateViewSize()
      ],
      onLayout: this.onLayout
    }

    var gradient = {
      front: {
        colors: info.bank.style.gradients,
        start: { x: 0.0, y: 1.0 },
        end: { x: 0.76, y: 0.47 },
        style: styles.front
      },

      back: {
        colors: info.bank.style.gradients,
        start: { x: 0.76, y: 0.47 },
        end: { x: 0.0, y: 1.0 },
        style: styles.back
      }
    }

    var employerStyle = [
      styles.employerText,
      this.colorText(info.bank.style.lightness, 0.8)
    ]

    var numberCardStyle = [
      styles.cardNumber,
      this.colorText(info.bank.style.lightness, 0.85)
    ]

    var bankLogoBox = !logos.banks[info.bank.logo.png] ? (
      <View style={[
        styles.frontLogoImage,
        styles.dashed
      ]} />
    ) : (
      <Image
        source={{ uri: logos.banks[info.bank.logo.png] }}
        style={styles.frontLogoImage}
        resizeMode="contain"
      />
    )

    var { numberNice: numbers, numberMask: mask } = info
    var numberCard = !card.number ? (
      <View style={[styles.dashed, styles.emptyNumber]} />
    ) : (
      <Text style={numberCardStyle}>
        {numbers + mask.substr(numbers.length, 18)}
      </Text>
    )

    var brandLogo = !logos.brands[info.brand.logo.png] ? (
      <View style={[
        styles.frontBrandImage,
        styles.dashed
      ]} />
    ) : (
      <Image
        source={{ uri: logos.brands[info.brand.logo.png] }}
        style={styles.frontBrandImage}
        resizeMode="contain"
      />
    )

    return (
      <View {...containerProps}>
        <FlipCard {...flipcardProps}>
          <LinearGradient {...gradient.front}>
            <View style={styles.bankLogoContainer}>{bankLogoBox}</View>
            {numberCard}
            
            <View style={styles.info}>
              <View style={styles.employer}>
                <Text style={employerStyle}>{card.name}</Text>
                <Text style={employerStyle}>{card.expiry}</Text>
              </View>
              
              {brandLogo}
            </View>
          </LinearGradient>

          <LinearGradient {...gradient.back}>
            <View style={styles.cvcContainer}>
              <Text style={styles.cvcText}>{card.cvc}</Text>
            </View>
          </LinearGradient>
        </FlipCard>        
      </View>
    )
  }
}