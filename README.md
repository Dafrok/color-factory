# color-factory
CSS colors transformer

## Try It Out

https://dafrok.github.io/css-color-playground/

## Install
```
$ npm i color-factory
```

## Usage
```es6
import Color from 'color-factory'

const colorFromString = new Color('rgba(12, 34, 56, 0.7)')
colorFromString.toHex()
colorFromString.h(100).s(0.4).b(30).toHSL()
colorFromString.g()

const colorFromObject = new Color({h: 100, s: 0.5, l: 0.3})
colorFromObject.toRGBA()
```

## API

#### .toHEX()

Convert color instance to CSS hex string.

#### .toRGB()

Convert color instance to CSS rgb string.

#### .toRGBA()

Convert color instance to CSS rgba string.

#### .toHSL()

Convert color instance to CSS hsl string.

#### .toHSLA()

Convert color instance to CSS hsla string.

#### .toSTRING()

Convert color instance to CSS color string, such as 'red', 'blue', 'transparent' etc.

#### .r()

Get the value of red channel.

#### .r(value)

- value
  - Type: String
  - Description: Set the value of red channel.
- Return: this

#### .g()

Get the value of green channel.

#### .g(value)

- value
  - Type: String
  - Description: Set the value of green channel.
- Return: this

#### .b()

Get the value of blue channel.

#### .b(value)

- value
  - Type: String
  - Description: Set the value of blue channel.
- Return: this

#### .h()

Get the value of hue.

#### .h(value)

- value
  - Type: String
  - Description: Set the value of hue.
- Return: this

#### .s()

Get the value of saturation.

#### .s(value)

- value
  - Type: String
  - Description: Set the value of saturation.
- Return: this

#### .l()

Get the value of lightness.

#### .l(value)

- value
  - Type: String
  - Description: Set the value of lightness.
- Return: this

#### .a()

Get the value of alpha channel.

#### .a(value)

- value
  - Type: String
  - Description: Set the value of alpha.
- Return: this
