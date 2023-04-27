import React from 'react'

import styles from './SubmitButton.module.css'

export default function SumitButton({ text }) {
  return (
    <div className={styles.form_control}>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}
