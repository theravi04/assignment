import React from 'react';
import QuestionAnalysis from './QuestionAnalysis.js';

export default function Right({ correct }) {
  const totalQuestions = 15; // Define total questions

  return (
    <div className="flex flex-col container mx-auto p-4 bg-red-300 ml-11 w-1/4 space-y-6 h-1/4">
      <h2 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className="flex flex-col gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            Tables & References in HTML
          </h3>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-4 bg-red-500 rounded-full"
              style={{ width: "24%" }}
            />
          </div>
          <p className="mt-2 text-gray-600">24%</p>
        </div>
        <div>
          <QuestionAnalysis 
            correctAnswers={correct} 
            totalQuestions={totalQuestions} 
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Correct Answers</h3>
          <p className="mt-2 text-gray-600">{correct}/15</p>
        </div>
      </div>
    </div>
  );
}
