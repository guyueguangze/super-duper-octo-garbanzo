import React from 'react'
import OutputRect from './components/OutputRect'
export default function Output(props) {
    // console.log(props, 'output')
    let basesData =[]
    if (props.outputData){
      basesData = props.outputData.bases
    }
      return (
        // <g></g>
        <g transform={`translate(${basesData.length * 26 + 10},90)`}>
          {/* <rect width={32} height={32} fill="green"></rect> */}
          {basesData.map((basesData, index) => (
            <OutputRect
              basesData={basesData}
              key={index}
              index={index}
            ></OutputRect>
          ))}
        </g>
      )
}
