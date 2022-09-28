import { v4 as uuidv4 } from 'uuid';
import vIcon from '../assets/v.svg'
import iconTrash from '../assets/iconTrash.svg';
import styles from './Task.module.css';
import { Trash } from "phosphor-react";

export interface TaskProps {
    uuid?: string
    content: string
    isCompleted?: boolean
    deleteTask: (uuid: string) => void
    editTask: (uuid: string) => void
};

export const Task = (props: TaskProps) => {

    const {
        content,
        isCompleted=false,
        uuid=uuidv4(),
        deleteTask,
        editTask
    } = props;

    if (!isCompleted) return (
        <div className={styles.task}>
            <div className={styles.boxLeft}>
                <div onClick={() => editTask(uuid)} className={styles.taskCheckbox}>

                </div>
            </div>
            <div className={styles.boxMid}>
                <p className={styles.taskContent}>
                    {content}
                </p>
            </div>
            <button className={styles.boxRight} title="Deletar Tarefa" onClick={() => deleteTask(uuid)}>
                <Trash size={16}/>
            </button>
        </div>        
    )

    return (
        <div className={styles.taskCompleted}>
            <div className={styles.boxLeft}>
                <div className={styles.taskCompletedCheckbox}>
                    <img onClick={() => editTask(uuid)} src={vIcon} alt="Ícone de verificado" />
                </div>
            </div>
            <div className={styles.boxMid}>
                <p className={styles.taskCompletedContent}>
                    {content}
                </p>
            </div>
            <button className={styles.boxRight} title="Deletar Tarefa" onClick={() => deleteTask(uuid)}>
                <Trash size={16}/>
            </button>
        </div>
    )
}
