"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const Starttestbutton = () => {
    const handleStartTest = () => {
        window.open("/instructions", "mozillaWindow", "popup");
      };
  return (
    
      <Button onClick={handleStartTest}>Start Test</Button>
    
  )
}

export default Starttestbutton