"use strict";

// auto-generated file that contains react code

console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Can't decide?",
    subtitle: "We will help you choose!",
    options: ['milk', 'eggs', 'banana']
};

var clearList = function clearList() {

    app.options = [];
    console.log('Options array is size', app.options.length);
    render();
};

var onFormSubmit = function onFormSubmit(e) {

    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    console.log('form submitted', option);

    render();
};

var render = function render() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (item) {
                return React.createElement(
                    "li",
                    { id: item },
                    "Item: ",
                    item
                );
            })
        ),
        React.createElement(
            "button",
            { onClick: clearList },
            "Remove all items"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "Text", placeholder: "options", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    var appRoot = document.getElementById("app");

    ReactDOM.render(template, appRoot);
};

render();
