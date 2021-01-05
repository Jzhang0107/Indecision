// React imports
import React from 'react';

// Component imports
import AddOptions from './AddOptions';
import Header from './Header';
import MakeDecision from './MakeDecision';
import Options from './Options';

export default class IndecisionApp extends React.Component{

    state = {
        options: []
    };
    makeDecision = () =>
    {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomIndex];

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
        this.setState(() => ({options: []}));
    };
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
        const subtitle = "Can't Decide";

        return(
            <div>
                <Header subtitle={subtitle}/>
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
        );
    }
}