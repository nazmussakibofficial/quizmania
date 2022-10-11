import React from 'react';

const Option = ({ option, checkAnswer }) => {

    return (
        <div className="form-check w-50 mx-auto text-primary my-3 p-3 border border-primary border-1 text-break">
            <input onClick={() => { checkAnswer(option) }} className="form-check-input ms-3" type="radio" defaultChecked />
            <label className="form-check-label">
                {option}
            </label>
        </div>
    );
};

export default Option;