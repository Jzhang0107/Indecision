'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.makeDecision = _this.makeDecision.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.removeAllOptions = _this.removeAllOptions.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.log('There has been an error');
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'makeDecision',
        value: function makeDecision() {
            var randomIndex = Math.floor(Math.random() * this.state.options.length);

            var option = this.state.options[randomIndex];

            console.log('You have chosen ' + option);
        }
    }, {
        key: 'removeOption',
        value: function removeOption(itemToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return itemToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'removeAllOptions',
        value: function removeAllOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Invalid input';
            }
            if (this.state.options.indexOf(option) >= 0) {
                return 'Item already in array';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });

            console.log(option + ' has been added');
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Can't Decide";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(MakeDecision, {
                    hasOptions: this.state.options.length > 0,
                    makeDecision: this.makeDecision
                }),
                React.createElement('br', null),
                React.createElement(Options, {
                    options: this.state.options,
                    removeOption: this.removeOption,
                    removeAllOptions: this.removeAllOptions
                }),
                React.createElement('br', null),
                React.createElement(AddOptions, {
                    addOption: this.addOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision Default'
};

var MakeDecision = function MakeDecision(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: props.makeDecision
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeAllOptions },
            'Remove all options'
        ),
        React.createElement('br', null),
        props.options.length <= 0 && React.createElement(
            'p',
            null,
            'There are no current options'
        ),
        props.options.map(function (item) {
            return React.createElement(Option, {
                key: item,
                optionText: item,
                removeOption: props.removeOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        ' ---',
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.removeOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

// stateless functional components
// Pros:
//  - faster
//  - doesn't need to extend React.Component


var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
