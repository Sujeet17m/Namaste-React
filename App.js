const heading = React.createElement(
    "h1",
    {/*attributes to tag*/ id:"heading" },
    "hello world from react");

//nested 
const parent = React.createElement(
    "div",
    {id:"parent"},[
    React.createElement(
        "div",
        {id:"child"},
        // React.createElement("h1",{},"I'm an H1 TAG")
       [React.createElement("h1",{},"i'm an h1 tag"),
        React.createElement("h2",{},"i'm an h2 tag"),
       ]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        // React.createElement("h1",{},"I'm an H1 TAG")
       [React.createElement("h1",{},"i'm an h1 tag"),
        React.createElement("h2",{},"i'm an h2 tag"),
       ]),
]);

console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);