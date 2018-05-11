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
  
  import Cirlce from '../AnimatedCircle';
  
  const { height, width } = Dimensions.get('window');
  class PulsatingCircle extends Component {
    static propTypes = {
      r: PropTypes.number.isRequired,
      cx: PropTypes.number.isRequired,
      cy: PropTypes.number.isRequired,
      index: PropTypes.number,
      triggerIndex: PropTypes.number,
      duration: PropTypes.number,
      height: PropTypes.number,
      delay: PropTypes.number,
      width: PropTypes.number,
      scale: PropTypes.number,
      fill: PropTypes.string,
      shouldReload: PropTypes.number,
    };
    
    static defaultProps = {
      r: 12,
      cx,
      cy,
      index: -1,
      triggerIndex,
      duration: 300,
      height: 300,
      delay: 600,
      width: 300,
      scale: 1,
      fill: "rgba(60,60,60,0.6)",
      shouldReload: 0,
    };
    
    constructor(props) {
      super(props);
      const { r } = this.props;
      this.radius = new Animated.Value(r);
    }
  
    animate = () => {
      const {
        delay,
        duration,
        r
      } = this.props;
      this.radius.setValue(r);
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(this.strokeDashoffset, {
          toValue: r * 1.5,
          duration: duration,
        }),
        Animated.delay(200),
        Animated.timing(this.strokeDashoffset, {
          toValue: r,
          duration: duration,
        }),
      ]).start();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.triggerIndex === nextProps.index) {
        this.animate();
      }
    }
  
    render() {
      const {
        fill,
        scale,
        width,
        height,
        cx,
        cy,
      } = this.props;
      return (
        <Svg
          height={(height * scale)}
          width={(width * scale)}
        >
          <Cirlce
            r={ this.radius }
            cx={ cx }
            cy={ cy }
            scale={ scale }
            fill={ fill }
          />
        </Svg>
      );
    }
  }
  
  /* Export ==================================================================== */
  
  module.exports = PulsatingCircle;
  module.exports.details = {
    title: 'PulsatingCircle',
  };