import React, {
    Component,
  } from 'react';
  import {
    Circle,
  } from 'react-native-svg';
  import {
    Animated,
  } from 'react-native';
  
  import AnimatedSvg from '../../utils/AnimatedSVG';
  
  export const args = ['r'];
  const NativeSvgCircle = Circle
  class AnimatedCircle extends Component {
    setNativeProps = (props = {}) => {
      this._component && this._component.setNativeProps(props);
    }
    
    render() {
      return (
        <NativeSvgCircle
          ref={component => (this._component = component)}
          {...this.props}
        />
      );
    }
  }
  
  AnimatedCircle = AnimatedSvg(AnimatedCircle,  { propString: args });
  export default AnimatedCircle;