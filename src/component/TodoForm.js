import React from "react";
import ListShow from "./ListShow";
import {DatePicker} from 'react-persian-datepicker';
import classes from '../basic.module.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      todoList: [],
      showList: "All"
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleChangeDate = e => {
    this.setState({ date: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        { text: this.state.text, done: false, id: new Date(), deadline: new Date(this.state.date) },
        ...this.state.todoList
      ],
      text: "",
      date: ""
    });
    // setTimeout(() => console.log(this.state.todoList[0].id, this.state.todoList[0].deadline), 1000);
  };

  onDone = index => {
    this.setState(state => ({
      todoList: state.todoList.map((todo, indexTodo) => {
        if (indexTodo === index) {
          todo.done = !todo.done;
          console.log(this.state.todoList);
        }
        return todo;
      })
    }));
  };

  render() {
    let searchList = [];
    let newTodo = [];
    if (this.state.showList === "All") newTodo = this.state.todoList;
    else if (this.state.showList === "Done")
      newTodo = this.state.todoList.filter(todo => todo.done);
    else newTodo = this.state.todoList.filter(todo => !todo.done);

    searchList = newTodo.filter(todo => todo.text.includes(this.props.search));

    return (
      <>
        <div className="App">
          <h2>Add Form</h2>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Title" type="text" value={this.state.text} onChange={this.handleChange} />
            <DatePicker styles={classes} />
            <input placeholder="Date" type="date" value={this.state.date} onChange={this.handleChangeDate} />
            <button type="submit">Add Todo</button>
          </form>
          {searchList.map((todo, index) => (
            <ListShow
              key={index}
              todo={todo}
              handleDone={() => this.onDone(index)}
            />
          ))}
        </div>
        <div>
          <button onClick={() => this.setState({ showList: "All" })}>
            All
          </button>{" "}
          <button onClick={() => this.setState({ showList: "Done" })}>
            Done
          </button>{" "}
          <button onClick={() => this.setState({ showList: "unDone" })}>
            unDone
          </button>
        </div>
      </>
    );
  }
}

export default TodoForm;
