import React, {
  Component,
} from 'react';
import {
  View,
} from 'react-native';

import AnimatedSVGPath from '../../components/AnimatedSVGPath';
import d from './d';

export default class HiSVG extends Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <AnimatedSVGPath
          strokeColor={"pink"}
          duration={2500}
          strokeWidth={5}
          height={400}
          width={400}
          scale={0.5}
          delay={500}
          d={d}
        />
      </View>
    );
  }
}