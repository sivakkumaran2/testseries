import React from 'react';

import { Button } from '@/components/ui/button';

import data from '../data/data2.json';

export default function Home() {
 
  const { subjects } = data;


  return (
     <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold w-full h-15">
            <div className="button-container flex gap-4 overflow-x-auto flex-nowrap">
              {subjects.map((subject) => (
                <Button key={subject.id}  className="text-1xl mt-2 font-bold mb-2 min-w-[calc(25%-1rem)]">
                  {subject.name}
                </Button>
              ))}
            </div>
          </div>

  );
}
