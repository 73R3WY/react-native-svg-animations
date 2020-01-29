import React, {
  PureComponent, Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import {
  svgPathProperties,
} from 'svg-path-properties';

import Path from '../AnimatedSVG';

const { height, width } = Dimensions.get('window');
class AnimatedSvgPaths extends Component {
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
    loop: PropTypes.bool,
    transform: PropTypes.string,
    reverse: PropTypes.bool
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
    reverse: false
  };
  
  constructor(props) {
    super(props);
    const { d, reverse } = this.props;
    const properties = svgPathProperties(d)
    this.length = properties.getTotalLength();
    this.strokeDashoffset = new Animated.Value(!reverse ? this.length : 0);
  }
  
  animate = () => {
    const {
      delay,
      duration,
      loop,
      easing,
      reverse,
    } = this.props;
    this.strokeDashoffset.setValue(!reverse ? this.length : 0);
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this.strokeDashoffset, {
        toValue: !reverse ? 0 : this.length,
        duration: duration,
        useNativeDriver: true,
        easing: easing
      })
    ]).start(() => {
      if (loop) {
        this.animate();
      }
    });
  }

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
      transform,
    } = this.props;
    return (
      <Path
        strokeDasharray={[this.length, this.length]}
        strokeDashoffset={this.strokeDashoffset}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        stroke={strokeColor}
        scale={scale}
        fill={fill}
        transform={transform}
        d={d}
      />
    );
  }
}

/* Export ==================================================================== */

module.exports = AnimatedSvgPaths;
module.exports.details = {
  title: 'AnimatedSvgPaths',
};
