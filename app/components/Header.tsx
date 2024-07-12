import React from 'react'
import data from '../data/data.json';
const Header = () => {
  return (
    <div>
    <h1 className="text-1xl md:text-2xl lg:text-2xl font-bold mb-4 p-2">
      Test: {data.month} {data.topic}
    </h1>
  </div>
  )
}

export default Header