# react-native-creditcard
Creditcard react-native component with autodetect banks by number, with relative design card styles.

_Inspired by [card-info](https://github.com/iserdmi/card-info)_

![GIF](https://image.ibb.co/bxL8RQ/2017_05_16_01_21_09.gif)

_Tested on React Native 0.44._

# Notes
For normal using you need have installed [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient).
Also - this modules used builded logos in base64 map - all images are stored in RAM.

# Install
```
npm install git+https://github.com/friktor/react-native-creditcard --save
```

# Usage Component

``` js
import { CreditCard } from "react-native-bankcard"

// How usage component
<CreditCard ref={(node) => this.card = node} card={{
  name: 'Fisrtname Lastname',
  number: this.state.number,
  expiry: '11/22',
  cvc: '987',
}} />

// Access to card information by node ref
console.log(this.card.info)
```

# Usage API

``` js
import { CardInfo } from "react-native-bankcard"

var info = new CardInfo('43777237', { /* options */})
console.log(info.bank) // About card bank
console.log(info.brand) // Card brand properties
```

## Options
See in readme for [card-info](https://github.com/iserdmi/card-info)

## Properties
_For convenience, I changed the standard properties scheme from card-info._

```
{
  bank: {
    logo: { png, svg },
    name: { en, ru },
    country,
    alias,
    url,
    style: {
      gradients: ['#90CAF9', '#3F51B5'],
      png, svg,
      background: '#eeeeee',
      lightness: 'light',
      text: '#000',
    }
  },

  brand: {
    logo: { svg, png },
    alias,
    name,
  },

  numberLengths: [12, 13, 14, 15, 16, 17, 18, 19],
  numberGaps: [4, 8, 12],
  numberBlocks,
  codeLength,
  numberNice,
  numberMask,
  codeName
}
```

