import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import testTodos from "./initTodos";

it("renders TodoApp without crashing", function () {
  render(
    <TodoApp
      initialTodos={testTodos}
    />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <TodoApp
      initialTodos={testTodos}
    />
  );
  expect(container).toMatchSnapshot();
});

it("contains testing todos in the list", function () {
  const { queryByText } = render(
    <TodoApp
      initialTodos={testTodos}
    />
  );

  expect(queryByText("Write some code")).toBeInTheDocument();
  expect(queryByText("In bed by 11:15")).toBeInTheDocument();
});

it("deletes testing todos in the list", function () {
  const { container, queryByText } = render(
    <TodoApp
      initialTodos={testTodos}
    />
  );

  expect(queryByText("Write some code")).toBeInTheDocument();

  const deleteBtn = container.querySelector('.EditableTodo-delBtn');
  fireEvent.click(deleteBtn);

  expect(queryByText("Write some code")).not.toBeInTheDocument();

});

it("creates a new todo in the list", function () {
  const { getByPlaceholderText, getByLabelText, queryByText } = render(
    <TodoApp
      initialTodos={testTodos}
    />
  );

  //assert that todo was not already present
  expect(queryByText("This is a new todo")).not.toBeInTheDocument();
  expect(queryByText("NewTodoTitle")).not.toBeInTheDocument();

  //get all form inputs
  const titleInput = getByPlaceholderText("Title");
  const descriptionInput = getByPlaceholderText("Description");
  const priorityInput = getByLabelText("Priority:");
  const submitBtn = queryByText("Gø!");

  // fill out the form
  fireEvent.change(titleInput, { target: { value: "NewTodoTitle" } });
  fireEvent.change(descriptionInput, { target: { value: "This is a new todo" } });
  fireEvent.change(priorityInput, { target: { value: 1 } });
  fireEvent.click(submitBtn);

  expect(queryByText("This is a new todo")).toBeInTheDocument();
  expect(queryByText("NewTodoTitle")).toBeInTheDocument();
});