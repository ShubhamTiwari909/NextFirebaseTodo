import Image from 'next/image'
import { useState } from 'react'
import { TbEdit } from "react-icons/tb"
import { MdDeleteSweep } from "react-icons/md"
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs"
import styles from "../../src/styles/Display.module.css"
import greenTick from "../../src/images/green-tick.png"
import redCross from "../../src/images/red-cross.png"

function Card({ data, setTitle, setTask, setPriority, setDeadline, setTaskGroup, setUpdate, setUpdateId, getId, setMenu, deleteTask, getCompleted }) {
    const [accordion, setAccordion] = useState(false)

    const accordionOpen = () => {
        setAccordion(!accordion);
    }
    return (
        <li className='p-relative' style={{ height: accordion ? "280px" : "60px" }}>
            <p className={styles.completed}>{data.completed ? 'Completed' : ''}</p>
            <div className={styles.textGroup} style={{ textDecoration: data.completed ? "line-through" : "" }}>
                <div className="flex-between m-t-5">
                    <h2 className='text-ellipse cursor-pointer flex-between' onClick={accordionOpen}>
                        {data.title}
                        {accordion ? <BsArrowUpCircleFill size="1rem" color="white" /> : <BsArrowDownCircleFill size="1rem" color="white" />}
                    </h2>
                    <div className='p-relative'>
                        <input className={styles.tickCheckbox} type="checkbox" name="complete" onChange={(e) => getCompleted(e, data.id, setTaskGroup)} />
                        <Image src={data.completed ? greenTick : redCross} className={styles.completedIcon} alt="completed icon" />
                    </div>
                </div>
                <div className="flex-between" >
                    <small>Deadline - {data.deadline}</small>
                    <small className={styles.priority_text}>{data.priority}</small>
                </div>
                <p className={styles.description_text}>{data.task}</p>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.button_update} onClick={() => {
                    setMenu(true)
                    getId(data.id, data.title, setTitle, data.task, setTask, data.priority, setPriority, data.deadline, setDeadline, setUpdateId, setUpdate)
                    window.scrollTo(0, 0)
                }} disabled={data.completed ? "disabled" : ""}><TbEdit size="1.2rem" color={data.completed ? "grey" : "white"} /></button>
                <button className={styles.button_delete} onClick={() => {
                    setAccordion(false);
                    deleteTask(data.id, setTaskGroup)
                }}><MdDeleteSweep size="1.2rem" color="rgb(255, 81, 116)" /></button>
            </div>
        </li>
    )
}

export default Card