import React from 'react'
import InputRect from './components/InputRect';
export default function Input(props) {
  // console.log(props, 'input');
  let bases =[]
  if (props.inputData) {
    bases = props.inputData.bases
  }
  // const {bases,vars}={...props.inputData}
  // console.log(props.inputData.bases, 7788)
  return (
    <g transform="translate(10,64)">
      {/* <rect width={32} height={32} fill="green"></rect> */}
      {bases.map((basesData, index) => (
        <InputRect basesData={basesData} key={index} index={index}></InputRect>
      ))}
    </g>
  )
}
