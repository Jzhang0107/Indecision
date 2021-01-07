import React from 'react';
import Option from './Option';

const Options = (props) =>
(
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your options:</h3>
            <button className='button button--remove' onClick={props.removeAllOptions}>Remove all options</button>
        </div>
        <br />
        {props.options.length <= 0 && <p className='widget__message'>There are no current options</p>}
        {props.options.map((item, index) => 
            (
                <Option 
                    key={item} 
                    optionText={item}
                    count={index + 1}
                    removeOption={props.removeOption}
                />
            ))
        }
    </div>
)

export default Options;