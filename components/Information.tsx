import React from "react";

const Information = () => {
  return (
    <div className="grid grid-cols-3 gap-14 m-16">
     
        <div className="flex flex-col   items-center">
            <h1 className="text-3xl text-center text-gray-700 font-serif pb-10">Up-to-date Exam Content</h1>
            <span className="text-xl text-center text-gray-500 font-serif">All questions and solutions created by Experts and Top Faculty, based on latest patterns and actual exam level.</span>
        </div>
        <div className="flex flex-col   items-center">
            <h1 className="text-3xl text-center text-gray-700 font-serif pb-10">High Quality Mock Tests</h1>
            <span className="text-xl text-center text-gray-500 font-serif">Practice for  examinations by attempting  tests that closest to actual exams and are curated by experts</span>
        </div>
        <div className="flex flex-col  items-center">
            <h1 className="text-3xl text-center text-gray-700 font-serif pb-10">Latest Notification</h1>
            <span className="text-xl text-center text-gray-500 font-serif">Comprehensive explanation to every single question coupled with Smart approach in the form of Text</span>
        </div>
        <div></div>
   
    </div>
  );
};

export default Information;
