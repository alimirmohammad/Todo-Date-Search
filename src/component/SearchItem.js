import React, { Component } from 'react'
import TodoForm from './TodoForm'

export default class SearchItem extends Component {
    state = { text: "" };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <h2>Search Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.text} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
                <TodoForm search={this.state.text} />
            </div>
        )
    }
}
