import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary'
  appearance?: 'outlined'
  size: 'S'
  typeB: 'submit'
  onClick: () => void
  children: React.ReactNode
}

export default function Button({ appearance, onClick, children , typeB}: ButtonProps) {
  return (
    <button
      className={[styles.button, appearance && styles[appearance]].join(' ')}
      onClick={onClick}
      type={typeB}>
      {children}
    </button>
  )
}
