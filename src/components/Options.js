import React from 'react';
import Option from './Option';

const Options = (props) =>
(
    <div>
        <button onClick={props.removeAllOptions}>Remove all options</button>
        <br />
        <br />
        {props.options.length <= 0 && <p>There are no current options</p>}
        {props.options.map((item) => 
            (
                <Option 
                    key={item} 
                    optionText={item}
                    removeOption={props.removeOption}
                />
            ))
        }
    </div>
)

export default Options;