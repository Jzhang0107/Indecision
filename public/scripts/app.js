"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// auto-generated file that contains react code

console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Can't decide?",
    subtitle: "We will help you choose!",
    options: ['banana', 'milk', 'eggs', 'chicken']
};

var makeDecision = function makeDecision() {

    var optionIndex = Math.floor(Math.random() * app.options.length);
    console.log("Choose item:", app.options[optionIndex]);
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
            "ol",
            null,
            app.options.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    "Item: ",
                    item
                );
            })
        ),
        React.createElement(
            "button",
            { disabled: app.options.length == 0, onClick: makeDecision },
            "Make a decision"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
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

var Person = function () {
    function Person() {
        var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Bob';
        var userAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = userName;
        this.age = userAge;
    }

    _createClass(Person, [{
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " year(s) old!";
        }
    }]);

    return Person;
}();

var Traveler = function (_Person) {
    _inherits(Traveler, _Person);

    function Traveler(userName, userAge, userLocation) {
        _classCallCheck(this, Traveler);

        var _this = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, userName, userAge));

        _this.location = userLocation;
        return _this;
    }

    _createClass(Traveler, [{
        key: "getGreeting",
        value: function getGreeting() {
            if (!!this.location) {
                return "Hi. I am " + this.name + ". I'm from " + this.location;
            } else {
                return "Hi. I am " + this.name + ".";
            }
        }
    }]);

    return Traveler;
}(Person);

var me = new Traveler('Jason', 20, 'Boston');
var random = new Traveler();

console.log(me.getGreeting());
console.log(random.getGreeting());
console.log('Hello');
