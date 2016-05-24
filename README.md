# color-factory
CSS colors handler

## Install
```
$ npm i color-factory
```

## Usage
```es6
import Color from 'color-factory'

const colorFromString = new Color('rgba(12, 34, 56, 0.7)')
colorFromString.toHex()

const colorFromObject = new Color({h: 100, s: 0.5, l: 0.3})
colorFromObject.toRGBA()
```

## API

#### toHex

#### toRGB

#### toRGBA

#### toHSL

#### toHSLA
