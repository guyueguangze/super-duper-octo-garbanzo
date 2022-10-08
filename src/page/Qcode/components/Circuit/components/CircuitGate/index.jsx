import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

export default function Gate(props) {
  const [gate, setgate] = useState('')
  let gate1 = ''
  const G = useRef()
  useEffect(() => {
    d3.select(G.current).attr(
      'transform',
      `translate(${props.x ? props.x + props.index * 40 : 0}, ${
        props.y ? props.y : 0
      })`
    )
  })
  // switch (props.gate) {
  //   case null:
  //     break
  //   case !null:
  //     setgate(props.gate)
  //     break
  //   default:
  // }
  if (props.gate !== null) {
    // console.log(props.gate)
    gate1 = props.gate
    // setgate()
  }
  // '  rz'
  // let gate = props.gate.filter((item) => item)
  // console.log(props.gate, 'gate')
  // console.log(gate1.name, 'gate')
  return (
    <>
      <g className="gate" ref={G}>
        {gate1.name === 'h' ? (
          <g>
            <g>
              <rect
                y="0"
                type="h"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M12.3,10.9h1.3v4.3h4.8v-4.3h1.3v10.3h-1.3v-4.8h-4.8v4.8h-1.3V10.9z"
              ></path>
            </g>
          </g>
        ) : gate1.name === 'rx' ? (
          <g type="rx">
            <g>
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M20.1,15.8l-2.8-5h1.4l1.4,2.6c0.3,0.5,0.5,0.9,0.8,1.5H21c0.3-0.6,0.5-1,0.7-1.5l1.4-2.6h1.4l-2.8,5l3,5.2h-1.4l-1.5-2.8c-0.3-0.5-0.5-1-0.9-1.7h-0.1c-0.3,0.6-0.6,1.1-0.8,1.7l-1.5,2.8h-1.4L20.1,15.8z"
                ></path>
              </g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M15,21.1l-2.5-4.4h-1.8v4.4H9.4V10.9h3.2c2.1,0,3.6,0.7,3.6,2.9c0,1.6-0.9,2.5-2.3,2.9l2.6,4.5H15z M10.7,15.7h1.7c1.6,0,2.5-0.6,2.5-2c0-1.4-0.9-1.8-2.5-1.8h-1.7V15.7z"
                ></path>
              </g>
            </g>
          </g>
        ) : gate1.name === 'ry' ? (
          <g type="ry">
            <g>
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M20.1,17.1L17,10.9h1.4l1.3,2.9c0.3,0.8,0.6,1.5,1,2.2h0.1c0.4-0.8,0.7-1.5,1-2.2l1.3-2.9h1.3l-3.1,6.3v4h-1.3V17.1z"
                ></path>
              </g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M15.2,21.1l-2.5-4.4h-1.8v4.4H9.5V10.9h3.2c2.1,0,3.6,0.7,3.6,2.9c0,1.6-0.9,2.5-2.3,2.9l2.6,4.5H15.2zM10.8,15.7h1.7c1.6,0,2.5-0.6,2.5-2c0-1.4-0.9-1.8-2.5-1.8h-1.7V15.7z"
                ></path>
              </g>
            </g>
          </g>
        ) : gate1.name === 'cx' && gate1.connector ? (
          <g>
            {/* <g>
              <line
                x1="16"
                y1={16 - gate1.line * 40}
                x2="16"
                y2="16"
                strokeWidth="1.25"
                stroke=" rgb(0, 45, 156)"
              ></line>
            </g> */}
            <g>
              <circle
                cx="16"
                cy="16"
                r="16"
                fill="rgb(0, 45, 156)"
                strokeWidth="0"
                stroke="transparent"
                paintOrder="stroke"
              ></circle>
              <line
                x1="8"
                y1="16"
                x2="24"
                y2="16"
                strokeWidth="1.25"
                stroke=" rgb(255, 255, 255)"
              ></line>
              <line
                x1="16"
                y1="8"
                x2="16"
                y2="24"
                strokeWidth="1.25"
                stroke=" rgb(255, 255, 255)"
              ></line>
            </g>
          </g>
        ) : gate1.name === 'x' ? (
          <g>
            <circle
              cx="16"
              cy="16"
              r="16"
              fill="rgb(0, 45, 156)"
              strokeWidth="0"
              stroke="transparent"
              paintOrder="stroke"
            ></circle>
            <line
              x1="8"
              y1="16"
              x2="24"
              y2="16"
              strokeWidth="1.25"
              stroke=" rgb(255, 255, 255)"
            ></line>
            <line
              x1="16"
              y1="8"
              x2="16"
              y2="24"
              strokeWidth="1.25"
              stroke=" rgb(255, 255, 255)"
            ></line>
          </g>
        ) : gate1.name === 'ncnot' && gate1.isConnector ? (
          <g>
            <circle
              cx="16"
              cy="16"
              r="16"
              fill="rgb(0, 45, 156)"
              strokeWidth="0"
              stroke="transparent"
              paintOrder="stroke"
            ></circle>
            <line
              x1="8"
              y1="16"
              x2="24"
              y2="16"
              strokeWidth="1.25"
              stroke=" rgb(255, 255, 255)"
            ></line>
            <line
              x1="16"
              y1="8"
              x2="16"
              y2="24"
              strokeWidth="1.25"
              stroke=" rgb(255, 255, 255)"
            ></line>
          </g>
        ) : gate1.name === 'cx' && gate1.connector === 0 ? (
          <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
        ) : gate1.name === 'cz' ? (
          <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
        ) : gate1.name === 'ncnot' && !gate1.isConnector ? (
          <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
        ) : gate1.name === 'rz' ? (
          <g>
            <g>
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>
              <circle
                cx="16"
                cy="16"
                r="4"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke=" #fff"
                paintOrder="stroke"
              ></circle>
              <line
                x1="24"
                y1="8"
                x2="8"
                y2="24"
                strokeWidth="1.25"
                stroke="#fff"
              ></line>
            </g>
          </g>
        ) : gate1.name === 'crx' ? (
          <g>
            <g>
              <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
              <line
                x1="16"
                y1="56"
                x2="16"
                y2="16"
                strokeWidth="1.25"
                stroke=" rgb(0, 45, 156)"
              ></line>
            </g>
            <g>
              <circle
                cx="16"
                cy="56"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>
              <g>
                <path
                  transform="translate(0,40)"
                  fill="#FFFFFF"
                  d="M20.1,15.8l-2.8-5h1.4l1.4,2.6c0.3,0.5,0.5,0.9,0.8,1.5H21c0.3-0.6,0.5-1,0.7-1.5l1.4-2.6h1.4l-2.8,5l3,5.2h-1.4l-1.5-2.8c-0.3-0.5-0.5-1-0.9-1.7h-0.1c-0.3,0.6-0.6,1.1-0.8,1.7l-1.5,2.8h-1.4L20.1,15.8z"
                ></path>
              </g>
              <g>
                <path
                  transform="translate(0,40)"
                  fill="rgb(255, 255, 255)"
                  d="M15,21.1l-2.5-4.4h-1.8v4.4H9.4V10.9h3.2c2.1,0,3.6,0.7,3.6,2.9c0,1.6-0.9,2.5-2.3,2.9l2.6,4.5H15z M10.7,15.7h1.7c1.6,0,2.5-0.6,2.5-2c0-1.4-0.9-1.8-2.5-1.8h-1.7V15.7z"
                ></path>
              </g>
            </g>
          </g>
        ) : gate1.name === 'swap' ? (
          <g>
            <g>
              <line
                x1="8"
                y1="8"
                x2="24"
                y2="24"
                strokeWidth="1.25"
                stroke="rgb(0, 45, 156)"
              ></line>
              <line
                x1="24"
                y1="8"
                x2="8"
                y2="24"
                strokeWidth="1.25"
                stroke="rgb(0, 45, 156)"
              ></line>
            </g>
            {/* <g>
              <line
                x1="16"
                y1="56"
                x2="16"
                y2="16"
                strokeWidth="1.25"
                stroke=" rgb(0, 45, 156)"
              ></line>
            </g>
            <g>
              <line
                x1="8"
                y1="48"
                x2="24"
                y2="64"
                strokeWidth="1.25"
                stroke="rgb(0, 45, 156)"
              ></line>
              <line
                x1="24"
                y1="48"
                x2="8"
                y2="64"
                strokeWidth="1.25"
                stroke="rgb(0, 45, 156)"
              ></line>
            </g> */}
          </g>
        ) : gate1.name === 'crz' ? (
          <g>
            <g>
              <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
              <line
                x1="16"
                y1="56"
                x2="16"
                y2="16"
                strokeWidth="1.25"
                stroke=" rgb(0, 45, 156)"
              ></line>
            </g>
            <g>
              <circle
                cx="16"
                cy="56"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>

              <text
                x="16"
                y="56"
                dy=".3em"
                fontSize="14"
                fontWeight="400"
                textAnchor="middle"
                fill="rgb(255, 255, 255)"
              >
                RZ
              </text>
            </g>
          </g>
        ) : gate1.name === 'cry' && gate1.connector === 0 ? (
          <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
        ) : gate1.name === 'cry' && gate1.connector > 0 ? (
          <g>
            {/* <circle cx="16" cy="16" r="4" fill="rgb(0, 45, 156)"></circle>
            <line
              x1="16"
              y1="56"
              x2="16"
              y2="16"
              strokeWidth="1.25"
              stroke=" rgb(0, 45, 156)"
            ></line> */}

            <circle
              cx="16"
              cy="16"
              r="14"
              fill="rgb(0, 45, 156)"
              strokeWidth="2"
              stroke="rgb(0, 45, 156)"
              paintOrder="stroke"
            ></circle>
            <g>
              <path
                // transform="translate(0,40)"
                fill="#FFFFFF"
                d="M20.1,17.1L17,10.9h1.4l1.3,2.9c0.3,0.8,0.6,1.5,1,2.2h0.1c0.4-0.8,0.7-1.5,1-2.2l1.3-2.9h1.3l-3.1,6.3v4h-1.3V17.1z"
              ></path>
            </g>
            <g>
              <path
                // transform="translate(0,40)"
                fill="#FFFFFF"
                d="M15.2,21.1l-2.5-4.4h-1.8v4.4H9.5V10.9h3.2c2.1,0,3.6,0.7,3.6,2.9c0,1.6-0.9,2.5-2.3,2.9l2.6,4.5H15.2zM10.8,15.7h1.7c1.6,0,2.5-0.6,2.5-2c0-1.4-0.9-1.8-2.5-1.8h-1.7V15.7z"
              ></path>
            </g>
          </g>
        ) : gate1.name === 'ncphase' ? (
          <g>
            <g>
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>
              <circle
                cx="16"
                cy="16"
                r="4"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke=" #fff"
                paintOrder="stroke"
              ></circle>
              <line
                x1="24"
                y1="8"
                x2="8"
                y2="24"
                strokeWidth="1.25"
                stroke="#fff"
              ></line>
            </g>
            {/* <g>
              <circle
                cx="16"
                cy="56"
                r="14"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke="rgb(0, 45, 156)"
                paintOrder="stroke"
              ></circle>
              <circle
                cx="16"
                cy="56"
                r="4"
                fill="rgb(0, 45, 156)"
                strokeWidth="2"
                stroke=" #fff"
                paintOrder="stroke"
              ></circle>
              <line
                x1="24"
                y1="48"
                x2="8"
                y2="64"
                strokeWidth="1.25"
                stroke="#fff"
              ></line>
            </g> */}
            {/* <g>
              <line
                x1="16"
                y1="56"
                x2="16"
                y2="16"
                strokeWidth="1.25"
                stroke=" rgb(0, 45, 156)"
              ></line>
            </g> */}
          </g>
        ) : (
          ''
        )}
      </g>
    </>
  )
}
