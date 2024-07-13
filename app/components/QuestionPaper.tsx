"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import Sidebar from './QuestionSidebar';
import { Button } from '@/components/ui/button';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import data from '../data/data2.json';
import QuestionNo from './QuestionNo';
import Subject from './Subject';

export default function Home() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [language, setLanguage] = useState('en');
  const { questions, languages } = data;
  const [questionStatus, setQuestionStatus] = useState(
    questions.map(() => ({ legend: 'notVisited' }))
  );
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

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

  const handleOptionSelect = (optionId: number) => {
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestionIndex] = { legend: 'answered' };
    setQuestionStatus(updatedStatus);
  
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [String(currentQuestion.id)]: String(optionId),
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
    <main className="flex min-h-screen flex-col p-4">
      <Header />

      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-4/5 mb-4 lg:mb-0 lg:mr-4 flex flex-col justify-between">
          <Subject />

          <div className="mb-4"></div>
          <div className="flex justify-between items-center mb-4 text-sm">
            <h2 className="text-sm font-bold">
              Time Left: <span className="text-red-500">{formatTime(timeLeft)}</span>
            </h2>
            <div className="flex items-center">
              <Button variant="outline" className="mr-2 text-sm">
                A-
              </Button>
              <Button variant="outline">A+</Button>
              <h2 className="text-sm ml-4">View In: </h2>
              <div className="ml-4"></div>
              <select className="w-[200px]" onChange={(e) => handleLanguageSwitch(e.target.value)}>
                <option value="">Select language</option>
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4"></div>
          <QuestionNo />
          <div className="mb-4">
            <div className="py-12 px-12 bg-white rounded-lg mb-2">
              <div className="bg-white p-4 rounded shadow-md mb-4">
                <div className="question">
                  <h2 className="question-text">{questionText}</h2>
                  <ul className="options">
                    {options.map((option) => (
                      <li key={option.id} className="option rounded p-4 mb-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                        <input
  type="radio"
  name={`question_${currentQuestion.id}`}
  value={option.id}
  checked={selectedOptions[String(currentQuestion.id)] === String(option.id)}
  onChange={() => handleOptionSelect(option.id)}
  className="h-4 w-4 text-blue-500 focus:ring-blue-400 option-input"
/>

                          <span className="ml-2 text-sm">{option.text}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 relative rounded bg-gray-200 px-2 py-1 font-mono text-sm font-semibold w-full h-15 mt-auto">
            <div className="flex flex-grow">
              <Button className="mr-2 text-sm" onClick={handleMarkForReview}>
                <AiOutlineCheckCircle className="mr-1" />
                Mark For Review
              </Button>
              <Button variant="destructive" className="text-sm" onClick={handleClearAnswer}>
                <AiOutlineCloseCircle className="mr-1" />
                Clear Answer
              </Button>
            </div>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                currentQuestionIndex === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Save & Next
            </button>
          </div>
        </div>

        <Sidebar
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={handleSidebarQuestionClick}
          questionStatus={questionStatus}
        />
      </div>
    </main>
  );
}
