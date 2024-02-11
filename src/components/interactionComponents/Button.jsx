import {React} from 'react';

const Button = ({onClick, title, buttonClass = ""}) => {
    return (
        <button className={`mr-auto border-2 rounded-full px-2 ${buttonClass}`} onClick={onClick}>
            {title}
        </button>
    )
};

export default Button