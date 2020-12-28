// auto-generated file that contains react code

console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Can't decide?",
    subtitle: "we will help you choose!",
    options: ['one', 'two']
};

var template = (
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

var user = {
    name: "Jason",
    age: 19,
    location: 'New York City'
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Yukina"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);