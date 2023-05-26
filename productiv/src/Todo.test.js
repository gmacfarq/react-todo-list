import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import testTodos from "./initTodos";



it("renders Todo  without crashing", function () {
    render(
      <Todo
        todo={testTodos[0]}
  />
  );
  });

it("matches snapshot", function () {
  const { container } = render(
    <Todo
      todo={testTodos[0]}
/>
  );
  expect(container).toMatchSnapshot();
});