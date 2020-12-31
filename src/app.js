// auto-generated file that contains react code

console.log("App.js is running");

// JSX - JavaScript XML

const app = {
    title: "Can't decide?",
    subtitle: "We will help you choose!",
    options: ['banana', 'milk', 'eggs', 'chicken']
};

const makeDecision = () => {
    
    const optionIndex = (Math.floor(Math.random() * app.options.length));
    console.log("Choose item:", app.options[optionIndex]);
}

const clearList = () => {

    app.options = []
    console.log('Options array is size', app.options.length);
    render()
}

const onFormSubmit = (e) => {

    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    console.log('form submitted', option);

    render();
}

const render = () =>
{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options":"No Options"}</p>
            <ol>
                {
                    app.options.map((item) => 
                    {
                        return <li key={item}>Item: {item}</li>;
                    })
                }
            </ol>
            <button disabled={app.options.length == 0}onClick={makeDecision}>Make a decision</button>
            <br />
            <br />
            <button onClick={clearList}>Remove all items</button>
            <br />
            <br />
            <form onSubmit={onFormSubmit}>
                <input type='Text' placeholder='options' name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    const appRoot = document.getElementById("app");

    ReactDOM.render(template, appRoot);
}

render();

class Person 
{
    constructor (userName='Bob', userAge = 0)
    {
        this.name = userName;
        this.age = userAge;
    }
    getDescription()
    {
        return `${this.name} is ${this.age} year(s) old!`
    }
}

class Traveler extends Person
{
    constructor(userName, userAge, userLocation)
    {
        super(userName, userAge);
        this.location = userLocation;
    }
    getGreeting()
    {
        if(!!this.location)
        {
            return `Hi. I am ${this.name}. I'm from ${this.location}`
        }
        else
        {
            return `Hi. I am ${this.name}.`
        }
    }
}

const me = new Traveler('Jason', 20, 'Boston');
const random = new Traveler();

console.log(me.getGreeting());
console.log(random.getGreeting());
console.log('Hello')