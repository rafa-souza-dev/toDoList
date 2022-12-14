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

  function getNumberOfCompletedTasks() {
    let completedTasks = tasks.filter(task => task.isCompleted);

    return completedTasks.length;
  }

  function renderNumberOfCompletedTasks() {
    if (tasks.length == 0) return "0";

    return `${getNumberOfCompletedTasks()} de ${tasks.length}`;
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      uuid: uuidv4(),
      isCompleted: false,
      content: taskTextInput,
      deleteTask: handleDeleteTask,
      editTask: handleEditTask
    }]);

    setTaskTextInput('');
  }

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskTextInput(event.target.value);
  }

  function handleDeleteTask(uuid: string) {
    setTasks(tasks.filter(task => task.uuid !== uuid));
  }

  function editTaskStatus(task: TaskProps, uuid: string) {
    if (task.uuid === uuid) {
      task.isCompleted = !task.isCompleted;
    }
    
    return task
  }

  function handleEditTask(uuid: string) {
    setTasks(tasks.map(task => editTaskStatus(task, uuid)));
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!")
  }

  const isTaskTextInputEmpty = taskTextInput.length === 0;

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
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button disabled={isTaskTextInputEmpty}>
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
                  deleteTask={handleDeleteTask}
                  editTask={handleEditTask}
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
