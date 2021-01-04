class IndecisionApp extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            options: props.options
        };
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.removeOption = this.removeOption.bind(this);
    }
    componentDidMount()
    {
        console.log('Fetching data');
    }
    componentDidUpdate()
    {
        console.log('Saving data');
    }
    makeDecision()
    {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomIndex];

        console.log(`You have chosen ${option}`);
    }
    removeOption(itemToRemove)
    {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => itemToRemove !== option)
        }));
    }
    removeAllOptions()
    {
        this.setState(() => ({options: []}));
    }
    addOption(option)
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
    }
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

IndecisionApp.defaultProps = 
{
    options: []
}

const Header = (props) =>
{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>

    );
}

Header.defaultProps = 
{
    title: 'Indecision Default'
}

const MakeDecision = (props) =>
{
    return(
        <div>
            <button 
                disabled={!props.hasOptions}
                onClick={props.makeDecision}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) =>
{
    return(
        <div>
            <button onClick={props.removeAllOptions}>Remove all options</button><br />
            Options go here:
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
    );
}

const Option = (props) =>
{
    return(
        <div>
            {props.optionText} ---
            <button 
                onClick={(e) => {
                    props.removeOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    )
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

        this.setState(() => ({error: error}))
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

// stateless functional components
// Pros:
//  - faster
//  - doesn't need to extend React.Component
const User = (props) =>
{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<IndecisionApp options={['Banana', 'Milk', 'Chicken']} />, document.getElementById('app'));