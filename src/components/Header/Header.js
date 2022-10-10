import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between container mt-5 me-5 p-4'>
            <div>
                <h2 className='text-primary fw-bolder'>Quizmania</h2>
            </div>
            <div>
                <Link className='fw-bold text-decoration-none ms-5' to='/'>Home</Link>
                <Link className='fw-bold text-decoration-none ms-5' to='/statistics'>Statistics</Link>
                <Link className='fw-bold text-decoration-none ms-5' to='/blog'>Blog</Link>
            </div>


        </div>
    );
};

export default Header;