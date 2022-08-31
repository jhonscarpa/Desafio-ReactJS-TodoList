import { Header } from './components/Header'
import styles from './app.module.css'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.Content}>
        <Tasks />
      </div>
    </div>
  )
}

export default App
