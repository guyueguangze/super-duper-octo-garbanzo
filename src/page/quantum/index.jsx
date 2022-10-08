import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import styles from './index.module.scss'
import GateMenu from './components/GateMenu'
import Circuit from './components/Circuit'
import Editor from './components/Editor'
export default function Four() {
  const defaultCircuit = [
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  ]
  const [circuit, setCircuit] = useState(defaultCircuit)
  const [geteType, setGeteType] = useState('')
  const [coordinate, setcoordinate] = useState(null)
  

  // 获取拖拽元素的类型
  const setGatesType = (type) => {
    setGeteType(type)
  }
  // 获取拖拽位置的的y轴坐标
  const getDragCoordinate = (Y) => {
    setcoordinate(Y)
  }
  const onDragEnd = () => {
    if (coordinate && geteType) {
      let tmpCircuit = circuit
      if (coordinate <= 42) {
        let aaa = null
        tmpCircuit[0].some((gate, index) => {
          aaa = index
          return gate === null
        })
        tmpCircuit[0].splice(aaa, 1, geteType)
        aaa = null
      } else if (coordinate > 42 && coordinate <= 82) {
        console.log(1)
        let aaa = null
        tmpCircuit[1].some((gate, index) => {
          aaa = index
          return gate === null
        })
        tmpCircuit[1].splice(aaa, 1, geteType)
        aaa = null
      } else if (coordinate > 82) {
        let aaa = null
        tmpCircuit[2].some((gate, index) => {
          aaa = index
          return gate === null
        })
        tmpCircuit[2].splice(aaa, 1, geteType)
        aaa = null
      }
      setCircuit(tmpCircuit)
      setcoordinate(null)
      setGeteType('')
    }
  }

  return (
    <div className={styles.root}>
      <Row>
        <Col span={24}>
          <div className="header"></div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className="left">
            <GateMenu setGatesType={(type) => setGatesType(type)}></GateMenu>
          </div>
        </Col>
        <Col span={12}>
          <div onMouseUp={onDragEnd} id="circuit" className="center">
            <Circuit
              onMouseup={onDragEnd}
              getDragCoordinate={(Y) => getDragCoordinate(Y)}
              circuit={circuit}
            />
          </div>
        </Col>

        <Col span={6}>
          <div className="right">
            <Editor></Editor>
          </div>
        </Col>
      </Row>
    </div>
  )
}
