"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import data from '../data/data2.json';

export default function Home() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [language, setLanguage] = useState('en');
  const { questions, subjects, time, languages } = data;
  const [questionStatus, setQuestionStatus] = useState(
    questions.map(() => ({ legend: 'notVisited' }))
  );
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const handleNextQuestion = () => {
    const updatedStatus = [...questionStatus];
    if (questionStatus[currentQuestionIndex].legend === 'notVisited') {
      updatedStatus[currentQuestionIndex].legend = 'notAnswered';
    }
    setQuestionStatus(updatedStatus);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleLanguageSwitch = (languageCode: string) => {
    setLanguage(languageCode);
  };

  const handleSidebarQuestionClick = (index: number) => {
    const updatedStatus = [...questionStatus];
    if (questionStatus[currentQuestionIndex].legend === 'notVisited') {
      updatedStatus[currentQuestionIndex].legend = 'notAnswered';
    }
    setQuestionStatus(updatedStatus);
    setCurrentQuestionIndex(index);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const questionText = language === 'ta' ? currentQuestion.question_ta : currentQuestion.question_en;
  const options = language === 'ta' ? currentQuestion.options_ta : currentQuestion.options_en;

  const handleClearAnswer = () => {
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestionIndex] = { legend: 'notAnswered' };
    setQuestionStatus(updatedStatus);

    const updatedSelectedOptions = { ...selectedOptions };
    delete updatedSelectedOptions[currentQuestion.id];
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleOptionSelect = (optionId: string) => {
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestionIndex] = { legend: 'answered' };
    setQuestionStatus(updatedStatus);

    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [String(currentQuestion.id)]: optionId,
    }));
  };

  const handleMarkForReview = () => {
    const updatedStatus = [...questionStatus];
    if (updatedStatus[currentQuestionIndex].legend === 'answered') {
      updatedStatus[currentQuestionIndex].legend = 'markedAndAnswered';
    } else {
      updatedStatus[currentQuestionIndex].legend = 'marked';
    }
    setQuestionStatus(updatedStatus);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          router.push('/Dashboard/Result');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    
         
          <div className="flex justify-between items-center mb-4 text-sm relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold w-full h-15">
            <h2 className="text-sm">Question No. {currentQuestion.id}</h2>
            <div className="flex items-center">
              <Button className="mr-2 text-sm">
                MCQ
              </Button>
              <h2 className="text-sm font-bold">Marking: </h2>
              <Button className="ml-2 p-1">
                +1
              </Button>
              <Button  className="ml-2 p-1">
                -0
              </Button>
            </div>
          </div>
    
  );
}
