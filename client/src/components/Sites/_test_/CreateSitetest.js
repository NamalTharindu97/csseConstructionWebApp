import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreatePost from "./CreatePost.js";

test("location input should be rendered", () => {
  render(<CreatePost />);
  const locationInput = screen.getByPlaceholderText(/location/i);
  expect(locationInput).toBeInTheDocument();
});

test("name input should be rendered", () => {
  render(<CreatePost />);
  const nameInput = screen.getByPlaceholderText(/name/i);
  expect(nameInput).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<CreatePost />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});


test('calls onClick prop when clicked', () => {
  render(<CreatePost />); 
const onSubmit = jest.fn()
const addBtn = screen.getByText(/Add/i)
  fireEvent.click(addBtn)
  expect(onSubmit).toHaveBeenCalledTimes(1)
})


test('It should not allow letters to be inputted for Contact', () => {
  render(<CreatePost />); 
  const ContactInput = screen.getByLabelText('Contact')
  expect(ContactInput.value).toBe('') // empty before
  fireEvent.change(input, {target: {value: 'No letters'}})
  expect(ContactInput.value).toBe('') //empty after
})

test("Name input should change", () => {
  render(<CreatePost />);
  const locationInput = screen.getByPlaceholderText(/location/i);
  const testValue = "test";
  fireEvent.change(locationInput, { target: { value: testValue } });
  expect(locationInputEl.value).toBe(testValue);
});





