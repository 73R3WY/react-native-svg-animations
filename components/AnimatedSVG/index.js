import React, { Component } from "react";
import { Path } from "react-native-svg";

import AnimatedSvg from "../../utils/AnimatedSVG";

class AnimatedSvgPath extends Component {
  setNativeProps = (props = {}) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <Path
        ref={(component) => (this._component = component)}
        {...this.props}
      />
    );
  }
}

AnimatedSvgPath = AnimatedSvg(AnimatedSvgPath);
export default AnimatedSvgPath;
