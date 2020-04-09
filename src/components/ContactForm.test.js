import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('renders correctly', () => {
    render(<ContactForm />);
})

test('renders first name field', () => {
    const {getByTestId} = render(<ContactForm />);

    const firstNameInput = getByTestId(/firstName/i);
    expect(firstNameInput).toBeVisible();
});

test('renders last Name field', () => {
    const {getByTestId} = render(<ContactForm />);

    const lastNameInput = getByTestId(/lastName/i);
    expect(lastNameInput).toBeVisible();
});

test('renders email field', () => {
    const {getByTestId} = render(<ContactForm />);

    const EmailInput = getByTestId(/Email/i);
    expect(EmailInput).toBeVisible();
});

test('renders last Name field', () => {
    const {getByTestId} = render(<ContactForm />);

    const MessageInput = getByTestId(/Message/i);
    expect(MessageInput).toBeVisible();
});


// types inputs
test('change input values', () => {
    const {getByTestId} = render(<ContactForm />);

    const firstNameInput = getByTestId(/firstName/i);
    const lastNameInput = getByTestId(/lastName/i);
    const EmailInput = getByTestId(/Email/i);
    const MessageInput = getByTestId(/Message/i);

    fireEvent.change(firstNameInput, {target: { name: 'firstName', value: 'Cody' }});
    fireEvent.change(lastNameInput, {target: { name: 'lastName', value: 'Solomon' }});
    fireEvent.change(EmailInput, {target: { name: 'Email', value: 'codysolomon15@gmail.com' }});
    fireEvent.change(MessageInput, {target: { name: 'Message', value: 'HelloDudeBroDude' }});
    fireEvent.click(getByTestId(/submit/i));

    expect(firstNameInput.value).toBe('Cody')
    expect(lastNameInput.value).toBe('Solomon')
    expect(EmailInput.value).toBe('codysolomon15@gmail.com')
    expect(MessageInput.value).toBe('HelloDudeBroDude')
});