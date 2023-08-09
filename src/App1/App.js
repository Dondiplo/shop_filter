

import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {

  const jokel = jokesData.map(joke => {
    return <Joke setup={joke.setup} punch={joke.punchline}/>
  })
   
    return (
      <div>
    {jokel}//
      </div>
  )
}


