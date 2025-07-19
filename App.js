import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "kanji"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag in child2"),
    React.createElement("h2", {}, "I am an h2 tag in child2"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
