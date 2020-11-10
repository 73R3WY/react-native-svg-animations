# react-native-svg-animations [![npm version](https://badge.fury.io/js/react-native-svg-animations.svg)](https://badge.fury.io/js/react-native-svg-animations)

> SVG Animations wrapper for react-native. Based on examples from this project: https://github.com/ethantran/react-native-examples

## Dependencies

- `svg-path-properties`
- `react-native-svg`

## Installation

```
$ npm i react-native-svg-animations --save
```

## Demo

<table>
  <tr>
    <td>
      <strong>AnimatedSVGPath</strong>
    </td>
    <td>
      <strong>AnimatedSVGPaths</strong>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://raw.githubusercontent.com/73R3WY/react-native-svg-animations/master/examples/HiSVG/hi_1.gif" width="300">
    </td>
    <td>
      <img src="https://raw.githubusercontent.com/73R3WY/react-native-svg-animations/master/examples/IngenuityPreloaderSVG/preloader_1.gif" width="300">
    </td>
  </tr>
</table>

## Usage

This package contains wrapper components for displaying animated SVG in react-native, currently, this contains the following:

- AnimatedSVGPath
- AnimatedSVGPaths

###### AnimatedSVGPath

Component to display a single animated SVG Path.
See <a href="https://github.com/73R3WY/react-native-svg-animations/tree/master/examples/HiSVG">Hi example</a> for the complete implementation.

<img src="https://raw.githubusercontent.com/73R3WY/react-native-svg-animations/master/examples/HiSVG/hi_2.gif" width="300">

```javascript
import { AnimatedSVGPath } from "react-native-svg-animations";
```

...

```javascript
<View>
  <AnimatedSVGPath
    strokeColor={"green"}
    duration={500}
    strokeWidth={10}
    strokeDashArray={[42.76482137044271, 42.76482137044271]}
    height={400}
    width={400}
    scale={0.75}
    delay={100}
    d={d}
    loop={false}
  />
</View>
```

where the properties are:

- `d` - the SVG Path to be animated. (required)
- `strokeColor` - the color of the path stroke. (defaults to black)
- `strokeWidth` - the thickness of the path stroke. (defaults to 1)
- `strokeDashArray` - the number and length of strokes. (defaults to total length obtained from properties of d)
- `height` - the height of the base SVG. (defaults to screen viewport height)
- `width` - the width of the base SVG. (defaults to screen viewport width)
- `scale` - the scale of the output SVG based on the width and height of the base SVG. (defaults to 1.0 or 100%)
- `delay` - time in `ms` before starting animation. (defaults to 1000ms or 1s)
- `duration` - time in `ms` to complete the path drawing from starting point to ending point. (defaults to 1000ms or 1s)
- `fill` - the color fill of the closed path. (defaults to none)
- `loop` - whether the animation loops infinitely. (defaults to true)
- `reverse` - Begins drawn and fades as you go . (defaults to false)
- `rewind` - the path is rewinded when it was complete. (defaults to false)

###### AnimatedSVGPaths

Component to display a multiple animated SVG Paths.
See <a href="https://github.com/73R3WY/react-native-svg-animations/tree/master/examples/IngenuityPreloaderSVG">Ingenuity preloader example</a> for the complete implementation.

<img src="https://raw.githubusercontent.com/73R3WY/react-native-svg-animations/master/examples/IngenuityPreloaderSVG/preloader_2.gif" width="300">

```javascript
import { AnimatedSVGPaths } from "react-native-svg-animations";
```

...

```javascript
<View>
  <AnimatedSVGPaths
    strokeColor={"red"}
    strokeWidth={5}
    duration={10000}
    height={600}
    width={600}
    scale={0.5}
    delay={100}
    ds={ds}
  />
</View>
```

where the properties are:

- `ds` - the SVG Paths to be animated, must be an array. (required)
- `strokeColor` - the color of the path stroke. (defaults to black)
- `strokeWidth` - the thickness of the path stroke. (defaults to 1)
- `height` - the height of the base SVG. (defaults to screen viewport height)
- `width` - the width of the base SVG. (defaults to screen viewport width)
- `scale` - the scale of the output SVG based on the width and height of the base SVG. (defaults to 1.0 or 100%)
- `delay` - time in `ms` before starting animation. (defaults to 1000ms or 1s)
- `duration` - time in `ms` to complete the path drawing from starting point to ending point. (defaults to 1000ms or 1s)
- `fill` - the color fill of the closed path. (defaults to none)
- `loop` - whether the animation loops infinitely. (defaults to true)
- `reverse` - Begins drawn and fades as you go . (defaults to false)
- `rewind` - the path is rewinded when it was complete. (defaults to false)

## TODO

- Accept paths as objects to handle different delays and duration for each of the single path, as well as custom path properties.
- Other animated SVG objects.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Contributors

Special thanks to these developers:
- <a href="https://github.com/Mr-Bhardwa7">Mr-Bhardwa7</a>
- <a href="https://github.com/dimofte">dimofte</a>
- <a href="https://github.com/jvt">jvt</a>
- <a href="https://github.com/b8ne">b8ne</a>
- <a href="https://github.com/hovlev">hovlev</a>
- <a href="https://github.com/qvick1pro">qvick1pro</a>
- <a href="https://github.com/TristanTouchain">TristanTouchain</a>
- <a href="https://github.com/nitzanbener">nitzanbener</a>

## License

MIT
