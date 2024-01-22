import React, { useEffect, useState } from 'react'
import { Animated, Easing } from 'react-native'
import { svgPathProperties } from 'svg-path-properties'
import { PathProps } from 'react-native-svg'
import Path from '../AnimatedSVG'

export interface AnimatedSvgPathProps {
  d: string
  strokeColor?: PathProps[`stroke`]
  strokeWidth?: PathProps[`strokeWidth`]
  strokeLinecap?: PathProps[`strokeLinecap`]
  easing?: Animated.TimingAnimationConfig[`easing`]
  fill?: PathProps[`fill`]
  duration?: number
  delay?: number
  scale?: number
  loop?: boolean
  transform?: PathProps[`transform`]
  reverse?: boolean
  rewind?: boolean
  pause?: number
}

const AnimatedSvgPath: React.FC<AnimatedSvgPathProps> = ({
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
  pause = 0,
}) => {
  let loopCount = 0
  const properties = new svgPathProperties(d)
  const length = properties.getTotalLength()
  const strokeDashoffset = new Animated.Value(!reverse ? length : 0)

  const animate = () => {
    strokeDashoffset.setValue(!reverse ? length : 0)
    const animationsSequence = [].concat(
      [
        Animated.delay(delay * (loopCount && rewind ? 2 : 1)),
        Animated.timing(strokeDashoffset, {
          toValue: !reverse ? 0 : length,
          duration: duration,
          useNativeDriver: true,
          easing,
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
            easing,
          }),
        ]
        : []
    )

    Animated.sequence(animationsSequence).start(() => {
      if (loop) {
        animate()
      }
    })

    loopCount = 1
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <Path
      strokeDasharray={[length, length]}
      strokeDashoffset={strokeDashoffset}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      stroke={strokeColor}
      scale={scale}
      fill={fill}
      transform={transform}
      d={d}
    />
  )
}

export default AnimatedSvgPath
