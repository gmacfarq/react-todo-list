import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(todos => [...todos, { ...newTodo, completed:false, id: uuid() }]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  /** complete or uncomplete a todo by id */
  function complete(id, isCompleted) {
    let updatedTodo = todos.find(todo => todo.id === id)
    updatedTodo.completed = isCompleted;

    setTodos(todos.map((todo) => todo.id === id ? updatedTodo : todo));
  }


  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length ?
            <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
              complete={complete}
            /> :
            <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">

          {!!todos.length &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} complete={complete}/>
            </section>}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm
              handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;