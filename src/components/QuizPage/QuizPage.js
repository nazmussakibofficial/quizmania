import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQues from '../QuizQues/QuizQues';

const QuizPage = () => {
    const quizPage = useLoaderData();
    const quizPageData = quizPage.data;
    const questions = quizPageData.questions;
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    return (
        <div>
            <h2 className='text-primary text-center ms-5 fw-bold'>{quizPageData.name} Quiz</h2>
            <div className='container d-flex flex-md-row flex-column'>
                <div className='shadow ms-5 mt-5 border border-3 border-primary rounded'>
                    {
                        questions.map((ques, idx) => <QuizQues key={ques.id} ques={ques} idx={idx} setCorrect={setCorrect} setWrong={setWrong} correct={correct} wrong={wrong}></QuizQues>)
                    }
                </div>
                <div>
                    <h4 className='text-white bg-primary px-4 py-2 text-center ms-5 mt-5 fw-bold'>{`You gave ${correct} correct answer(s) and ${wrong} wrong answer(s)`}</h4>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;