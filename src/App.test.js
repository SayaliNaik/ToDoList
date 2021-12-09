/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument, toHaveAttribute, toBeEnabled,
} from '@testing-library/jest-dom/matchers';
import App from './App';

expect.extend({
  toBeInTheDocument, toHaveAttribute, toBeEnabled,
});

describe('Test ToDoList Application', () => {
  let app;
  beforeEach(() => {
    app = render(<App />);
  });
  afterEach(() => {
    app.unmount();
  });

  describe('Initial State', () => {
    test('1.Render App correctly', () => {
      const mainApp = app.getByTestId('app');
      expect(mainApp).toBeInTheDocument();
    });

    test('2.Render ToDoForm correctly', () => {
      const form = app.getByTestId('form');
      expect(form).toBeInTheDocument();
    });

    test('3.Expect Input to be blank', () => {
      const formInput = app.getByTestId('formInput');
      expect(formInput.getAttribute('value')).toBe('');
    });

    test('4.Expect 5 ToDoItems in List', () => {
      const todos = app.queryAllByTestId('todoItem');
      expect(todos.length).toBe(5);
    });
  });

  describe('Add Item', () => {
    test('1.Render ToDoItem correctly', () => {
      const listItem = app.getByTestId('todo-Buy Milk');
      expect(listItem).toBeInTheDocument();
    });

    test('2.Add new Item to the List, after adding form input should be blank', () => {
      const formInput = app.getByTestId('formInput');
      const add = app.getByTestId('add');

      fireEvent.change(formInput, { target: { value: 'Water garden' } });
      fireEvent.click(add);
      const listItem = app.getByTestId('todo-Water garden');
      expect(listItem).toBeInTheDocument();
      expect(formInput.getAttribute('value')).toBe('');
    });
  });

  describe('Completed Task', () => {
    test('1.Expect state of ListItem {done : true}', () => {
      const listCheckbox = app.getByTestId('todo-checkbox-Buy Milk');
      expect(listCheckbox).toBeInTheDocument();
      expect(listCheckbox).not.toHaveAttribute('value', 'true');
      fireEvent.click(listCheckbox);
      expect(listCheckbox).toHaveAttribute('value', 'true');
    });

    test('2.Expect toDoItem to have strikethrough', () => {
      const listCheckbox = app.getByTestId('todo-checkbox-Feed the dog');
      const listItem = app.getByTestId('todo-Feed the dog');
      expect(listCheckbox).toBeInTheDocument();
      expect(listCheckbox).not.toHaveAttribute('value', 'true');
      expect(listItem).not.toHaveAttribute('style', 'text-decoration: line-through;');
      fireEvent.click(listCheckbox);
      expect(listCheckbox).toHaveAttribute('value', 'true');
      expect(listItem).toHaveAttribute('style', 'text-decoration: line-through;');
    });
  });

  describe('Delete Task', () => {
    test('1. ToDoItem "Buy Milk" should not be in Document', () => {
      const listItem = app.getByTestId('todo-Buy Milk');
      expect(listItem).toBeInTheDocument();
      const listDeleteButton = app.getByTestId('todo-delete-Buy Milk');
      fireEvent.click(listDeleteButton);
      expect(listItem).not.toBeInTheDocument();
    });
  });

  describe('Edit Task', () => {
    test('1.List Item should change from Call Tom to Call John', () => {
      const listItem = app.getByTestId('todo-Call Tom');
      expect(listItem).toBeInTheDocument();
      fireEvent.click(listItem);
      fireEvent.change(listItem, { target: { value: 'Call John' } });
      expect(listItem.value).toBe('Call John');
    });
  });
});
