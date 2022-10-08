import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function Gate(props) {
  const G = useRef()
  useEffect(() => {
    d3.select(G.current).attr(
      'transform',
      `translate(${
        props.x ? props.x + props.index * 40 : 0
      }, ${props.y ? props.y : 0})`
    )
  })
  return (
    <>
      <g ref={G}>
        {props.type === 'h' ? (
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
        ) : props.type === 'rx' ? (
          <g type="rx">
            <g>
              <rect
                y="0"
                type="rx"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
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
        ) : props.type === 'ry' ? (
          <g type="ry">
            <g>
              <rect
                y="0"
                type="ry"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
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
        ) : props.type === 'cx' ? (
          <g>
            <g>
              <rect
                y="0"
                type="cx"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g>
              <circle cx="16" cy="8" r="2" fill="rgb(255, 255, 255)"></circle>
            </g>
            <g>
              <circle
                cx="16"
                cy="20.666666666666668"
                r="5.333333333333333"
                stroke="rgb(255, 255, 255)"
                fill="none"
                strokeWidth="1.25"
              ></circle>
            </g>
            <g>
              <line
                x1="10.666666666666668"
                x2="21.333333333333332"
                y1="20.666666666666668"
                y2="20.666666666666668"
                stroke="rgb(255, 255, 255)"
                strokeWidth="1"
              ></line>
            </g>
            <g>
              <line
                x1="16"
                x2="16"
                y1="6"
                y2="26"
                stroke="rgb(255, 255, 255)"
                strokeWidth="1.25"
              ></line>
            </g>
          </g>
        ) : props.type === 'rz' ? (
          <g>
            <g>
              <rect
                y="0"
                type="rz"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M17.5,20.4l5.4-8.4H18v-1.1h6.5v0.8L19.1,20h5.5v1.1h-7.1V20.4z"
              ></path>
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M15.1,21.1l-2.5-4.4h-1.8v4.4H9.4V10.9h3.2c2.1,0,3.6,0.7,3.6,2.9c0,1.6-0.9,2.5-2.3,2.9l2.6,4.5H15.1zM10.7,15.7h1.7c1.6,0,2.5-0.6,2.5-2c0-1.4-0.9-1.8-2.5-1.8h-1.7V15.7z"
              ></path>
            </g>
          </g>
        ) : props.type === 'crx' ? (
          <g>
            <g>
              <rect
                y="0"
                type="crx"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g type="crx">
              <text
                type="crx"
                fill="#fff"
                x="16"
                y="16"
                textAnchor="middle"
                dy=".3em"
              >
                crx
              </text>
            </g>
          </g>
        ) : props.type === 'cry' ? (
          <g>
            <g>
              <rect
                y="0"
                type="cry"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g>
              <text
                type="cry"
                fill="#fff"
                x="16"
                y="16"
                textAnchor="middle"
                dy=".3em"
              >
                cry
              </text>
            </g>
          </g>
        ) : props.type === 'swap' ? (
          <g>
            <g>
              <rect
                y="0"
                type="swap"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g>
              <g transform="translate(16, 9.2)">
                <line
                  x1="-3.2"
                  y1="-3.2"
                  x2="3.2"
                  y2="3.2"
                  stroke="rgb(255, 255, 255)"
                  strokeWidth="1.25"
                ></line>
                <line
                  x1="3.2"
                  y1="-3.2"
                  x2="-3.2"
                  y2="3.2"
                  stroke="rgb(255, 255, 255)"
                  strokeWidth="1.25"
                ></line>
              </g>
              <g transform="translate(16, 22.8)">
                <line
                  x1="-3.2"
                  y1="-3.2"
                  x2="3.2"
                  y2="3.2"
                  stroke="rgb(255, 255, 255)"
                  strokeWidth="1.25"
                ></line>
                <line
                  x1="3.2"
                  y1="-3.2"
                  x2="-3.2"
                  y2="3.2"
                  stroke="rgb(255, 255, 255)"
                  strokeWidth="1.25"
                ></line>
              </g>
              <g>
                <line
                  x1="16"
                  x2="16"
                  y1="9.2"
                  y2="22.8"
                  stroke="rgb(255, 255, 255)"
                  strokeWidth="1.25"
                ></line>
              </g>
            </g>
          </g>
        ) : props.type === 'crz' ? (
          <g>
            <g>
              <rect
                y="0"
                type="crz"
                fill="rgb(0, 45, 160)"
                width="32"
                height="32"
              ></rect>
            </g>
            <g>
              <text
                type="crz"
                fill="#fff"
                x="16"
                y="16"
                textAnchor="middle"
                dy=".3em"
              >
                crz
              </text>
            </g>
          </g>
        ) : (
          ''
        )}
      </g>
    </>
  )
}
