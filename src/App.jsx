import React from 'react'
import Card from './components/Card'
import User from './components/User'
function App() {
  const arr=[10,20,30,40]
  return (
    <div className='parents'>
      {arr.map(function(elem){
        return elem
      })}


    </div>
  )
}

export default App
