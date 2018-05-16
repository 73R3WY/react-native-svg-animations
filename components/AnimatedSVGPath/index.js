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

import Path from '../AnimatedSVG';

const { height, width } = Dimensions.get('window');
class AnimatedSVGPath extends Component {
  static propTypes = {
    d: PropTypes.string.isRequired,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    duration: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.number,
    width: PropTypes.number,
    scale: PropTypes.number,
    fill: PropTypes.string,
    loop: PropTypes.bool,
    lineCap: PropTypes.string,
    shouldReload: PropTypes.number,
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
    loop: true,
    lineCap: "butt",
    shouldReload: 0,
  };

  static getDerivedStateFromProps(newProps, prevState) {
    const newDashLength = svgPathProperties(newProps.d).getTotalLength() + newProps.strokeWidth
    if (newDashLength !== prevState.dashLength) {
      return {
        dashLength: newDashLength,
        strokeDashOffset: new Animated.Value(newDashLength),
      }
    } else {
      return null
    }
  }

  constructor(props) {
    super(props);
    const { d, strokeWidth } = this.props;
    const dashLength = svgPathProperties(d).getTotalLength() + strokeWidth
    this.isAnimating = false;
    this.state = {
      strokeDashOffset: new Animated.Value(dashLength),
      dashLength
    }
  }

  animate = () => {
    const {
      delay,
      duration,
      loop,
      velocity,
    } = this.props;
    this.isAnimating = true
    this.state.strokeDashOffset.setValue(this.state.dashLength);
    let animationDuration = duration
    if (velocity) {
      animationDuration = velocity * this.state.dashLength
    }
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this.state.strokeDashOffset, {
        toValue: 0,
        duration: animationDuration,
      })
    ]).start(() => {
      if (loop) {
          this.animate();
      }
      this.isAnimating = false;
    });
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shouldReload !== this.props.shouldReload && this.isAnimating === false) {
      this.animate();
    }
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
      lineCap,
    } = this.props;
    const { dashLength, strokeDashOffset } = this.state
    return (
      <Svg
        height={(height * scale) + 5}
        width={(width * scale) + 5}
      >
        <Path
          strokeDasharray={[dashLength, dashLength]}
          strokeDashoffset={strokeDashOffset}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          scale={scale}
          fill={fill}
          d={d}
          strokeLinecap={lineCap}
        />
      </Svg>
    );
  }
}

/* Export ==================================================================== */

module.exports = AnimatedSVGPath;
module.exports.details = {
  title: 'AnimatedSVGPath',
};
