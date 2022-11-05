import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateOrder from "./CreateOrder.js";

test("Site input should be rendered", () => {
  render(<CreateOrder />);
  const siteInput = screen.getByPlaceholderText(/site/i);
  expect(siteInput).toBeInTheDocument();
});

test("item input should be rendered", () => {
  render(<CreateOrder />);
  const itemInput = screen.getByPlaceholderText(/item/i);
  expect(itemInput).toBeInTheDocument();
});
test("supplier input should be rendered", () => {
  render(<CreateOrder />);
  const supplierInput = screen.getByPlaceholderText(/supplier/i);
  expect(supplierInput).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<CreateOrder />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});


test('calls onClick prop when clicked', () => {
  render(<CreateOrder />); 
const onSubmit = jest.fn()
const addBtn = screen.getByText(/Add/i)
  fireEvent.click(addBtn)
  expect(onSubmit).toHaveBeenCalledTimes(1)
})



test("site input should change", () => {
  render(<CreateOrder />);
  const siteInput = screen.getByPlaceholderText(/site/i);
  const testValue = "test";
  fireEvent.change(siteInput, { target: { value: testValue } });
  expect(siteInputEl.value).toBe(testValue);
});





