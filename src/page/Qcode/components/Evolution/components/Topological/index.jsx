import React from 'react'
import Input from '../Input'
import Output from '../Output'
import Evomatrix from '../Evomatrix'
export default function Topological(props) {
  const { inputData, outputData, getEvoMatrixData } = { ...props.topoData }
  let svgWidth = 50
  if (props.topoData) {
    svgWidth = inputData.bases.length * 35 + 100
  }
  // console.log(
  //   inputData.bases.length,
  //   'length',
  //   outputData,
  //   getEvoMatrixData,
  //   999
  // )
  // const svgWidth = inputData ?.bases.length * 20+50 || 20
  return (
    <div
      className="Topological"
      style={{ with: '100%',textAlign:'center'  }}
    >
      <svg width={svgWidth} height={svgWidth}>
        <Input inputData={inputData}></Input>
        <Output outputData={outputData}></Output>
        <Evomatrix getEvoMatrixData={getEvoMatrixData}></Evomatrix>
      </svg>
    </div>
  )
}
