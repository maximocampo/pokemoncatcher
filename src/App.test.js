import React from 'react';
import ReactDOM from "react-dom";
import {
  render,
  getByTestId
} from '@testing-library/react'
import App from './App';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads with initial state of 0", () => {
  const { container } = render(<App />);
  const countValue = getByTestId(container, "stateZero");
  expect(countValue.textContent).toBe("No pokemon captured yet!");
});