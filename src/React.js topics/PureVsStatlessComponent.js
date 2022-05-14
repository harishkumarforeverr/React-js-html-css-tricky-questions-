import React from "react";
import "./App.scss";
const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

const NotFound = () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <h1>
      Quote: <strong>{randomQuote}</strong>
    </h1>
  );
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "foo" };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ username: "bar" }), 2000); // Simulate async ajax call
  }

  render() {
    return (
      <div>
        <h1> Welcome: {this.state.username}</h1>
        <NotFound />
      </div>
    );
  }
}

class NotFoundPureComponent extends React.PureComponent {
  render() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return (
      <h1>
        Quote: <strong>{randomQuote}</strong>
      </h1>
    );
  }
}

class TodoAppPureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "foo" };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ username: "bar" }), 2000); // Simulate sync ajax call
  }

  render() {
    return (
      <div>
        <h1> Welcome: {this.state.username}</h1>
        <NotFoundPureComponent />
      </div>
    );
  }
}
const App = () => {
  return (
    <div className="App">
      <h1> StateLess Component </h1>
      <TodoApp />
      <h1>Implementation using Pure Component</h1>
      <TodoAppPureComponent />
    </div>
  );
};

export default App;

// /links
// https://medium.com/@ktajpuri/pure-react-component-vs-functional-react-component-with-a-simple-demo-a1c5129a2c03#:~:text=A%20functional%20stateless%20component%20will,Pure%20component%20solves%20this%20issue.

// Pure React Component VS Functional React Component with a simple demo
