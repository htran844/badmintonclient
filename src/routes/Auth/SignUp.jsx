import React from 'react'
import { Register } from '../../firebase/auth'

export default function SignUp() {
  
  return (
    <div>
      <div>signup</div>
      <button className="btn" onClick={()=>{Register("hoangpro2@gmail.com", "123456")}}>Button</button>
    </div>
  )
}
