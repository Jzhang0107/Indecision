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