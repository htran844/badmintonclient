import React from 'react'
import { Outlet } from 'react-router-dom'
import { AiOutlineBars } from "react-icons/ai";

export default function ProductLayout() {
  return (
    <div className='flex-1 flex-row'>
     product layout
     <Outlet/>
    </div>
  )
}
