import React from 'react';
import data from '../data/data.json';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/components/ui/select';

type LanguageProps = {
  onLanguagesChange: (languagesCode: string) => void; 
};

const Language: React.FC<LanguageProps> = ({ onLanguagesChange }) => {
  const { languages } = data;

  const handleLanguageSwitch = (languagesCode: string) => {
    onLanguagesChange(languagesCode);
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
