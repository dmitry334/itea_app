import { useState } from 'react';

export const PlayerInput = (props) => {
    const [userName, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(props.id, userName);
    }

    return (
        <form className='column' onSubmit={handleSubmit}>
            <label className='header' htmlFor={props.id}>{props.label}</label>
            <input
                type='text'
                id={props.id}
                placeholder='Github Username'
                onChange={handleChange}
                value={userName}
                autoComplete='off'
            />
            <button
                className='button'
                type='submit'
                disabled={!userName}>
                    Submit
            </button>
        </form>
    );
};