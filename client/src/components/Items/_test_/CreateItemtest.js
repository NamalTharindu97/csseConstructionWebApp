import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateItem from "./CreateItem.js";

test("Item Name input should be rendered", () => {
  render(<CreateItem />);
  const itemNameInput = screen.getByPlaceholderText(/itemName/i);
  expect(itemNameInput).toBeInTheDocument();
});

test("Unit Price input should be rendered", () => {
  render(<CreateItem />);
  const UnitPriceInput = screen.getByPlaceholderText(/unitPrice/i);
  expect(UnitPriceInput).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<CreateItem />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});


test('calls onClick prop when clicked', () => {
  render(<CreateItem />); 
const onSubmit = jest.fn()
const addBtn = screen.getByText(/Add/i)
  fireEvent.click(addBtn)
  expect(onSubmit).toHaveBeenCalledTimes(1)
})













test("username input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});
