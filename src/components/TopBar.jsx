import React, { useState } from 'react'
import nav from './nav.module.css'

const TopBar = () => {

  const [fl, setFl] = useState(true)

  function handleMouse(){
    setFl(!fl)    
  }

  return (
    <div className={nav.topbar} onMouseEnter={handleMouse}>
      {
        fl ? `Buy Brand New cars!!!` : `Yahan zeher khane ka bhi paisa nahi hai`
      }
    </div>
  )
}

export default TopBar