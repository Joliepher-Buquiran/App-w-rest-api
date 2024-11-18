import React, { useState, useEffect } from 'react';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState('');

  // Adding a task
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = { title: newTodo, completed: false, id: Date.now() };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  // Deleting a task
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Editing a task
  const handleEditTodo = (todo) => {
    setEditTodo(todo.id);
    setEditText(todo.title);
  };

  const handleSaveEdit = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: editText } : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null);
    setEditText('');
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-200">
      <div className="container mx-auto p-8 bg-white rounded-xl shadow-xl w-full sm:w-96">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">ToDo List</h1>
        
        {/* Add Task Input */}
        <div className="flex items-center mb-6 space-x-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            placeholder="Enter a new task"
          />
          <button
            onClick={handleAddTodo}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            Add Task
          </button>
        </div>

        {/* Clear All Tasks Button */}
        <button
          onClick={handleClearAll}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 mb-6 w-full transition duration-300"
        >
          Clear All Tasks
        </button>

        {/* Todo List */}
        <ul className="space-y-4">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No tasks added yet</p>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    readOnly
                  />
                  {editTodo === todo.id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className={todo.completed ? 'line-through text-gray-500 text-lg' : 'text-gray-800 text-lg'}>{todo.title}</span>
                  )}
                </div>

                {/* Edit/Delete Buttons */}
                <div className="flex space-x-4">
                  {editTodo === todo.id ? (
                    <button
                      onClick={() => handleSaveEdit(todo.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditTodo(todo)}
                      className="text-yellow-500 hover:text-yellow-600 transition duration-300"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
