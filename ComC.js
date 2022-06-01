import React, { useContext } from 'react'
import {BioData}  from './ComA'

const ComC = ({name}) => {
    const channelName = useContext(BioData);
  return (
    <div>
        <h1>Hello ComC {channelName} </h1>
    </div>
  )
}

export default ComC
