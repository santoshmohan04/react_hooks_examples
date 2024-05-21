import { Todo } from './TodoComponent';

function TodoListComponent({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch({ type: 'COMPLETE', id: todo.id })}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TodoListComponent;
