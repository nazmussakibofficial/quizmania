import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQues from '../QuizQues/QuizQues';

const QuizPage = () => {
    const quizPage = useLoaderData();
    const quizPageData = quizPage.data;
    const questions = quizPageData.questions;
    return (
        <div className='container'>
            <h2 className='text-primary text-center ms-5 fw-bold'>{quizPageData.name} Quiz</h2>
            <div className='shadow ms-5 mt-5 border border-3 border-primary rounded'>
                {
                    questions.map((ques, idx) => <QuizQues key={ques.id} ques={ques} idx={idx}></QuizQues>)
                }
            </div>


        </div>
    );
};

export default QuizPage;