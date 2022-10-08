import React, { useState, useEffect } from 'react'
import Gate from '../Gate'
import styles from './index.module.scss'
export default function GateMenu(props) {
  const type = ['h', 'rx', 'ry', 'cx', 'rz', 'crx', 'cry', 'swap', 'crz']
  const onMouseDown = (e) => {
    e.preventDefault()
    // 获取点击的svg元素
  const currentSvgNode = e.nativeEvent.path.find(
    (dom) => dom.className === 'draggable'
  ).firstChild
    if (currentSvgNode.getAttribute('type')) {
      props.setGatesType(currentSvgNode.getAttribute('type'))
      e.stopPropagation()
      // 实现拖拽效果创建一个新元素 先监听鼠标的位置 再修改该元素top left值
      let span = document.createElement('span')
      span.style.width = '32px'
      span.style.height = '32px'
      span.style.position = 'fixed'
      span.style.cursor = 'pointer'
      span.style.display = 'inline-block'
      span.style.backgroundColor = 'green'
      span.style.display = 'none'
      span.draggable = false
      // 将svg转换成图片append进刚才创建的元素中
      let node = currentSvgNode
      let serializer = new XMLSerializer()
      let source =
        '<?xml version="1.0" standalone="no"?>\r\n' +
        serializer.serializeToString(node)
      let img = document.createElement('img')
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)
      img.draggable = false
      span.appendChild(img)
    
      document.querySelector('.left').appendChild(span)
      document.addEventListener('mousemove', function (e) {
        span.style.left = `${e.pageX - 16}px`
        span.style.top = `${e.pageY - 16}px`
        span.style.display = 'block'
      })
      document.addEventListener('mouseup', function (e) {
        if (span.parentNode) {
          props.setGatesType('')
          span.parentNode.removeChild(span)
        }
      })
    }
  }

  return (
    <div
      draggable={false}
      style={{ height: '100%', width: '100%' }}
      className={styles.root}
    >
      <div draggable={false} className="drag">
        {type.map((item, index) => (
          <span
            type={item}
            className="draggable"
            key={item}
            onMouseDown={onMouseDown}
          >
            <svg
              className="svg"
              type={item}
              cursor="grap"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              draggable={false}
              width={32}
              height={32}
            >
              <Gate type={item}></Gate>
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
