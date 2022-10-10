import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizQues = ({ ques, idx }) => {
    const handleCorrectAns = () => {
        toast.info(`Correct Answer is: ${ques.correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const checkAnswer = (option) => {
        if (option.toLowerCase() === ques.correctAnswer.toLowerCase()) {
            toast.success('Correct Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Wrong Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return (
        <div className='text-center my-3 py-3 '>
            <ToastContainer></ToastContainer>
            <div className='d-flex justify-content-between'>
                <h4 className='text-primary p-3 fw-semibold'>Quiz {idx} : {ques.question}</h4>
                <button onClick={handleCorrectAns} className='bg-white border-0'><FontAwesomeIcon className='text-primary ms-3 p-3' icon={faEye}></FontAwesomeIcon></button>
            </div>
            {
                ques.options.map((option, id) => <Option key={id} option={option} checkAnswer={checkAnswer}></Option>)
            }


        </div>
    );
};

export default QuizQues;