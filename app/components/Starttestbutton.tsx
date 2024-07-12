"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const Starttestbutton = () => {
    const handleStartTest = () => {
        window.open("/instructions", "mozillaWindow", "popup");
      };
  return (
    <Link href="instructions">  
      <Button onClick={handleStartTest}>Start Test</Button>
    </Link> 
  )
}

export default Starttestbutton