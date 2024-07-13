"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Result: React.FC = () => {
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/')
  }

  return (
     <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-lg font-semibold mb-4">Your test has been submitted. Thank you for your participation!</p>
        <Button  onClick={handleGoHome}>
          Go to Back
        </Button>
      </div>
   
  )
}

export default Result
