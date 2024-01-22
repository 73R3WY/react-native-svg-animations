import React, { Component, Ref } from 'react'
import { Path, PathProps } from 'react-native-svg'

import AnimatedSvg from '../../utils/AnimatedSVG'

interface AnimatedSvgPathBaseProps extends PathProps {
  ref?: Ref<Path>
}

class AnimatedSvgPathBase extends Component<AnimatedSvgPathBaseProps> {
  #_component: Path | null = null

  setNativeProps = (props: AnimatedSvgPathBaseProps = {}) => {
    this.#_component && this.#_component.setNativeProps(props)
  }

  render() {
    return (
      <Path
        ref={(component) => (this.#_component = component)}
        {...this.props}
      />
    )
  }
}

const AnimatedSvgPath = AnimatedSvg(AnimatedSvgPathBase)

export default AnimatedSvgPath
