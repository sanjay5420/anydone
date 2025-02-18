import Navbar from '@/components/navbar/page'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}

export default layout
