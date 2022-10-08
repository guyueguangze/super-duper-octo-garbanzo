import React from 'react'
import styles from './index.module.scss'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'
export default function Editor() {
  return (
    <div className={styles.root}>
      <AceEditor
        mode="java"
        theme="github"
        name="UNIQUE_ID_OF_DIV"
      />
      ,
    </div>
  )
}
