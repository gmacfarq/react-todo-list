import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({todo}) {
  //const [todo, setTodo] = useState(todo)
  //console.log(todo);
  //console.log(todo.title);

  return (
     <div className="Todo">
        <div><b>{todo.title}</b> <small>{todo.priority}</small></div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
