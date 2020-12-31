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