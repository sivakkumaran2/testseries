import React from 'react';
import examData from '../data/data.json';

const Content = () => {
  const {
    examInstructions,
    questionStatuses,
    reviewNote,
    navigationInstructions,
    answeringInstructions
  } = examData;

  return (
    <div className="mt-4 max-h-[calc(100vh-200px)] overflow-y-auto text-sm">
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
            <p key={status.statusId} className="mb-2">
              {status.statusId}. {status.description}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Review Note</h2>
        <p className="text-sm">{reviewNote}</p>
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

      <div>
        <h2 className="text-sm font-semibold mb-2">Answering Questions</h2>
        <div>
          {answeringInstructions.map((item) => (
            <p key={item.number} className="mb-2">
              {item.number}. {item.instruction}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
