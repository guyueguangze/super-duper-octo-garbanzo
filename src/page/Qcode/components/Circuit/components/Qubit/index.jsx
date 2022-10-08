import React, { useRef, useEffect } from 'react'
import Gate from '../CircuitGate'
import * as d3 from 'd3'
export default function Qubit(props) {
  const line = useRef()
  const lineStyle = d3.select(line.current).style('stroke-width', 1)
  return (
    <>
      <g
        transform={`translate(60,${
          20 + props.index * 40 ? props.index * 40 : 0
        })`}
        width={200}
        height={200}
      >
        <g transform="translate(-14,4)">
          <text
            x="38.4"
            y="36"
            dy=".3em"
            fill="rgb(111, 111, 111)"
            fontWeight="400"
            textAnchor="end"
            fontSize='14px'
           
          >
            <tspan>q[{props.index}]</tspan>
          </text>
          {/* <path fill="#999999" d="M0.1,0.2h1.3v10.3H0.1V0.2z"></path>
          <path
            fill="#999999"
            d="M3.4,5.3C3.4,1.7,4.7,0,6.6,0s3.2,1.7,3.2,5.3s-1.3,5.3-3.2,5.3S3.4,8.9,3.4,5.3z M8.6,5.3c0-3-0.8-4.3-2-4.3
            s-2,1.3-2,4.3s0.8,4.3,2,4.3S8.6,8.3,8.6,5.3z"
          ></path>
          <path
            fill="#999999"
            d="M11.1,7.3l3.3-1.2l2.1-0.8l0,0l-2.1-0.8l-3.3-1.3V2.1l6.7,2.6v1l-6.7,2.7V7.3z"
          ></path> */}
        </g>
      </g>
      <g>
        {props.gates.map((gate, index) => (
          <Gate
            index={index}
            x={95}
            y={25 + props.index * 40}
            key={index}
            gate={gate}
          ></Gate>
        ))}
      </g>
    </>
  )
}
