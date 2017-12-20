# react-native-svg-animations

> SVG Animations wrapper for react-native. Based on examples from this project: https://github.com/ethantran/react-native-examples

## Dependencies

* `svg-path-properties` 
* `react-native-svg`

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
* AnimatedSVGPath
* AnimatedSVGPaths

###### AnimatedSVGPath

Component to display a single animated SVG Path.
See <a href="https://github.com/73R3WY/react-native-svg-animations/tree/master/examples/HiSVG">Hi example</a> for the complete implementation.

<img src="https://raw.githubusercontent.com/73R3WY/react-native-svg-animations/master/examples/HiSVG/hi_2.gif" width="300">

```javascript
import AnimatedSVGPath from 'react-native-svg-animations';
```

...

```javascript
  <View>
    <AnimatedSVGPath
      strokeColor={"green"}
      duration={500}
      strokeWidth={10}
      height={400}
      width={400}
      scale={0.75}
      delay={100}
      d={d}
    />
  </View>
```

where the properties are:
* `d` - the SVG Path to be animated. (required)
* `strokeColor` - the color of the path stroke. (defaults to black)
* `strokeWidth` - the thickness of the path stroke. (defaults to 1)
* `height` - the height of the base SVG. (defaults to screen viewport height)
* `width` - the width of the base SVG. (defaults to screen viewport width)
* `scale` - the scale of the output SVG based on the width and height of the base SVG. (defaults to 1.0 or 100%)
* `delay` - time in `ms` before starting animation. (defaults to 1000ms or 1s)
* `duration` - time in `ms` to complete the path drawing from starting point to ending point. (defaults to 1000ms or 1s)
* `fill` - the color fill of the closed path. (defaults to none)

###### AnimatedSVGPaths

Component to display a multiple animated SVG Paths.
See <a href="https://github.com/73R3WY/react-native-svg-animations/tree/master/examples/IngenuityPreloaderSVG">Ingenuity preloader example</a> for the complete implementation.

<img src="https://raw.githubusercontent.com/73R3WY/react-native-svg-animations/master/examples/IngenuityPreloaderSVG/preloader_2.gif" width="300">

```javascript
import AnimatedSVGPaths from 'react-native-svg-animations';
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
* `ds` - the SVG Paths to be animated, must be an array. (required)
* `strokeColor` - the color of the path stroke. (defaults to black)
* `strokeWidth` - the thickness of the path stroke. (defaults to 1)
* `height` - the height of the base SVG. (defaults to screen viewport height)
* `width` - the width of the base SVG. (defaults to screen viewport width)
* `scale` - the scale of the output SVG based on the width and height of the base SVG. (defaults to 1.0 or 100%)
* `delay` - time in `ms` before starting animation. (defaults to 1000ms or 1s)
* `duration` - time in `ms` to complete the path drawing from starting point to ending point. (defaults to 1000ms or 1s)
* `fill` - the color fill of the closed path. (defaults to none)

## TODO

* Accept paths as objects to handle different delays and duration for each of the single path, as well as custom path properties.
* Other animated SVG objects.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT