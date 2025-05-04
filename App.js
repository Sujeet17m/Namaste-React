// import React from "react";
// import ReactDOM from "react-dom";
// const heading = React.createElement(
//     "h1",
//     {/*attributes to tag*/ id:"heading" },
//     "hello world from react");

// //nested 
// const parent = React.createElement(
//     "div",
//     {id:"parent"},[
//     React.createElement(
//         "div",
//         {id:"child"},
//         // React.createElement("h1",{},"I'm an H1 TAG")
//        [React.createElement("h1",{},"i'm an h1 tag"),
//         React.createElement("h2",{},"i'm an h2 tag"),
//        ]
//     ),
//     React.createElement(
//         "div",
//         {id:"child2"},
//         // React.createElement("h1",{},"I'm an H1 TAG")
//        [React.createElement("h1",{},"i'm an h1 tag"),
//         React.createElement("h2",{},"i'm an h2 tag"),
//        ]),
// ]);

// console.log(parent);//object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

const children = [
  React.createElement(
    "div",
    { id: "child", key: "child1" },
    [
      React.createElement("h1", { key: "child1-h1" }, "I'm an h1 tag inside child"),
      React.createElement("h2", { key: "child1-h2" }, "I'm an h2 tag inside child")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    [
      React.createElement("h1", { key: "child2-h1" }, "I'm an h1 tag inside child2"),
      React.createElement("h2", { key: "child2-h2" }, "I'm an h2 tag inside child2")
    ]
  )
];

const parent = React.createElement("div", { id: "parent" }, children);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

