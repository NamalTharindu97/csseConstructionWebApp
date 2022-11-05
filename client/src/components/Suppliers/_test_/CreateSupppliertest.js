import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateSupplier from "./CreateSupplier.js";

test("Name input should be rendered", () => {
  render(<CreateSupplier />);
  const NameInput = screen.getByPlaceholderText(/Name/i);
  expect(NameInput).toBeInTheDocument();
});

test("Address input should be rendered", () => {
  render(<CreateSupplier />);
  const AddressInput = screen.getByPlaceholderText(/Address/i);
  expect(AddressInput).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<CreateSupplier />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});


test('calls onClick prop when clicked', () => {
  render(<CreateSupplier />); 
const onSubmit = jest.fn()
const addBtn = screen.getByText(/Add/i)
  fireEvent.click(addBtn)
  expect(onSubmit).toHaveBeenCalledTimes(1)
})


test('It should not allow letters to be inputted for Contact', () => {
  render(<CreateSupplier />); 
  const ContactInput = screen.getByLabelText('Contact')
  expect(ContactInput.value).toBe('') // empty before
  fireEvent.change(input, {target: {value: 'No letters'}})
  expect(ContactInput.value).toBe('') //empty after
})

test("Name input should change", () => {
  render(<CreateSupplier />);
  const NameInput = screen.getByPlaceholderText(/name/i);
  const testValue = "test";
  fireEvent.change(NameInput, { target: { value: testValue } });
  expect(nameInputEl.value).toBe(testValue);
});





