import React from 'react'
import Svg, { PathProps } from 'react-native-svg'
import { Dimensions } from 'react-native'
import Path from '../AnimatedPath'
import { AnimatedSVGPathProps } from '../AnimatedSVGPath'

const { height, width } = Dimensions.get('window')

export type CustomSVGPathProps = AnimatedSVGPathProps

export interface AnimatedSvgPathsProps {
  ds?: string[],
  customSVGProps?: CustomSVGPathProps[]
  strokeColor?: PathProps[`stroke`]
  strokeWidth?: PathProps[`strokeWidth`]
  fill?: PathProps[`fill`]
  duration?: number
  height?: number
  delay?: number
  width?: number
  scale?: number
  loop?: boolean
  rewind?: boolean
  pause?: number
  sequential?: boolean
}

const AnimatedSVGPaths: React.FC<AnimatedSvgPathsProps> = ({
  ds = [],
  customSVGProps = [],
  strokeColor = 'black',
  strokeWidth = 1,
  duration = 1000,
  delay = 1000,
  fill = 'none',
  scale = 1,
  loop = true,
  rewind = false,
  pause = 0,
  sequential = false,
}) => {
  const svgArray = ds.length > 0
    ? ds
    : customSVGProps.length > 0
      ? customSVGProps
      : []

  const svgPaths = svgArray.map((d: string | CustomSVGPathProps, index: number) => {
    let pathProps: AnimatedSVGPathProps & {
      key: number
    } = {
      key: index,
      strokeWidth,
      strokeColor,
      duration,
      delay: sequential ? index * delay : delay,
      scale,
      fill,
      loop,
      rewind,
      d: '',
    }

    if (typeof d === 'string') {
      pathProps.d = d
    } else {
      Object.assign(pathProps, d)
    }

    if (sequential) {
      pathProps.pause = (svgArray.length - 1 - index) * delay * (rewind ? 2 : 1)
    }

    if (pause) {
      pathProps.pause = pause
    }

    return (
      <Path
        {...pathProps}
      />
    )
  })

  return (
    <Svg height={height * scale + 5} width={width * scale + 5}>
      {svgPaths}
    </Svg>
  )
}

export default AnimatedSVGPaths
