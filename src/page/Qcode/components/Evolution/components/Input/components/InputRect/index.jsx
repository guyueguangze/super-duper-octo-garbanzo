import { rgb } from 'd3'
import React from 'react'

export default function InputRect(props) {
  // 计算线条的x2y2的坐标
  let lineX
  let lineY
  let lineWidth 
  if (props.basesData) {
(props.basesData.magnitude === 0 && props.basesData.phases===0)
  ? (lineWidth = '0')
  : (lineWidth = '1.25')
    console.log(props.basesData.related_bases, 6655)
    lineX =
      10 + (10* Math.sin(2*Math.PI/360* props.basesData.phases))
    lineY = 10 - 10 * Math.cos(((2 * Math.PI) / 360) * props.basesData.phases)
  }
  // console.log(props,66);
  return (
    <g transform={`translate(${props.index * 26})`}>
     {
          props.basesData.related_bases[0]?<g transform="translate(0,-50)">
        <rect
          width={20}
          height={20}
          fill="transparent"
          strokeWidth="1"
          stroke="rgba(142, 132, 112,0.5)"
        ></rect>
        
        <g
          transform={`translate(${
            (20 - props.basesData.related_bases[0]?.magnitude * 20) / 2
          },${(20 - props.basesData.related_bases[0]?.magnitude * 20) / 2})`}
        >
          <rect
            width={20 * props.basesData.related_bases[0]?.magnitude}
            height={20 * props.basesData.related_bases[0]?.magnitude}
            fill="rgb(137, 214, 220)"
          ></rect>
        </g>
        <line
          stroke="black"
          strokeWidth={lineWidth}
          x1={10}
          y1={10}
          x2={lineX}
          y2={lineY}
        ></line>
      </g>:''
        }
      
      <g transform="translate(0,-22)">
        <line
          x1="3"
          y1="2"
          x2="3"
          y2="16"
          strokeWidth="1"
          stroke="black"
        ></line>
        <g>
          <text
            fontSize="12"
            transform={`translate(${props.basesData.id > 9 ? 4 : 8},13)`}
          >
            {props.index}
          </text>
        </g>
        <line
          x1="18"
          y1="2"
          x2="21"
          y2="9"
          strokeWidth="1"
          stroke="black"
        ></line>
        <line
          x1="18"
          y1="16"
          x2="21"
          y2="9"
          strokeWidth="1"
          stroke="black"
        ></line>
      </g>

      <rect
        width={20}
        height={20}
        fill="transparent"
        strokeWidth="1"
        stroke="rgba(142, 132, 112,0.5)"
      ></rect>

      <g
        transform={`translate(${(20 - props.basesData.magnitude * 20) / 2},${
          (20 - props.basesData.magnitude * 20) / 2
        })`}
      >
        <rect
          width={20 * props.basesData.magnitude}
          height={20 * props.basesData.magnitude}
          fill="rgb(80, 128, 132)"
        ></rect>
      </g>
      <line
        stroke="black"
        strokeWidth={lineWidth}
        x1={10}
        y1={10}
        x2={lineX}
        y2={lineY}
      ></line>
    </g>
  )
}
