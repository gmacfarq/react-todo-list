import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import testTodos from "./initTodos";


const mock = () =>  { };


it("renders EditableTodo  without crashing", function () {
  render(
    <EditableTodoList
      todos={testTodos} update={mock()} remove={mock()}
/>
);
});

it("matches snapshot", function () {
const { container } = render(
  <EditableTodoList
    todos={testTodos} update={mock()} remove={mock()}
/>
);
expect(container).toMatchSnapshot();
});