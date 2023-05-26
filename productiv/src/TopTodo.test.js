import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo";
import testTodos from "./initTodos";



it("renders TopTodo  without crashing", function () {
    render(
      <TopTodo
        todos={testTodos}
  />
  );
  });

it("matches snapshot", function () {
  const { container } = render(
    <TopTodo
      todos={testTodos}
/>
  );
  expect(container).toMatchSnapshot();
});
