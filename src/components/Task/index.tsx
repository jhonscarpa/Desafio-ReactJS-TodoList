import { CheckCircle, Trash } from 'phosphor-react'
import styles from './styles.module.css'

interface Task {
  id: string
  createdAt: Date
  content: string
  finish: boolean
}

interface IPropsTask {
  task: Task
  onDeleteTask: (id: string) => void
  onFinishTask: (id: string) => void
}

export function Task({ task, onDeleteTask, onFinishTask }: IPropsTask) {
  function handleDeleteTask() {
    onDeleteTask(task.id)
  }
  function handleFinishTask(id: string) {
    onFinishTask(id)
  }

  return (
    <div className={styles.Container}>
      <div>
        <button
          className={styles.finishTask}
          onClick={() => handleFinishTask(task.id)}
        >
          {task.finish ? (
            <CheckCircle
              size={20}
              weight="fill"
              className={styles.iconFinish}
         
            />
          ) : (
            <div />
          )}
        </button>

        <p
          className={`${styles.contentText} ${
            task.finish ? styles.finishTaskText : ''
          }`}
        >
          {task.content}
        </p>
      </div>
      <button
        title="Deletar tarefa"
        onClick={handleDeleteTask}
        className={styles.trash}
      >
        <Trash />
      </button>
    </div>
  )
}
