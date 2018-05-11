import React, {
    Component,
  } from 'react';
  import Svg, {
    Circle,
  } from 'react-native-svg';
  import {
    Animated,
  } from 'react-native';
  
  import AnimatedSvg from '../../utils/AnimatedSVG';
  
  class AnimatedCircle extends Component {
    setNativeProps = (props = {}) => {
      this._component && this._component.setNativeProps(props);
    }
    
    render() {
      return (
        <Circle
          ref={component => (this._component = component)}
          {...this.props}
        />
      );
    }
  }
  
  AnimatedCircle = AnimatedSvg(AnimatedCircle);
  export default AnimatedCircle;