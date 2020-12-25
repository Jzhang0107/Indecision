console.log("App.js is running");

// var template = <p>Hello World</p>
var template = React.createElement
(
    "p", 
    {id: "test"}, 
    "Hello World"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);