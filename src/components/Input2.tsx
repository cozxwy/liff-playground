import React from 'react'
import styles from './Input.module.css'

interface InputProps {
  label?: string
  helpText?: string
  readonly?: boolean
  placeHolder : string
  name: string
}

export default function Input({
  label,
  helpText,
  readonly,
  placeHolder,
  name,
}: InputProps) {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.frame}>
        <input autoComplete='off' className={styles.input}  readOnly={readonly} placeholder={placeHolder} name={name} required title="กรุณาใส่ชื่อและนามสกุล" />
      </div>
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </>
  )
}
