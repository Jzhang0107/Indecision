import React from 'react';

const Option = (props) =>
(
    <div className='options-list'>
        {props.optionText}
        <button
            className='button button--remove'
            onClick={(e) => {
                props.removeOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
)

export default Option;