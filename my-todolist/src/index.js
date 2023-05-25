import React from "react";
import ReactDOM from "react-dom";

const todoList = ["surprise", "mo", "fu", "er"];

class Todo extends React.Component {
  render() {
    // even index for red
    if (this.props.index % 2 === 0) {
      return <li style={{ color: "blue"}}>{this.props.content}</li>;
    }

    return <li>{this.props.content}</li>;
  }
}

class App extends React.Component {
  // initialize state inside props
  constructor(props) {
    super(props);

    this.state = {
      nowTodo: "",
      todoList: []
    };
  }

  // wait 2s to update state.todoList
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        todoList: todoList
      });
    }, 2000);
  }

  // clear timer to avoid memory leak
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  // accept input value and update it into nowTodo
  handleChange(e) {
    this.setState({
      nowTodo: e.target.value
    });
  }

  // concat input into todoList
  handleSubmit(e) {
    // avoid refresh page
    e.preventDefault(e);
    const newTodoList = this.state.todoList.concat(this.state.nowTodo);

    this.setState({
      todoList: newTodoList,
      nowTodo: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={e => this.handleChange(e)} />
          <button type="submit">提交</button>
        </form>
        <ul>
          {this.state.todoList.map((todo, index) => (
            <Todo content={todo} key={index} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
