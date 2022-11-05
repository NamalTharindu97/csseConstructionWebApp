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


