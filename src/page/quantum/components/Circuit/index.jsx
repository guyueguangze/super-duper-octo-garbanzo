import React, { useRef } from 'react'
import Qubit from '../Qubit'
import * as d3 from 'd3'
export default function Circuit(props) {
  const svgCoordinate = useRef()
  const rect = useRef()
  const svg = d3.select(svgCoordinate.current).on('mouseup', function (e) {
    props.getDragCoordinate(e.layerY)
  })
  const setRect = d3.select(rect.current).attr('stroke-width', 4)
  return (
    <svg width={'100%'} height={'100%'} ref={svgCoordinate}>
      <rect
        ref={rect}
        stroke="#C4C4C4"
        width={'100%'}
        height={'100%'}
        fill="transparent"
      ></rect>

      {props.circuit.map((qubit, index) => (
        <Qubit
          circuitLength={props.circuitLength}
          key={index}
          index={index}
          gates={qubit}
        ></Qubit>
      ))}
    </svg>
  )
}
