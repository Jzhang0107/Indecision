// let count = 0;

// const addOne = () => 
// {
//     count += 1;
//     renderCounterApp();
//     console.log('add one', count);
// }

// const minusOne = () => 
// {
//     count -= 1;
//     renderCounterApp();
// }

// const resetCounter = () => 
// {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () =>
// {
//     const appRoot = document.getElementById("app");

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetCounter}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            count: 0
        };
    }
    addOne()
    {
        this.setState((prevState) =>
        {
            return{
                count: prevState.count + 1
            };
        });
    }
    minusOne()
    {
        this.setState((prevState) =>
        {
            return{
                count: prevState.count - 1,
            };
        });
    }
    resetCounter()
    {
        this.setState(() =>
        {
            return{
                count: 0
            };
        });
    }
    render()
    {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));