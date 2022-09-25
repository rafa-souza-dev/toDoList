import clipboard from './assets/clipboard.svg';
import logo from './assets/rocket.svg';
import plus from './assets/plus.svg';
import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <header className={styles.mainHeader}>
        <img src={logo} alt="Logo do Foguete" />
        <p className={styles.blueText}>to</p>
        <p className={styles.purpleText}>do</p>
      </header>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
              Criar
              <img src={plus} alt="" />
            </button>
          </form>
          <div className={styles.tasksInfo}>
            <div>
              <p className={styles.blueText}>Tarefas criadas</p>
              <div className={styles.quantityBorder}>
                <span className={styles.quantityTasks}>0</span>
              </div>
            </div>
            <div>
              <p className={styles.purpleText}>Concluídas</p>
              <div className={styles.quantityBorder}>
                <span className={styles.quantityTasks}>53 de 100</span>
              </div>
            </div>
          </div>
          <div className={styles.emptyListTasks}>
            <img src={clipboard} />
            <strong>
              Você ainda não tem tarefas cadastradas
            </strong>
            <span>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
