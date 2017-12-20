import React, {
  Component
} from 'react';
import {
  View
} from 'react-native';
import ds from './d';
import AnimatedSVGPaths from '../../components/AnimatedSVGPaths';

class IngenuityPreloaderSVG extends Component {
  render() {
    return (
      <View>
        <AnimatedSVGPaths
          strokeColor={"orange"}
          strokeWidth={2.5}
          duration={1000}
          height={600}
          width={600}
          scale={0.5}
          delay={100}
          ds={ds}
        />
      </View>
    );
  }
}

export default IngenuityPreloaderSVG;