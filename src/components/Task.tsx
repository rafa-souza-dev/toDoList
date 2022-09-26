import iconTrash from '../assets/iconTrash.svg';
import styles from './Task.module.css';

export const Task = () => {
    return (
        <div className={styles.task}>
            <div className={styles.boxLeft}>
                <div className={styles.taskCheckbox}>

                </div>
            </div>
            <div className={styles.boxMid}>
                <p className={styles.taskContent}>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </p>
            </div>
            <div className={styles.boxRight}>
                <img src={iconTrash} alt="Ícone de Lixeira" />
            </div>
        </div>        
    )
}
