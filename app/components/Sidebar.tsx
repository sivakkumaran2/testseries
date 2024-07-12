import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full lg:w-1/3 bg-gray-300 shadow-md rounded-lg p-4 mt-4 lg:mt-0 flex flex-col justify-between lg:ml-4">
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center">
            <p className="text-sm font-bold">Renukadevi E</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
