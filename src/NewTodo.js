import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import newTodo from "./store/actions/newTodo";

class NewTodo extends Component {
  state = {
    input: ""
  };

  submitInput = () => {
    this.props.newTodo({ id: new Date(), name: this.state.input });
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Todo name"
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button onClick={() => this.submitInput()}>New Todo</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  todos: store.todoReducer.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ newTodo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);
