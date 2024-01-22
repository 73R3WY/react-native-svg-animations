import React, { useEffect, useState } from 'react'
import Svg, { PathProps } from 'react-native-svg'
import { Animated, Dimensions, Easing } from 'react-native'
import { svgPathProperties } from 'svg-path-properties'
import Path from '../AnimatedSVG'

const {
  height: windowHeight,
  width: windowWidth,
} = Dimensions.get('window')

export interface AnimatedSVGPathProps {
  d: string
  strokeColor?: PathProps[`stroke`]
  strokeWidth?: PathProps[`strokeWidth`]
  strokeLinecap?: PathProps[`strokeLinecap`]
  easing?: Animated.TimingAnimationConfig[`easing`]
  fill?: PathProps[`fill`]
  duration?: number
  height?: number
  delay?: number
  width?: number
  scale?: number
  loop?: boolean
  transform?: PathProps[`transform`]
  reverse?: boolean
  rewind?: boolean
  strokeDasharray?: string[]
  pause?: number
}

const AnimatedSVGPath: React.FC<AnimatedSVGPathProps> = ({
  d,
  strokeColor = 'black',
  strokeWidth = 1,
  strokeLinecap = 'butt',
  easing = Easing.inOut(Easing.ease),
  duration = 1000,
  delay = 1000,
  fill = 'none',
  scale = 1,
  loop = true,
  transform = '',
  reverse = false,
  rewind = false,
  height = windowHeight,
  width = windowWidth,
  strokeDasharray,
  pause = 0,
}) => {
  const [loopCount, setLoopCount] = useState<number>(0)
  const properties = new svgPathProperties(d)
  const length = properties.getTotalLength()
  const strokeDashoffset = new Animated.Value(!reverse ? length : 0)

  const animate = () => {
    strokeDashoffset.setValue(!reverse ? length : 0)
    const animationsSequence = [].concat(
      [
        Animated.delay(delay * (loopCount ? 2 : 1)),
        Animated.timing(strokeDashoffset, {
          toValue: !reverse ? 0 : length,
          duration: duration,
          useNativeDriver: true,
          easing: typeof easing === 'function' ? easing : Easing[easing],
        }),
      ],
      pause
        ? [Animated.delay(pause)]
        : [],
      rewind
        ? [
          Animated.timing(strokeDashoffset, {
            toValue: !reverse ? length : 0,
            duration: duration,
            useNativeDriver: true,
            easing: typeof easing === 'function' ? easing : Easing[easing],
          }),
        ]
        : []
    )

    Animated.sequence(animationsSequence).start(() => {
      if (loop) {
        animate()
      }
    })

    setLoopCount(1)
  }

  useEffect(() => {
    animate()
  }, [])


  return (
    <Svg height={height * scale + 5} width={width * scale + 5}>
      <Path
        strokeDasharray={strokeDasharray || [length, length]}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        stroke={strokeColor}
        scale={scale}
        fill={fill}
        transform={transform}
        d={d}
      />
    </Svg>
  )
}

export default AnimatedSVGPath
