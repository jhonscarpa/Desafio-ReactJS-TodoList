import styles from './styles.module.css'
import rocketIcon from '../../assets/rocket.svg'

export function Header() {
  return (
    <div className={styles.Container}>
      <img src={rocketIcon} alt="Icone de um foguete" />
      <strong className={styles.todoText}>
        to<span>do</span>
      </strong>
    </div>
  )
}
