import React from 'react'
import liff from '@line/liff'
import styles from './App.module.css'
import Header from './components/Header'
import Snippet from './components/Snippet'
import Snippet2 from './components/Snippet2'
import Input from './components/Input'
import Input2 from './components/Input2'
import Input3 from './components/Input3'
import { FilterContext, FilterTypes } from './Context'
import qrCode from './qr-code.png'
import Button from './components/Button2'

const isMINI = new URLSearchParams(location.search).has('mini')
const filter = isMINI ? FilterTypes.MINI : FilterTypes.LIFF


function App() {
  let isLoggedIn = false
  try {
    isLoggedIn = liff.isLoggedIn()

    if(isLoggedIn){

    }
    else {
      liff.login()
  
    }
  
   


  } catch (e) {
    console.log(e)
  }



  
  return (
    <FilterContext.Provider value={filter}>




      <Header />

      <br/>
      <br/>
      <br/>
      <div className={styles.container}>
      

      
        <form  action="https://us-central1-jc-smart-d1a99.cloudfunctions.net/formbrick" method="post">
            <Input2
            label="ชื่อจริง - นามสกุล"
            //helpText="Run this API to get the response"
            placeHolder="กรอกข้อมูล"
            name="fname"
            readonly={false}
            />

          <Input3
            label="เบอร์ต่อต่อ"
            //helpText="Run this API to get the response"
            placeHolder="กรอกข้อมูล"
            name="phone"
            readonly={false}
            />


          <Snippet
          apiName="liff.getDecodedIDToken()"
          version="1.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-profile"
          runner={async () => {
            let a  = JSON.stringify(await liff.getDecodedIDToken()?.email, null, 4)
            return a.toString().slice(1, -1);
          }}
        />



          <Snippet2
          apiName="liff.getContext()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-context"
          runner={async () => {
            let a  = JSON.stringify(await liff.getContext()?.userId, null, 4)
            return a.toString().slice(1, -1);
          }}
          />


              
            <Button variant="primary"
                size="S"
                onClick={() => {
                  
                }}>
                  
                  ลงทะเบียน</Button>

          </form>
       

          


      </div>
    </FilterContext.Provider>
  )
}


export default App
