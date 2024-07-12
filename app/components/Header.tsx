import React from 'react'
import data from '../data/data.json';
const Header = () => {
  return (
    <div>
    <h1 className="text-1xl md:text-3x1 lg:text-4x1 font-bold mb-4">
      Test: {data.month} {data.topic}
    </h1>
  </div>
  )
}

export default Header