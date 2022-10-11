import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex justify-content-between container my-5 flex-column flex-md-row'>
            <div>
                <h2 className='text-primary fw-bolder mb-5 text-center'>Quizmania</h2>
            </div>
            <div>
                <NavLink className={`fw-bold text-decoration-none py-2 px-4 ${(isActive) => isActive ? 'active' : undefined}`} to='/' end>Home</NavLink>
                <NavLink className={`fw-bold text-decoration-none ms-2 py-2 px-4 ${(isActive) => isActive ? 'active' : undefined}`} to='/statistics'>Statistics</NavLink>
                <NavLink className={`fw-bold text-decoration-none ms-2 py-2 px-4 ${(isActive) => isActive ? 'active' : undefined}`} to='/blog'>Blog</NavLink>
            </div>


        </div>
    );
};

export default Header;