class IndecisionApp extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            options: ['Himeragi', 'Enju', 'Yaya']
        };
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
    }
    makeDecision()
    {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomIndex];

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
    addOption(option)
    {
        if(!option)
        {
            // return console.log('Invalid input');
            return 'Invalid input';
        }
        if(this.state.options.indexOf(option) >= 0)
        {
            // return console.log('Item already in array');
            return 'Item already in array';
        }
        this.setState((prevState) => {
            return{
                options: prevState.options.concat(option)
            }
        })
        console.log(`${option} has been added`);
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
                    makeDecision={this.makeDecision}
                />
                <br />
                <Options 
                    options={this.state.options}
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
                <button onClick={this.props.removeAllOptions}>Remove all options</button><br />
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

    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e)
    {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        e.target.elements.option.value = ''
        this.setState(() => {
            return {error: error}
        })
    }
    render()
    {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));