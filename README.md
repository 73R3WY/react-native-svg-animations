# react-native-svg-animations [![npm version](https://badge.fury.io/js/react-native-svg-animations.svg)](https://badge.fury.io/js/react-native-svg-animations)

> SVG Animations wrapper for react-native. Based on examples from this project: https://github.com/ethantran/react-native-examples

## Dependencies

- `svg-path-properties`
- `react-native-svg`

## Installation

```
npm i react-native-svg-animations --save
```
or
```
yarn add react-native-svg-animations
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
    strokeLinecap={"round"}
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
- `strokeLinecap` - the shape to be used at the end of open subpaths when they are stroked. (defaults to butt)
- `strokeDashArray` - the number and length of strokes. (defaults to total length obtained from properties of d)
- `height` - the height of the base SVG. (defaults to screen viewport height)
- `width` - the width of the base SVG. (defaults to screen viewport width)
- `scale` - the scale of the output SVG based on the width and height of the base SVG. (defaults to 1.0 or 100%)
- `delay` - time in `ms` before starting animation. (defaults to 1000ms or 1s)
- `pause` - time in `ms` to pause at the end of the animation or at the half point of a rewound animation. (defaults 0)
- `duration` - time in `ms` to complete the path drawing from starting point to ending point. (defaults to 1000ms or 1s)
- `fill` - the color fill of the closed path. (defaults to none)
- `loop` - whether the animation loops infinitely. (defaults to true)
- `reverse` - Begins drawn and fades as you go . (defaults to false)
- `rewind` - the path is rewound when it was complete. (defaults to false)

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

- `strokeColor` - the color of the path stroke. (defaults to black)
- `strokeWidth` - the thickness of the path stroke. (defaults to 1)
- `height` - the height of the base SVG. (defaults to screen viewport height)
- `width` - the width of the base SVG. (defaults to screen viewport width)
- `scale` - the scale of the output SVG based on the width and height of the base SVG. (defaults to 1.0 or 100%)
- `delay` - time in `ms` before starting animation. (defaults to 1000ms or 1s)
- `pause` - time in `ms` to pause at the end of the animation or at the half point of a rewound animation. (defaults 0)
- `duration` - time in `ms` to complete the path drawing from starting point to ending point. (defaults to 1000ms or 1s)
- `fill` - the color fill of the closed path. (defaults to none)
- `loop` - whether the animation loops infinitely. (defaults to true)
- `reverse` - Begins drawn and fades as you go . (defaults to false)
- `rewind` - the path is rewound when it was complete. (defaults to false)
- `sequential` - paths start to animate sequentially with the delay between them specified in the `delay` prop, and wait for the last one to finish before a new animation begins. (defaults to false)
- `ds` - the SVG Paths to be animated, must be an array; either this or `customSvgProps` is required.
- `customSvgProps` - an array of objects to define path properties; other properties will be overwritten by the values defined in these objects; either this or `ds` is required.
  ```javascript
  <AnimatedSVGPaths
    //...
    customSvgProps={[
      {
        d: "M 10 10 C 20 20, 40 20, 50 10",
        strokeColor: 'blue',
        strokeWidth: 1
        //...
      },
      {
        d: "M 70 10 C 70 20, 110 20, 110 10",
        strokeColor: 'red',
        strokeWidth: 3
        //...
      },
    ]}
    //...
  />  
  ```

## TODO

- Other animated SVG objects.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Contributors

Special thanks to these contributors:

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/Mr-Bhardwa7">
          <img src="https://avatars.githubusercontent.com/u/40822939?v=3?s=100" width="100px;" alt="Mr-Bhardwa7"/>
          <br />
          <sub><b>Mr-Bhardwa7</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/dimofte">
          <img src="https://avatars.githubusercontent.com/u/4060827?v=3?s=100" width="100px;" alt="dimofte"/>
          <br />
          <sub><b>dimofte</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/jvt">
          <img src="https://avatars.githubusercontent.com/u/2718101?v=3?s=100" width="100px;" alt="jvt"/>
          <br />
          <sub><b>jvt</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/b8ne">
          <img src="https://avatars.githubusercontent.com/u/19263633?v=3?s=100" width="100px;" alt="b8ne"/>
          <br />
          <sub><b>b8ne</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/hovlev">
          <img src="https://avatars.githubusercontent.com/u/1330309?v=3?s=100" width="100px;" alt="hovlev"/>
          <br />
          <sub><b>hovlev</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/qvick1pro">
          <img src="https://avatars.githubusercontent.com/u/12903197?v=3?s=100" width="100px;" alt="qvick1pro"/>
          <br />
          <sub><b>qvick1pro</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/TristanTouchain">
          <img src="https://avatars.githubusercontent.com/u/36477156?v=3?s=100" width="100px;" alt="TristanTouchain"/>
          <br />
          <sub><b>TristanTouchain</b></sub>
        </a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/nitzanbener">
          <img src="https://avatars.githubusercontent.com/u/44496859?v=3?s=100" width="100px;" alt="nitzanbener"/>
          <br />
          <sub><b>nitzanbener</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/muh-hamada">
          <img src="https://avatars.githubusercontent.com/u/56512406?v=3?s=100" width="100px;" alt="muh-hamada"/>
          <br />
          <sub><b>muh-hamada</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/benomatis">
          <img src="https://avatars.githubusercontent.com/u/5822748?v=3?s=100" width="100px;" alt="benomatis"/>
          <br />
          <sub><b>benomatis</b></sub>
        </a>
      </td>
    </tr>
  </tbody>
</table>


## License

MIT
