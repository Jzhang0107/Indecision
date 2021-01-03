class IndecisionApp extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            options: ['Himeragi', 'Enju', 'Yaya']
        };
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
    }
    makeDecision()
    {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);

        option = this.state.options[randomIndex];

        console.log(`You have chosen ${option}`);
    }
    removeAllOptions()
    {
        this.setState(() => {
            return{
                options: []
            };
        });
    }
    render()
    {
        const title = 'Indecision';
        const subtitle = "Can't Decide";
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <MakeDecision
                    hasOptions={this.state.options.length > 0} 
                    makeDecision={this.state.makeDecision}
                />
                <br />
                <Options 
                    options={this.state.options}
                    removeAllOptions={this.removeAllOptions}
                />
                <br />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component{
    render()
    {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>

        );
    }
}

class MakeDecision extends React.Component{

    render() 
    {
        return(
            <div>
                <button 
                    disabled={!this.props.hasOptions}
                    onClick={this.props.makeDecision}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component{

    render()
    {
        return(
            <div>
                <button onClick={this.props.removeAllOptions}>Remove all button</button><br />
                Options go here:
                {this.props.options.map((item) => <Option key={item} optionText={item} />)}
            </div>
        );
    }
}

class Option extends React.Component{
    render()
    {
        return(
            <div id={this.props.option}>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component{

    handleAddOption(e)
    {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option)
        {
            console.log(option);
            IndecisionApp.options.push(option);
        }
        else
        {
            console.log("No value inputted");
        }
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));