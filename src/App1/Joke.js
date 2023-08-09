import React from 'react'
import "./App.css"

export default function Joke (props){

  return (
    <div>
    <h1 className='lala'>{props.setup}</h1>
    <p className='dada'>{props.punch}</p>
    </div>
  )
}

