import { useReducer, useState, FormEvent } from 'react';
import TodoListComponent from './TodoListComponent';

export interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

interface AddAction {
  type: 'ADD';
  task: string;
}

interface CompleteAction {
  type: 'COMPLETE';
  id: string;
}

type Action = AddAction | CompleteAction;

function generateRandomId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let id = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: generateRandomId(),
          title: action.task,
          complete: false,
        },
      ];
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

function TodoComponent() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD', task: task });
    setTask('');
  };

  return (
    <div className="todocontainer">
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos.length > 0 && (
        <TodoListComponent todos={todos} dispatch={dispatch} />
      )}
    </div>
  );
}

export default TodoComponent;
