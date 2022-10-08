import React from 'react'
import EvomRow from './components/EvomRow'
import * as d3 from 'd3'

export default function Evomatrix(props) {
    // console.log(props, 'Evomatrix')
    let Evomatrix=[]
    if (props.getEvoMatrixData){
      Evomatrix = props.getEvoMatrixData
    }
      // console.log(Evomatrix, 'evomatrx')

      return (
        <g transform="translate(6,61)">
          {Evomatrix.map((evomData, index) => (
            <EvomRow evomData={evomData} key={index} index={index}></EvomRow>
          ))}
        </g>
      )
}
