import { useState } from 'react'
import { CreateNewTask } from '../CreateNewTask'
import { Task } from '../Task'
import styles from './styles.module.css'
import noDataImg from '../../assets/noData.svg'

interface IPropsTask {
  id: string
  createdAt: Date
  content: string
  finish: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<IPropsTask[]>([])

  function handleCreateNewTask(data: IPropsTask) {
    setTasks([data, ...tasks])
  }

  function handleDeleteTask(id: string) {
    const filterTasksOneDelete = tasks.filter(task => task.id !== id)
    setTasks(filterTasksOneDelete)
  }

  function handleFinishTask(id: string) {
    const taskIndex = tasks.findIndex(task => task.id === id)
    let tempTasks = [...tasks]
    if (taskIndex !== -1) {
      tempTasks[taskIndex].finish = !tempTasks[taskIndex].finish
      setTasks(tempTasks)
    }
  }

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.finish) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <div className={styles.Container}>
      <CreateNewTask createNewTask={handleCreateNewTask} />
      <main>
        <header>
          <strong className={styles.taskCreated}>
            Tarefas criadas
            <span>{tasks.length}</span>
          </strong>
          <strong className={styles.taskFinish}>
            Concluídas
            <span>
              {tasks.length > 0 ? `${tasksCompleted} de ${tasks.length} ` : '0'}
            </span>
          </strong>
        </header>
        <div className={styles.contentTasks}>
          {tasks.length > 0 ? (
            tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onFinishTask={handleFinishTask}
              />
            ))
          ) : (
            <div className={styles.noDataContainer}>
              <img
                src={noDataImg}
                alt="Ícone de uma prancheta indicando que não há dados ainda"
              />
              <div className={styles.noDataContent}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
