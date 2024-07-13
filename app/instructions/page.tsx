"use client";
import { useState } from 'react';
import Header from '../components/Header';
import Language from '../components/Language';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

export default function Home() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <main className="flex flex-col min-h-screen p-4">
      <div className="flex-1 flex">
        <div className="flex-1">
          <Header />
          <Language onLanguagesChange={handleLanguageChange} />
          <div className="flex justify-center items-center mt-4">
            <h4 className="text-sm font-semibold tracking-tight text-center">
              {language === 'en' ? 'Please read the following instructions carefully' : 'தயவுசெய்து பின்வரும் வழிமுறைகளை கவனமாக படிக்கவும்'}
            </h4>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Content language={language} />
          </div>
        </div>
        <Sidebar />
      </div>
    </main>
  );
}