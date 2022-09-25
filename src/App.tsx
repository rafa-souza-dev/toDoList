import logo from './assets/rocket.svg';
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
    </div>
  )
}

export default App
