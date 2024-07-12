"use client";
import React, { useState } from 'react';
import data from '../data/data.json';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/components/ui/select';

const Language = () => {
  const [language, setLanguage] = useState('en'); 
  const { languages } = data;

  const handleLanguageSwitch = (languageCode: string) => {
    setLanguage(languageCode);
  };

  return (
    <div className="flex justify-between items-center mb-4 text-sm">
      <h2 className="text-sm ml-4">View In: </h2>
      <div className='ml-4'></div>
      <Select onValueChange={handleLanguageSwitch}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
