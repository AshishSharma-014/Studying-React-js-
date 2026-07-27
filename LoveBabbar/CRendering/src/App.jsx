import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LougoutBtn'
function App() {

const [isLoggedIn, setLoggedIn] = useState(false);

  // if (isLoggedIn){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }


  // using ternary operator

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // using logical operator 

  // return (
  //   <div>
  //     <h1>Hey everyone, What's up!</h1>
  //     {isLoggedIn && <LogoutBtn/>}
  //   </div>
  // )


  // early return 

  if (!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }




}

export default App
