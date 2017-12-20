import React, {
  Component,
} from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import {
  Animated,
} from 'react-native';

import AnimatedSvg from '../../utils/AnimatedSVG';

class AnimatedSvgPath extends Component {
  setNativeProps = (props = {}) => {
    this._component && this._component.setNativeProps(props);
  }
  
  render() {
    debugger;
    return (
      <Path
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

AnimatedSvgPath = AnimatedSvg(AnimatedSvgPath);
export default AnimatedSvgPath;