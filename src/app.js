// auto-generated file that contains react code

console.log("App.js is running");

// JSX - JavaScript XML

const app = {
    title: "Can't decide?",
    subtitle: "We will help you choose!",
    options: ['one', 'two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options":"No Options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => 
{
    count += 1;
    renderCounterApp();
    console.log('add one', count);
}

const minusOne = () => 
{
    count -= 1;
    renderCounterApp();
}

const resetCounter = () => 
{
    count = 0;
    renderCounterApp();
}

const renderCounterApp = () =>
{
    const appRoot = document.getElementById("app");
    
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();