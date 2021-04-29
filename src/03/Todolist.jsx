import React from 'react';

class Todolist extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: 'Washing', finished: false },
      { taskName: 'Studying', finished: true },
    ];

    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
