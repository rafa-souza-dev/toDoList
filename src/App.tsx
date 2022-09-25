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

      <main>
        <div className={styles.wrapper}>
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
              Criar
              <img src={plus} alt="" />
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
