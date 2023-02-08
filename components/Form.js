import React from 'react'
import styles from '../src/styles/Form.module.css'

function Form({ update, title, setTitle, task, setTask, addTask, updateTask }) {
    return (
        <div>
            <form className={styles.todoForm}>
                <div className={styles.formGroup}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="task"
                        placeholder="Task"
                        className={styles.input_md}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />

                </div>
                <div className={styles.formGroup}>
                    <label>Task</label>
                    <input
                        type="text"
                        name="task"
                        placeholder="Task"
                        className={styles.input_md}
                        value={task}
                        onChange={(e) => setTask(e.target.value)} />

                </div>
            </form>
            <div className="h-center m-t-20">
                {update
                    ?
                    <button className={styles.button_sm} onClick={updateTask}>Update</button>
                    :
                    <button className={styles.button_sm} onClick={addTask}>Add</button>}
            </div>
        </div>
    )
}

export default Form