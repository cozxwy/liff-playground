import liff from '@line/liff'
import React from 'react'
import styles from './Header.module.css'
import Button from './Button'

export default function Header() {
  const openGitHub = () => {
    window.open(`https://github.com/line/liff-playground`, '_blank')
  }

  const openInApp = () => {
    window.open(
      `https://line.me/R/app/${import.meta.env.VITE_LIFF_ID}`,
      '_blank'
    )
  }

  return (
    !liff.isInClient() ? (<div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <a href='/'>
            <h1>สมัครสมาชิก JCMART</h1>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.gitHubButton}>
         
          </div>
     
        </div>
      </div>
    </div>) : <></>
  )
}
