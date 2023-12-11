// let heading = React.createElement("h1", {}, "Hello World!");
let parent = [
    React.createElement(
        "div",
        {
          id: "parent1",
        },
        [
          React.createElement(
              "div",
              {
                id: "child1",
              },
              React.createElement("h1", {}, "i am h1 tag")
            ),
            React.createElement(
              "div",
              {
                id: "child2",
              },
              React.createElement("h2", {}, "i am h2 tag")
            )
        ]
        
    ),
    React.createElement(
        "div",
        {
          id: "parent2",
        },
        [
          React.createElement(
              "div",
              {
                id: "child3",
              },
              React.createElement("h1", {}, "i am h3 tag")
            ),
            React.createElement(
              "div",
              {
                id: "child4",
              },
              React.createElement("h2", {}, "i am h4 tag")
            )
        ]
        
    ),
]
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
