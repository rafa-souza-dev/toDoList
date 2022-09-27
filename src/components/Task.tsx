import { v4 as uuidv4 } from 'uuid';
import vIcon from '../assets/v.svg'
import iconTrash from '../assets/iconTrash.svg';
import styles from './Task.module.css';

export interface TaskProps {
    uuid?: string
    content: string
    isCompleted?: boolean
};

export const Task = (props: TaskProps) => {

    const {
        content,
        isCompleted=false,
        uuid=uuidv4()
    } = props;

    if (!isCompleted) return (
        <div className={styles.task}>
            <div className={styles.boxLeft}>
                <div className={styles.taskCheckbox}>

                </div>
            </div>
            <div className={styles.boxMid}>
                <p className={styles.taskContent}>
                    {content}
                </p>
            </div>
            <div className={styles.boxRight}>
                <img src={iconTrash} alt="Ícone de Lixeira" />
            </div>
        </div>        
    )

    return (
        <div className={styles.taskCompleted}>
            <div className={styles.boxLeft}>
                <div className={styles.taskCompletedCheckbox}>
                    <img src={vIcon} alt="Ícone de verificado" />
                </div>
            </div>
            <div className={styles.boxMid}>
                <p className={styles.taskCompletedContent}>
                    {content}
                </p>
            </div>
            <div className={styles.boxRight}>
                <img src={iconTrash} alt="Ícone de Lixeira" />
            </div>
        </div>
    )
}
