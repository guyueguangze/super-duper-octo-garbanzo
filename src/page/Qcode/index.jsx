import React, { useState } from 'react'
import Editor from './components/Editor'
import Circuit from './components/Circuit'
import Evolution from './components/Evolution'
import Variable from './components/Variable'
import styles from './index.module.scss'

import { qcContext } from './qcContext'

export default function Qcode() {
  const [qc, setQc] = useState({})
  // qc.getOutputState()
  // console.log(storeD,55)
  

  return (
    <div className={styles.root}>
      <div className="left">
        <qcContext.Provider value={{ qc, setQc }}>
          <Editor></Editor>
        </qcContext.Provider>
      </div>
      <div className="right">
        <div className="circuit">
          <qcContext.Provider value={{ qc, setQc }}>
            <Circuit></Circuit>
          </qcContext.Provider>
        </div>
        <div className="down-right">
          <div className="evolution">
            <qcContext.Provider value={{ qc, setQc }}>
              <Evolution></Evolution>
            </qcContext.Provider>
          </div>
          <div className="variable">
            <qcContext.Provider value={{ qc, setQc }}>
              <Variable></Variable>
            </qcContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
