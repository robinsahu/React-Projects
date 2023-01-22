import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [number, setNumber] = useState(10) //this is to number of shades divide by hundred
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10)) //this is the default value when we open the project

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(Number(number))  //we have to put this in try in case we give non exist color value
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
        <input
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder='Percentage btw 1 to 100' 
            required
          />
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
