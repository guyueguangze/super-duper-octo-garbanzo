import React, { useContext, useState } from 'react'
import styles from './index.module.scss'
import { qcContext } from '../../qcContext'
import Qubit from './components/Qubit'
export default function Circuit() {
  const { qc } = useContext(qcContext)
  let svgWidth = 1110
  let svgHeight = 500
  let gates1 = []
  let gateLine = []
  // 对数据进行处理 以便更好的画图 
  if (qc.circuit !== undefined) {
    gates1 = qc.circuit.gates
    svgWidth = gates1[0].length * 40 + 200
    svgHeight = gates1.length * 40 + 200
    for (let i = 0; i < gates1.length; i++) {
      for (let j = 0; j < gates1[1].length; j++) {
        if (gates1[i][j]) {
          const operation = gates1[i][j]
          // operation.x = this.operationX(j)
          operation.line = i
          operation.col = j
        }
      }
    }
    // console.log(gates1, 888)
    // console.log(qc.circuit.gates, 777)
    let aaa = gates1.flat()
    let bbb = aaa.filter((item) => item !== null)
    const findDuplicates = (aaa) => {
      const output = []
      Object.values(
        aaa.reduce((res, obj) => {
          let key = obj.id
          res[key] = [...(res[key] || []), { ...obj }]
          return res
        }, {})
      ).forEach((arr) => {
        if (arr.length > 1) {
          output.push(...arr)
        }
      })
      return output
    }
    const ccc = findDuplicates(bbb)
    ccc.forEach((item) => {
      gates1[item.line][item.col].isManyQubit = true
    })
    const arrayTwo = Object.values(
      ccc.reduce((res, item) => {
        res[item.id] ? res[item.id].push(item) : (res[item.id] = [item])
        return res
      }, {})
    )
    // console.log(arrayTwo, 888)
    let connectorMaxgate = []
    arrayTwo.forEach((item) => {
      let max = item[0]
      for (var i = 1; i < item.length; i++) {
        let cur = item[i]
        // cur > max ? (max = cur) : null
        if (cur.connector > max.connector) {
          max = cur
        }
      }
      connectorMaxgate.push(max)
      // console.log(max, 9999)
    })
    // console.log(connectorMaxgate, 999)

    connectorMaxgate.forEach((item) => {
      // console.log(item.col,item.line);
      gates1[item.line][item.col].isConnector = true
    })
    // console.log(gates1,'成功了吗');
    // // console.log(arrayTwo,888)
    // console.log(ccc, 66)
    var map = {}
    // var gateLine = []
    for (var i = 0; i < ccc.length; i++) {
      var ai = ccc[i]
      if (!map[ai.id]) {
        gateLine.push({
          id: ai.id,
          col: ai.col,
          name: ai.name,
          options: ai.options,
          x: ai.x,
          lineArr: [{ line: ai.line }],
        })
        map[ai.id] = ai.id
      } else {
        for (var j = 0; j < gateLine.length; j++) {
          var dj = gateLine[j]
          if (dj.id == ai.id) {
            dj.lineArr.push({ line: ai.line })
            break
          }
        }
      }
    }
  }

  // console.log(dest, 666)
  return (
    <svg style={{ overflow: 'hidden' }} width={svgWidth>1100 ?svgWidth:1100} height={svgHeight>500?svgHeight:500}>
      <rect
        stroke="#C4C4C4"
        width={'100%'}
        height={'100%'}
        fill="transparent"
      ></rect>
      {gates1.map((qubit, index) => (
        <g
          key={index}
          transform={`translate(60,${20 + index * 40 ? index * 40 : 0})`}
        >
          <line
            className="qubit"
            strokeWidth="2"
            x1="30"
            y1="40"
            x2={qubit.length * 40 + 100 > 1060 ? qubit.length * 40 + 50 : 1060}
            y2="40"
            data-dis="0"
            stroke="#C4C4C4"
          ></line>
        </g>
      ))}
      {gateLine.map((item, index) => (
        <g key={index}>
          <line
            x1={16 + 40 * item.col + 95}
            y1={item.lineArr[0].line * 40 + 40}
            x2={16 + 40 * item.col + 95}
            y2={item.lineArr[item.lineArr.length - 1].line * 40 + 40}
            strokeWidth="1.25"
            stroke=" rgb(0, 45, 156)"
          ></line>
        </g>
      ))}
      {gates1.map((qubit, index) => (
        <Qubit key={index} index={index} gates={qubit}></Qubit>
      ))}
    </svg>
  )
}
