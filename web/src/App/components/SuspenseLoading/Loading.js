import React from 'react'
import styles from './styles.css'

export default function Loading(props) {
  const height = props.height || 200
  return <div className={styles.container} style={{height}} />
}
