import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg from "react-native-svg";
import { Animated, Dimensions, Easing } from "react-native";
import { svgPathProperties } from "svg-path-properties";

import Path from "../AnimatedSVG";

const { height, width } = Dimensions.get("window");
class AnimatedSVGPath extends Component {
  static propTypes = {
    d: PropTypes.string.isRequired,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeLinecap: PropTypes.string,
    easing: PropTypes.any,
    duration: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.number,
    width: PropTypes.number,
    scale: PropTypes.number,
    fill: PropTypes.string,
    loop: PropTypes.bool,
    transform: PropTypes.string,
    reverse: PropTypes.bool,
    rewind: PropTypes.bool,
  };

  static defaultProps = {
    strokeColor: "black",
    strokeWidth: 1,
    strokeLinecap: "butt",
    easing: Easing.easeInOut,
    duration: 1000,
    delay: 1000,
    fill: "none",
    scale: 1,
    height,
    width,
    loop: true,
    transform: "",
    reverse: false,
    rewind: false,
  };

  constructor(props) {
    super(props);
    const { d, reverse } = this.props;
    const properties = new svgPathProperties(d);
    this.length = properties.getTotalLength();
    this.strokeDashoffset = new Animated.Value(!reverse ? this.length : 0);
  }

  animate = () => {
    const {
      delay,
      duration,
      loop,
      easing = Easing["linear"],
      reverse,
      rewind,
    } = this.props;
    this.strokeDashoffset.setValue(!reverse ? this.length : 0);
    const animationsSequence = [].concat(
      [
        Animated.delay(delay),
        Animated.timing(this.strokeDashoffset, {
          toValue: !reverse ? 0 : this.length,
          duration: duration,
          useNativeDriver: true,
          easing: typeof easing === 'function' ? easing : Easing[easing],
        }),
      ],
      rewind
        ? [
          Animated.timing(this.strokeDashoffset, {
            toValue: !reverse ? this.length : 0,
            duration: duration,
            useNativeDriver: true,
            easing: typeof easing === 'function' ? easing : Easing[easing],
          }),
        ]
        : []
    );

    Animated.sequence(animationsSequence).start(() => {
      if (loop) {
        this.animate();
      }
    });
  };

  componentDidMount() {
    this.animate();
  }

  render() {
    const {
      d,
      fill,
      scale,
      width,
      height,
      strokeColor,
      strokeWidth,
      strokeLinecap,
      strokeDashArray: dashArray,
      transform,
    } = this.props;
    return (
      <Svg height={height * scale + 5} width={width * scale + 5}>
        <Path
          strokeDasharray={dashArray || [this.length, this.length]}
          strokeDashoffset={this.strokeDashoffset}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          stroke={strokeColor}
          scale={scale}
          fill={fill}
          transform={transform}
          d={d}
        />
      </Svg>
    );
  }
}

/* Export ==================================================================== */

module.exports = AnimatedSVGPath;
module.exports.details = {
  title: "AnimatedSVGPath",
};
