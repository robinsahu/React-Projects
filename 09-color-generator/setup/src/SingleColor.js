import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import { FiCopy } from 'react-icons/fi';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb) // we can use this as well to convert rgb into hexCode
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])  // this is for alert so it disappear in 3 seconds
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      <FiCopy onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)  // this is to copy value on clipboard
      }} style={{cursor:'pointer',color:`${index>10 && "white"}`}}/>
      {alert && <div className='alert'>copied to clipboard</div>}
    </article>
  )
}

export default SingleColor
