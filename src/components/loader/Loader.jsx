import React from 'react'
import { Ping } from '@uiball/loaders'


function Loader() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <Ping 
        size={500}
        speed={1.3} 
        color="black" 
        />
    </div>
  )
}

export default Loader