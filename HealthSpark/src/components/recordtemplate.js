import React from 'react'
import { NavLink } from 'react-router-dom'

const Recordtemplate = () => {
  return (
    <div className='recordTemplateclass'>
        <b>Age:</b> 25 <br/>
        <b>Height:</b> 163 <br/>
        <b>Weight:</b> 72 <br/>
        Symptoms: Cough
        <NavLink to='/audio'><button>Audio Call</button></NavLink>
        <NavLink to='/video'><button>Video Call</button></NavLink>
        <NavLink to='/chat'><button>Chat</button></NavLink>
    </div>
  )
}

export default Recordtemplate