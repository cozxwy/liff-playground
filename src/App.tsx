import React from 'react'
import liff from '@line/liff'
import styles from './App.module.css'
import Header from './components/Header'
import Snippet from './components/Snippet'
import Snippet2 from './components/Snippet2'
import Input from './components/Input'
import Input2 from './components/Input2'
import { FilterContext, FilterTypes } from './Context'
import qrCode from './qr-code.png'


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

{!isLoggedIn ? (
          <Snippet
            apiName="liff.login()"
            version="2.0"
            docUrl="https://developers.line.biz/en/reference/liff/#login"
            skipAutoRun={true}
            runner={async () => {
              return liff.login()
            }}
          />
        ) : (
          <Snippet
            apiName="liff.logout()"
            version="2.0"
            docUrl="https://developers.line.biz/en/reference/liff/#logout"
            skipAutoRun={true}
            hideResponse={true}
            runner={async () => {
              // reload after logout.
              setTimeout(() => {
                location.reload()
              }, 1000)
              return liff.logout()
            }}
          />
        )}

        
      <Header />
      <div className={styles.container}>
      

      
        <form  action="https://us-central1-jc-smart-d1a99.cloudfunctions.net/formbrick" method="post">
            <Input2
            label="ชื่อ - นามสกุล"
            helpText="Run this API to get the response"
            placeHolder="กรอกข้อมูล"
            name="fname"
            readonly={false}
            />

          <Input2
            label="เบอร์ต่อต่อ"
            helpText="Run this API to get the response"
            placeHolder="กรอกข้อมูล"
            name="phone"
            readonly={false}
            />


          <Snippet2
          apiName="liff.getContext()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-context"
          runner={async () => {
            let a  =JSON.stringify(await liff.getContext()?.userId, null, 4)
            return a.toString().slice(1, -1);
          }}
        />



            <button type="submit">Submit</button>

          </form>
       

          


      </div>
    </FilterContext.Provider>
  )
}


export default App
