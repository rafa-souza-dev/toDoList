import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clipboard from './assets/clipboard.svg';
import logo from './assets/rocket.svg';
import plus from './assets/plus.svg';
import styles from './App.module.css';
import { Task, TaskProps } from './components/Task';

import './global.css';

function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      uuid: uuidv4(),
      content: "Tarefinha"
    },
    {
      uuid: uuidv4(),
      content: "Tarefinha"
    },
    {
      uuid: uuidv4(),
      content: "Tarefinha",
      isCompleted: true
    },
    {
      uuid: uuidv4(),
      content: "Tarefinha",
      isCompleted: true
    },
    {
      uuid: uuidv4(),
      content: "Tarefinha",
      isCompleted: true
    },
    {
      uuid: uuidv4(),
      content: "Tarefinha",
      isCompleted: true
    },
    {
      uuid: uuidv4(),
      content: "Tarefinha",
      isCompleted: true
    },
  ]);

  function getNumberOfCompletedTasks () {
    let completedTasks = tasks.filter(task => task.isCompleted);

    return completedTasks.length;
  }

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
                <span className={styles.quantityTasks}>{tasks.length}</span>
              </div>
            </div>
            <div>
              <p className={styles.purpleText}>Concluídas</p>
              <div className={styles.quantityBorder}>
                <span className={styles.quantityTasks}>{getNumberOfCompletedTasks()} de {tasks.length}</span>
              </div>
            </div>
          </div>
          {
            tasks.length == 0 ?
            <div className={styles.emptyListTasks}>
              <img src={clipboard} />
              <strong>
                Você ainda não tem tarefas cadastradas
              </strong>
              <span>
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
            :
            <div className={styles.nonEmptyListTasks}>
              {tasks.map(task => (
                <Task 
                  uuid={task.uuid}
                  content={task.content}
                  isCompleted={task.isCompleted}
                />
              ))}
            </div>
          }
        </div>
      </main>
    </div>
  )
}

export default App
