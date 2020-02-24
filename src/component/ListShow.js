import React from "react";

export default props => {
  const diffTime = Math.abs(props.todo.deadline - props.todo.id);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (<div
    style={{ color: props.todo.done ? "blue" : "" }}
    onClick={props.handleDone}
  >
    {" "}
    Title: {props.todo.text} Deadline: {String(props.todo.deadline)} Days Until Deadline: {diffDays}
  </div>)
};
