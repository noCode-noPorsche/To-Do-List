import { useState } from 'react'
import { Todo } from '../../types/todo.types'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
  editTodo: (name: string) => void
  finishEditTodo: () => void
  currentTodo: Todo | null
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName("")
    } else {
      addTodo(name)
      setName("")
    }
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const value = e.target.value
    const { value } = e.target //detructuring => value = e.target.value
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To Do List TypeScript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Caption goes here' value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput} />
        <button type='submit'>
          {currentTodo ? "✔️" : "➕"}
        </button>
      </form>
    </div>
  )
}
