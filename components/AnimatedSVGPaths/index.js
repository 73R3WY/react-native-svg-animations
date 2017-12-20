import React, {
  PureComponent, Component,
} from 'react';
import PropTypes from 'prop-types';
import Svg from 'react-native-svg';
import {
  Animated,
  Dimensions,
} from 'react-native';
import {
  svgPathProperties,
} from 'svg-path-properties';

import Path from '../AnimatedPath';

const { height, width } = Dimensions.get('window');
class AnimatedSVGPaths extends Component {
  static propTypes = {
    ds: PropTypes.arrayOf(PropTypes.string).isRequired,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    duration: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.number,
    width: PropTypes.number,
    scale: PropTypes.number,
    fill: PropTypes.string,
  };
  
  static defaultProps = {
    strokeColor: "black",
    strokeWidth: 1,
    duration: 1000,
    delay: 1000,
    fill: "none",
    scale: 1,
    height,
    width,
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      ds,
      fill,
      scale,
      width,
      height,
      strokeColor,
      strokeWidth,
      duration,
      delay,
    } = this.props;

    const svgPaths = ds.map((d, index) => {
      return (
        <Path
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
          duration={duration}
          delay={delay}
          scale={scale}
          fill={fill}
          key={index}
          d={d}
        />
      );
    });

    return (
      <Svg
        height={(height * scale) + 5}
        width={(width * scale) + 5}
      >
        {svgPaths}
      </Svg>
    );
  }
}

/* Export ==================================================================== */

module.exports = AnimatedSVGPaths;
module.exports.details = {
  title: 'AnimatedSVGPaths',
};