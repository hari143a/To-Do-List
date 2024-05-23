import React, { useState } from 'react';
import './style.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, checked: false }]);
      setInputValue('');
      localStorage.setItem('data', inputValue);
    } else {
      alert('Please write something');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="todo-apli">
        <h2>To-Do List <img src="images/icon.png" alt="icon" /></h2>
        <div className="row">
          <input
            type="text"
            name="input-box"
            id="input-box"
            placeholder="Add Your Task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='btn' onClick={handleAddTodo}>Add</button>
        </div>
        <ul id="list-container">
          {todos.map((todo, index) => (
            <li key={index} onClick={() => handleToggleTodo(index)} className={todo.checked ? 'checked' : ''}>
            <span>{todo.text}</span>
            <button className='btn1' onClick={(e) => {
                e.stopPropagation();
                handleDeleteTodo(index);
            }}>
                x
            </button>
        </li>        
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
