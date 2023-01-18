import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import update from './update.js';


function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn react-dnd' },
    { id: 3, text: 'Build a todo app' },
  ])

  const moveTodo = (dragIndex, hoverIndex) => {
    const draggedTodo = todos[dragIndex]
    setTodos(
      update(todos, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedTodo],
        ],
      }),
    )
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          id={todo.id}
          text={todo.text}
          moveTodo={moveTodo}
        />
      ))}
    </div>
  )
}

function Todo({ id, text, index, moveTodo }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'TODO', id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [, drop] = useDrop({
    accept: 'TODO',
    hover(item) {
      if (item.id !== id) {
        moveTodo(item.index, index)
      }
    },
  })

  return (
    <div ref={(node) => drag(drop(node))}>
      {text}
    </div>
  )
}
export default {TodoList, Todo}
