import React, { useContext, useState } from 'react'
import { qcContext } from '../../qcContext'
import Topological from './components/Topological'
import styles from './index.module.scss'
export default function Evolution() {
  // const [topologicalData, setTopologicalData] = useState([])
  let topologicalData = [0]
  const { qc } = useContext(qcContext)
  if (qc.circuit) {
    console.log(qc)
    const { labels } = qc
    topologicalData = []
    labels.forEach((item) => {
      let inputData = qc.getInputState(item.id)
      let outputData = qc.getOutputState(item.id)
      let getEvoMatrixData = qc.getEvoMatrix(item.id)
      topologicalData.push({ inputData, outputData, getEvoMatrixData })
    })
    // setTopologicalData(TopologicalData)
    console.log(topologicalData, 333)
  }
  return (
    <div
      style={{
        overflow: 'hidden',
        overflowY: 'scroll',
        overflowX: 'scroll',
        height:'100%',
        width:'100%'
      }}
    >
      {topologicalData.map((topoData, index) => (
        <Topological topoData={topoData} key={index}></Topological>
      ))}
    </div>
  )
}
