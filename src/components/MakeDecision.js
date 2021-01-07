import React from 'react';

const MakeDecision = (props) =>
(
    <div>
        <button
            className='big-button'
            disabled={!props.hasOptions}
            onClick={props.makeDecision}
        >
            What should I do?
        </button>
    </div>
);

export default MakeDecision;