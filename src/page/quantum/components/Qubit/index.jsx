import React, { useRef, useEffect } from 'react'
import Gate from '../Gate'
import * as d3 from 'd3'
export default function Qubit(props) {
   const line = useRef()
   const lineStyle = d3.select(line.current).style('stroke-width', 1)
   
  return (
    <>
      <g
        transform={`translate(60,${
          5 + props.index * 40 ? props.index * 40 : 0
        })`}
        width={200}
        height={200}
      >
        <g transform="translate(0 ,14)">
          <path fill="#999999" d="M0.1,0.2h1.3v10.3H0.1V0.2z"></path>
          <path
            fill="#999999"
            d="M3.4,5.3C3.4,1.7,4.7,0,6.6,0s3.2,1.7,3.2,5.3s-1.3,5.3-3.2,5.3S3.4,8.9,3.4,5.3z M8.6,5.3c0-3-0.8-4.3-2-4.3
            s-2,1.3-2,4.3s0.8,4.3,2,4.3S8.6,8.3,8.6,5.3z"
          ></path>
          <path
            fill="#999999"
            d="M11.1,7.3l3.3-1.2l2.1-0.8l0,0l-2.1-0.8l-3.3-1.3V2.1l6.7,2.6v1l-6.7,2.7V7.3z"
          ></path>
        </g>
        <line
          ref={line}
          x1="30"
          y1="20"
          x2='90%'
          y2="20"
          data-dis="0"
          stroke="#C4C4C4"
        ></line>
      </g>
      <g>
        {props.gates.map((gate, index) => (
          // <Droppable droppableId={uuid()} type="PERSON">
          //   {(provided, snapshot) => (
          //     <g
          //       ref={provided.innerRef}
          //       // style={{
          //       //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
          //       // }}
          //       {...provided.droppableProps}
          //     >
          <Gate
            index={index}
            x={95}
            y={9 + props.index * 40}
            key={index}
            type={gate}
          ></Gate>
          //     </g>
          //   )}
          // </Droppable>
        ))}
      </g>
    </>
  )
}
