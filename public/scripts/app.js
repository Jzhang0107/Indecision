"use strict";

// auto-generated file that contains react code

console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Can't decide?",
    subtitle: "We will help you choose!",
    options: ['one', 'two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var count = 0;

var addOne = function addOne() {
    count += 1;
    renderCounterApp();
    console.log('add one', count);
};

var minusOne = function minusOne() {
    count -= 1;
    renderCounterApp();
};

var resetCounter = function resetCounter() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var appRoot = document.getElementById("app");

    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: resetCounter },
            "Reset"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
