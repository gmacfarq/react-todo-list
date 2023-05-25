import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("todos list",todos)
  return (
    <div>
      {todos.map(t =>
        <EditableTodo
          key={t.id}
          todo={t}
          update={update}
          remove={() => remove(t.id)}
        />
      )}
    </div>
  );
}

export default EditableTodoList;
