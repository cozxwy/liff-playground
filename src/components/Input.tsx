import React from 'react'
import styles from './Input.module.css'

interface InputProps {
  label?: string
  helpText?: string
  readonly?: boolean
  value: string
  placeHolder : string
  name: string
}

export default function Input({
  label,
  helpText,
  readonly,
  value,
  placeHolder,
  name,
}: InputProps) {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.frame}>
        <input autoComplete='off' className={styles.input} value={value} readOnly={readonly} placeholder={placeHolder} name={name} />
      </div>
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </>
  )
}
