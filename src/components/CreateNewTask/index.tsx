import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './styles.module.css'

interface IPropsCreateNewComment {
  createNewTask: Function
}

export function CreateNewTask({ createNewTask }: IPropsCreateNewComment) {
  const [newTextTask, setNewTextTask] = useState<string>('')

  function handleOnSubmitForm(event: FormEvent) {
    event.preventDefault()
    createNewTask({
      createdAt: new Date(),
      id: uuidv4(),
      content: newTextTask,
      finish: false,
    })
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTextTask(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <form className={styles.FormContainer} onSubmit={handleOnSubmitForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewCommentChange}
        required
        onInvalid={handleNewCommentInvalid}
      />
      <button>
        Criar <PlusCircle size="1rem" color="var(--gray-100)" weight="bold" />
      </button>
    </form>
  )
}
