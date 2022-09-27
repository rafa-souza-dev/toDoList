import React, { FormEvent, useState, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clipboard from './assets/clipboard.svg';
import logo from './assets/rocket.svg';
import plus from './assets/plus.svg';
import styles from './App.module.css';
import { Task, TaskProps } from './components/Task';

import './global.css';

function App() {

  const [taskTextInput, setTaskTextInput] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function getNumberOfCompletedTasks () {
    let completedTasks = tasks.filter(task => task.isCompleted);

    return completedTasks.length;
  }

  function renderNumberOfCompletedTasks () {
    if (tasks.length == 0) return "0";

    return `${getNumberOfCompletedTasks()} de ${tasks.length}`;
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      uuid: uuidv4(),
      isCompleted: false,
      content: taskTextInput,
    }]);

    setTaskTextInput('');
  }

  function handleChangeNewTask (event: ChangeEvent<HTMLInputElement>) {
    setTaskTextInput(event.target.value);
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
          <form onSubmit={handleCreateNewTask}>
            <input 
              type="text" 
              placeholder='Adicione uma nova tarefa'
              value={taskTextInput}
              onChange={handleChangeNewTask}
            />
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
                <span className={styles.quantityTasks}>{renderNumberOfCompletedTasks()}</span>
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
                  key={task.uuid}
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
