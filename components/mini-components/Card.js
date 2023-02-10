import { useState } from 'react'
import { TbEdit } from "react-icons/tb"
import { MdDeleteSweep } from "react-icons/md"
import styles from "../../src/styles/Display.module.css"

function Card({ data, setTitle, setTask, setPriority, setDeadline, setTaskGroup, setUpdate, setUpdateId, getId, deleteTask }) {
    const [accordion, setAccordion] = useState(false)

    const accordionOpen = () => {
        setAccordion(!accordion);
    }
    return (
        <li style={{ height: accordion ? "280px" : "60px" }}>
            <div className={styles.textGroup}>
                <h2 className='text-ellipse' onClick={accordionOpen}>{data.title}</h2>
                <div className="flex-between">
                    <small>Deadline - {data.deadline}</small>
                    <small className={styles.priority_text}>{data.priority}</small>
                </div>
                <p className={styles.description_text}>{data.task}</p>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.button_update} onClick={() => {
                    getId(data.id, data.title, setTitle, data.task, setTask, data.priority, setPriority, data.deadline, setDeadline, setUpdateId, setUpdate)
                    window.scrollTo(0, 0)
                }}><TbEdit size="1.2rem" color="white" /></button>
                <button className={styles.button_delete} onClick={() => {
                    setAccordion(false);
                    deleteTask(data.id, setTaskGroup)
                }}><MdDeleteSweep size="1.2rem" color="rgb(255, 81, 116)" /></button>
            </div>
        </li>
    )
}

export default Card