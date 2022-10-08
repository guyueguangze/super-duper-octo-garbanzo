import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function Gate(props) {
  const onWidth = '32'
  const onHeight = '32'
  const H = useRef()
  const X = useRef()
  useEffect(() => {
    // H
    const HRect = d3
      .select(H.current)
      .attr('transform', `translate(${props.x + props.index * 40}, ${props.y})`)
      .append('rect')
      .attr('width', onWidth)
      .attr('height', onHeight)
      .attr('fill', 'orange')
      .attr('type', 'h')

    const HText = d3
      .select(H.current)
      .append('text')
      .text('H')
      .attr('x', 16)
      .attr('y', 16)
      .style('text-anchor', 'middle')
      .attr('dy', '.3em')
      .attr('type', 'h')

    // X
    const X1 = d3
      .select(X.current)
      .attr('transform', `translate(${props.x+props.index*40}, ${props.y})`)


    const XRect = X1.append('rect')
      .attr('width', onWidth)
      .attr('height', onHeight)
      .attr('fill', 'blue')
      .attr('type', 'x') 

    const XCircle = X1.append('circle')
      .attr('cx', 16)
      .attr('cy', 16)
      .attr('r', 8)
      .attr('fill', 'none')
      .attr('stroke-width', 1.25)
      .style('stroke', '#fff')
      .attr('type', 'x')

    const XLine1 = X1.append('line')
      .attr('x1', 8)
      .attr('x2', 24)
      .attr('y1', 16)
      .attr('y2', 16)
      .attr('stroke-width', 1.25)
      .style('stroke', '#fff')
    const XLine2 = X1.append('line')
      .attr('x1', 16)
      .attr('x2', 16)
      .attr('y1', 8)
      .attr('y2', 24)
      .attr('stroke-width', 1.25)
      .style('stroke', '#fff')
  }, [props.type])

  


  return (
    <>
      {/* <setGate></setGate> */}
      {props.type === 'h' ? (
        <g ref={H}>
          
        </g>
      ) : props.type === 'x' ? (
        <g type="h" ref={X}></g>
      ) : (
        ''
      )}
    </>
  )
}
