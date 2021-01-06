// React imports
import React from 'react';

// Component imports
import AddOptions from './AddOptions';
import Header from './Header';
import MakeDecision from './MakeDecision';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{

    state = {
        options: [],
        selectedOption: undefined
    };
    makeDecision = () =>
    {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomIndex];

        this.setState(() => ({
            selectedOption: option
        }));

        console.log(`You have chosen ${option}`);
    };
    removeOption = (itemToRemove) =>
    {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => itemToRemove !== option)
        }));
    };
    removeAllOptions = () =>
    {
        this.setState(() => ({ options: [] }));
    };
    removeModal = () =>
    {
        this.setState(() => ({ selectedOption: undefined }))
    }
    addOption = (option) =>
    {
        if(!option)
        {
            return 'Invalid input';
        }
        if(this.state.options.indexOf(option) >= 0)
        {
            return 'Item already in array';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))

        console.log(`${option} has been added`);
    };
    componentDidMount()
    {
        try
        {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
            {
                this.setState(() => ({options: options}));
            }
        }
        catch (e)
        {
            console.log('There has been an error');
        }
    };
    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    };
    render()
    {
        const subtitle = "We will choose best girl for you!";

        return(
            <div>
                <Header title='Waifu selector' subtitle={subtitle}/>
                <div className='container'>
                    <MakeDecision
                    hasOptions={this.state.options.length > 0} 
                    makeDecision={this.makeDecision}
                    />
                    <br />
                    <Options 
                        options={this.state.options}
                        removeOption={this.removeOption}
                        removeAllOptions={this.removeAllOptions}
                    />
                    <br />
                    <AddOptions 
                        addOption={this.addOption}
                    />
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    removeModal={this.removeModal}
                />
            </div>
        );
    }
}