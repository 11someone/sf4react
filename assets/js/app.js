/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
//require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

//console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

import React from "react";
import ReactDOM from "react-dom";

import Items from "./Components/Items";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(entries => {
        this.setState({
          entries
        });
      });
  }

  render() {
    return (
      <div className="row">
        {this.state.entries.map(({ id, title, body }) => (
          <Items key={id} title={title} body={body} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
