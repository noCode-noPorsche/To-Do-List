import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../types/todo.types'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'

export default function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const doneTodos = todos.filter(todo => todo.done)
  const notDoneTodos = todos.filter(todo => !todo.done)


  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList todos={notDoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList todos={doneTodos} handleDoneTodo={handleDoneTodo} doneTaskList />
      </div>
    </div>
  )
}
