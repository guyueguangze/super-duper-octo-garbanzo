import React, { useState, useContext, useEffect } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'
import { Button, Select } from 'antd'
import styles from './index.module.scss'
import QCEngine from '../../../../simulator/MyQCEngine'
import axios from 'axios'
import { qcContext } from '../../qcContext'

export default function Editor() {
  const { setQc } = useContext(qcContext)
  const [code, setCode] = useState('')
  const aceOnChange = (coding) => {
    setCode(coding)
  }
  const selectOnChange = (value) => {
    // 自定义
    if (value === 'about:black') {
      setCode('//please')
    } else {
      axios
        .get('/js/' + value + '.js')
        .then((res) => {
          setCode(res.data)
        })
        .catch((error) => {
          setCode('Not Found')
        })
    }
  }

  const optionList = [
    {
      value: 'engine_gates debug',
    },
    {
      value: 'Quantum Conditional Execution',
    },
    {
      value: 'Gate Teleportation',
    },
    {
      value: "Simon's Algorithm",
    },
    {
      value: 'Phase estimation',
    },
    {
      value: "Grover's Algorithm",
    },
    {
      value: 'Adding two quantum intergers',
    },
    {
      value: 'Entangled Qubits',
    },
    {
      value: 'Bernstein-Vazirani Algorithm',
    },
    {
      value: 'Quantum Fourier Transform',
    },
    {
      value: 'Deutsch-Jozsa Algorithm',
    },
    {
      value: 'Markov Process',
    },
  ]
  // /*'user_study', 'into_evolution','case 1', 'bell_state', 'all gates', 'ex7-7', 'ex7-1', 'Markov Process',*/ 'about:blank',

  // case的列表，public\js中需要存对应的文件

  // 运行
  const runProgram = (sample) => {
    let noBug = false
    let qc = new QCEngine()

    const { qint } = qc
    // TODO: 这些也要写在文档里面
    const {
      cos,
      sin,
      round,
      pi,
      complex,
      create,
      all,
      max,
      sparse,
      acos,
      asin,
      sqrt,
    } = require('mathjs')
    const {
      pow2,
      binary,
      binary2qubit1,
      range,
      toPI,
      qubit12binary,
      unique,
      sum,
      alt_tensor,
      calibrate,
      getExp,
      linear_entropy,
      binary2int,
      average,
      spec,
    } = require('../../../../simulator/CommonFunction')
    const {
      tensor,
      groundState,
      tensorState,
    } = require('../../../../simulator/MatrixOperation')

    //bind function
    let gates = [
      'cx',
      'cy',
      'cz',
      'ch',
      'csrn',
      'cr2',
      'cr4',
      'cr8',
      'crx',
      'cry',
      'crz',
      'cu1',
      'cu2',
      'cu3',
      'cs',
      'ct',
      'csdg',
      'ctdg',
      'ccx',
      'id',
      'x',
      'y',
      'z',
      'h',
      'srn',
      'srndg',
      'r2',
      'r4',
      'r8',
      's',
      't',
      'sdg',
      'tdg',
      'rx',
      'ry',
      'rz',
      'u1',
      'u2',
      'u3',
      'swap',
      'iswap',
      'srswap',
      'xy',
      'ms',
      'yy',
      'zz',
      'had',
      'hadamard',
      'not',
      'reset',
      'cnot',
      'phase',
      'startlabel',
      'endlabel',
      'ccnot',
      'ncnot',
      'ncphase',
      'qprint',
    ]
    var cx,
      cy,
      cz,
      ch,
      csrn,
      cr2,
      cr4,
      cr8,
      crx,
      cry,
      crz,
      cu1,
      cu2,
      cu3,
      cs,
      ct,
      csdg,
      ctdg,
      ccx,
      id,
      x,
      y,
      z,
      h,
      srn,
      srndg,
      r2,
      r4,
      r8,
      s,
      t,
      sdg,
      tdg,
      rx,
      ry,
      rz,
      u1,
      u2,
      u3,
      swap,
      iswap,
      srswap,
      xy,
      ms,
      yy,
      zz,
      had,
      hadamard,
      not,
      reset,
      cnot,
      phase,
      startlabel,
      endlabel,
      ccnot,
      ncnot,
      ncphase,
      qprint
    //let gates =['had']
    let bind_str = 'gate_name = qc.gate_name.bind(qc);\n '
    let bind_str_all = ''
    for (let ind = 0; ind < gates.length; ind++) {
      let gate = gates[ind]
      bind_str_all += bind_str.replace(/gate_name/g, gate)
    }

    eval(bind_str_all)

    try {
      eval(code)
      //  consoleContent(true, qc.console_data)
      noBug = true
    } catch (error) {
      //  consoleContent(false, error.message)
      noBug = false
    }
    // 模拟器
    if (noBug) {
      qc.runCircuit()
      // setQc(qc.circuit.gates)
      setQc(qc)
      // console.log(qc.circuit.gates,55)
      // console.log(qc)
    }
  }
  // 多个选择框
  const { Option } = Select
  return (
    <div className={styles.root}>
      <div className="operation">
        <Button
          onClick={runProgram}
          type="primary"
          // onClick={props.runProgram}
          style={{ background: '#649FAE' }}
        >
          Run Program
        </Button>
        <Select
          onChange={selectOnChange}
          defaultValue={optionList[0]}
          style={{ width: '35%', marginLeft: '10px' }}
        >
          {optionList.map((item) => (
            <Option value={item.value} key={item.value}>
              {item.value}
            </Option>
          ))}
        </Select>
      </div>
      <AceEditor
        mode="javascript"
        theme="github"
        name="ACE-EDITOR"
        width="100%"
        height="100%"
        onChange={aceOnChange}
        value={code}
        showGutter={false}
        highlightActiveLine={false}
        setOptions={{
          wrap: true,
          enableLiveAutocompletion: true,
        }}
      />
    </div>
  )
}
