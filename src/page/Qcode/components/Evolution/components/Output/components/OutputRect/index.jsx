import React from 'react'

export default function OutputRect(props) {
   let lineX
   let lineY
   let lineWidth
   if (props.basesData) {
     props.basesData.magnitude === 0 && props.basesData.phases === 0
       ? (lineWidth = '0')
       : (lineWidth = '1.25')
    //  console.log(props.basesData)
     lineX = 10 + 10 * Math.sin(((2 * Math.PI) / 360) * props.basesData.phases)
     lineY = 10 - 10 * Math.cos(((2 * Math.PI) / 360) * props.basesData.phases)
   }
  
  return (
    <g transform={`translate(0,${props.index * 26})`}>
      <g transform="translate(22)">
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
            transform={`translate(${props.index > 9 ? 4 : 8},13)`}
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
      {props.basesData.related_bases[0]? <g transform="translate(50)">
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
      </g>:''}
     
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
