import React from 'react'
import Evom from '../Evmo'
export default function EvomRow(props) {
  let rowEvomData = []
  if (props.evomData) {
    rowEvomData = props.evomData
  }
  // console.log(props, 'row')
  return (
    <g transform={`translate(0,${props.index * 26 + 26})`}>
      {rowEvomData.map((eData, index) => (
        <Evom eData={eData} key={index} index={index}></Evom>
      ))}
    </g>
  )
}
