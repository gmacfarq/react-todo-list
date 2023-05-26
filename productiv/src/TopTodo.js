import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos, complete}) {
  // lowest-priority # is the highest priority
  let notCompletedTodos = todos.filter(todo => !todo.completed)
  let top = notCompletedTodos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, notCompletedTodos[0]);
  if(top){
    return <Todo  todo={top} complete={complete}/>;
  }
}

export default TopTodo;