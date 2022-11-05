import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateItem from "./CreateItem.js";

test("Item Name input should be rendered", () => {
  render(<CreateItem />); //to get the page
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
const addBtn = screen.getByText(/Add/i)  // to get add btn
  fireEvent.click(addBtn)
  expect(onSubmit).toHaveBeenCalledTimes(1)  //for test onsubmit call one time
})

test('It should not allow letters to be inputted for Unit Price', () => {
  render(<CreateItem />); 
  const UnitPriceInput = screen.getByLabelText('unitPrice')
  expect(UnitPriceInput.value).toBe('') // empty before
  fireEvent.change(input, {target: {value: 'No letters'}})
  expect(UnitPriceInput.value).toBe('') //empty after
})


test("Item Name input should change", () => {
  render(<CreateItem />);
  const itemNameInput = screen.getByPlaceholderText(/itemName/i);
  const testValue = "test";
  fireEvent.change(itemNameInput, { target: { value: testValue } });
  expect(itemNameInputl.value).toBe(testValue);
});




