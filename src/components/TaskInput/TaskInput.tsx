import { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(name)
    setName("")
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const value = e.target.value
    const { value } = e.target //detructuring => value = e.target.value
    setName(value)
  }

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To Do List TypeScript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Caption goes here' value={name} onChange={onChangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
