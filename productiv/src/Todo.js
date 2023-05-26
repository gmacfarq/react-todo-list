import React, {useState} from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, completed}
 * - handleComplete
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({todo, complete}) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  /** toggle the state to render todos crossed out*/
  function toggleCompleted(){
    setIsCompleted(isCompleted => !isCompleted)
  }

  /** calls the complete function from this component*/
  function handleComplete(){
    toggleCompleted()
    complete(todo.id, !isCompleted)
  }

  return (


     <div className="Todo">
        <div>
          <b onClick={handleComplete}>
            {isCompleted ? <s>{todo.title}</s> : todo.title}
          </b>
          <small> (priority: {todo.priority})</small>
        </div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
