import React from 'react'
import Recordtemplate from './recordtemplate'

const Requests = () => {
  return (
    <div>
        <div className='requesthead'><h1>REQUESTS</h1></div>
        <div className='requestList'>
            <div className='eachRecord'><Recordtemplate/></div>
            <div className='eachRecord'><Recordtemplate/></div>
            <div className='eachRecord'><Recordtemplate/></div>
        </div>
    </div>
  )
}

export default Requests