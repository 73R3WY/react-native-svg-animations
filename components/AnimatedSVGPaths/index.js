import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg from "react-native-svg";
import { Dimensions } from "react-native";

import Path from "../AnimatedPath";

const { height, width } = Dimensions.get("window");

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.ds && !props.customSvgProps) {
    return new Error(`One of 'ds' or 'customSvgProps' is required by '${componentName}' component.`)
  }
  if (props.ds || props.customSvgProps) {
    PropTypes.checkPropTypes(
      {
        [propName]: propName === 'ds'
          ? PropTypes.arrayOf(PropTypes.string)
          : PropTypes.arrayOf(PropTypes.object)
      },
      { [propName]: props[propName] },
      'prop',
      'AnimatedSVGPaths'
    )
  }
  return null
}

class AnimatedSVGPaths extends Component {
  static propTypes = {
    ds: requiredPropsCheck,
    customSvgProps: requiredPropsCheck,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    duration: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.number,
    pause: PropTypes.number,
    width: PropTypes.number,
    scale: PropTypes.number,
    fill: PropTypes.string,
    loop: PropTypes.bool,
    rewind: PropTypes.bool,
    sequential: PropTypes.bool,
  };

  static defaultProps = {
    strokeColor: "black",
    strokeWidth: 1,
    duration: 1000,
    delay: 1000,
    pause: 0,
    fill: "none",
    scale: 1,
    height,
    width,
    rewind: false,
    sequential: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      ds,
      customSvgProps,
      fill,
      scale,
      width,
      height,
      strokeColor,
      strokeWidth,
      duration,
      delay,
      pause,
      loop,
      rewind,
      sequential
    } = this.props;

    const svgArray = ds ?? customSvgProps

    const svgPaths = svgArray.map((svg, index) => {
      let pathProps = {
        key: index,
        strokeWidth,
        strokeColor,
        duration,
        delay: sequential ? index * delay : delay,
        scale,
        fill,
        loop,
        rewind
      }
      
      if (typeof svg === 'string') {
        pathProps.d = svg
      } else {
        Object.assign(pathProps, svg)
      }
      
      if (sequential) {
        pathProps.pause = (svgArray.length - 1 - index) * 2 * delay
      }
      
      if (pause) {
        pathProps.pause = pause
      }
      
      return (
        <Path {...pathProps }/>
      );
    });

    return (
      <Svg height={height * scale + 5} width={width * scale + 5}>
        {svgPaths}
      </Svg>
    );
  }
}

/* Export ==================================================================== */

module.exports = AnimatedSVGPaths;
module.exports.details = {
  title: "AnimatedSVGPaths",
};
