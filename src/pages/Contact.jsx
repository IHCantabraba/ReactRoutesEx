import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { name } = useParams()
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <h4>You are at: {name}</h4>
    </div>
  )
}

export default Contact
