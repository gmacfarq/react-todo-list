import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import testTodos from "./initTodos";

const mock = () =>  { };

it("renders EditableTodo  without crashing", function () {
    render(
      <EditableTodo
        todo={testTodos[0]} update={mock()} remove={mock()}
  />
  );
  });

it("matches snapshot", function () {
  const { container } = render(
    <EditableTodo
      todo={testTodos[0]} update={mock()} remove={mock()}
/>
  );
  expect(container).toMatchSnapshot();
});

it("click on edit button to render a todo form", function(){

  const { queryByText } = render(
    <EditableTodo
      todo={testTodos[0]} update={mock()} remove={mock()}
/>
  );

  expect(queryByText("Gø!")).not.toBeInTheDocument();

  const editBtn = queryByText("Edit");

  fireEvent.click(editBtn);

  expect(queryByText("Gø!")).toBeInTheDocument();


})