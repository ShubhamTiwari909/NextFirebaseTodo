import React from 'react'
import { TbEdit } from "react-icons/tb"
import { MdDeleteSweep } from "react-icons/md"
import styles from "../src/styles/Display.module.css"

function Display({ taskGroup, setTitle, setTask,setPriority, setTaskGroup, setUpdate, setUpdateId, search, getId, deleteTask}) {
    return (
        <div className={styles.listContainer}>
            <h1>Task List</h1>
            <ul className={styles.listTask}>
                {taskGroup.length === 0 ? <h2>No Task Found</h2> : taskGroup.filter(data => {
                    if (search === "" || search.startsWith(" ")) {
                        return data
                    }
                    else {
                        return data.title.toUpperCase().startsWith(search.toUpperCase())
                    }
                }).sort((a, b) => {
                    const taskA = a.title.toUpperCase(); // ignore upper and lowercase
                    const taskB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (taskA < taskB) {
                        return -1;
                    }
                    if (taskA > taskB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                }).map((data) => {
                    return (
                        <li key={data.id}>
                            <div className={styles.textGroup}>
                                <h2>{data.title}</h2>
                                <p className={styles.priority_text}>Priority - {data.priority}</p>
                                <p className={styles.description_text}>{data.task}</p>
                            </div>
                            <div className={styles.buttonGroup}>
                                <button className={styles.button_update} onClick={() =>  {
                                    getId(data.id, data.title, setTitle, data.task, setTask,data.priority,setPriority, setUpdateId, setUpdate)
                                    window.scrollTo(0, 0)
                                }}><TbEdit size="1.2rem" color="white" /></button>
                                <button className={styles.button_delete} onClick={() => deleteTask(data.id, setTaskGroup)}><MdDeleteSweep size="1.2rem" color="rgb(255, 81, 116)" /></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Display

