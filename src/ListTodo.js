import React from "react";
import { connect } from "react-redux";

const ListTodo = ({ todos }) => (
  <div>
    <h1>Todos</h1>
    <div>
      {todos.map(todo => (
        <p key={todo.id}>{todo.name}</p>
      ))}
    </div>
  </div>
);

const mapStateToProps = store => ({
  todos: store.todoReducer.todos
});

export default connect(mapStateToProps)(ListTodo);
