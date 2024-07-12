"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import examData from '../data/data.json';
import { Button } from "@/components/ui/button";

const Content: React.FC = () => {
  const {
    examInstructions,
    questionStatuses,
    reviewNote,
    navigationInstructions,
    answeringInstructions,
    agreementStatement
  } = examData;

  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked);
  };

  return (
    <div className="mt-4 max-h-[calc(100vh-200px)] overflow-y-auto text-xs">
      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Exam Instructions</h2>
        <div>
          {examInstructions.map((item) => (
            <p key={item.number} className="mb-2">
              {item.number}. {item.instruction}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Question Statuses</h2>
        <div>
          {questionStatuses.map((status) => (
            <div key={status.statusId} className="flex items-center mb-2">
              <div className="mr-2">
                {status.statusId === 1 && (
                  <Button size="icon" className="bg-gray-300 disabled user-select-none hover:bg-gray-300">
                    1
                  </Button>
                )}
                {status.statusId === 3 && (
                  <Button size="icon" className="bg-red-500 cursor-not-allowed disabled user-select-none hover:bg-red-500 rounded-b-md">
                    3
                  </Button>
                )}
                {status.statusId === 5 && (
                  <Button size="icon" className="bg-green-500 disabled user-select-none hover:bg-green-500">
                    5
                  </Button>
                )}
                {status.statusId === 7  && (
                  <Button size="icon" className="bg-purple-500 disabled user-select-none hover:bg-purple-500 rounded-full">
                    {status.statusId}
                  </Button>
                )}
                 {status.statusId === 9  && (
                  <Button size="icon" className="bg-yellow-500 disabled user-select-none hover:bg-purple-500 rounded-full">
                    {status.statusId}
                  </Button>
                )}
              </div>
              <p>{status.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Review Note</h2>
        <p className={`text-sm ${reviewNote.colorClass}`}>{reviewNote.text}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Navigating Questions</h2>
        <div>
          {navigationInstructions.map((item) => (
            <p key={item.number} className="mb-2">
              {item.number}. {item.instruction}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Answering Questions</h2>
        <div>
          {answeringInstructions.map((item) => (
            <p key={item.number} className="mb-2">
              {item.number}. {item.instruction}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={handleAgreementChange}
            className="mr-2"
          />
          {agreementStatement.text}
        </label>
      </div>

      <div className="flex justify-center mt-4">
        {agreed ? (
          <Link href="/instructions/Dashboard">
            <p className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              Next
            </p>
          </Link>
        ) : (
          <Button
            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-not-allowed opacity-50"
            disabled
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Content;
