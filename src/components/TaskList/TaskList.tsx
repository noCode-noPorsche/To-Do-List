import { useState } from 'react'
import styles from './taskList.module.scss'
import { Todo } from '../../types/todo.types'


interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo } = props

  const onChangeCheckbox = (idTodo: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, e.target.checked)
  }



  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? "Hoàn Thành" : "Chưa Hoàn Thành"}</h2>
      <div className={styles.tasks}>
        {todos.map(todo => (
          <div className={styles.task} key={todo.id}>
            <input type='checkbox' className={styles.taskCheckbox}
              checked={todo.done}
              onChange={onChangeCheckbox(todo.id)} />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ""}`}>
              {todo.name}
            </span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn}>🖌️</button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
