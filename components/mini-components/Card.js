import Image from 'next/image'
import { useState, useRef } from 'react'
import PropTypes from "prop-types";
import { TbEdit } from "react-icons/tb"
import { MdDeleteSweep } from "react-icons/md"
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs"
import styles from "../../src/styles/Card.module.css"
import greenTick from "../../src/images/green-tick.png"
import redCross from "../../src/images/red-cross.png"

function Card({ data, setTitle, setTask, setPriority, setDeadline, setUrl, setTaskGroup, setUpdate, setUpdateId, getId, setMenu, deleteTask, getCompleted }) {
    const [accordion, setAccordion] = useState(false)
    const listRef = useRef(null);
    const accordionOpen = () => {
        setAccordion(!accordion);
    }

    return (
        <li className='p-relative' style={{ maxHeight: accordion ? "500px" : "60px" }} ref={listRef}>
            <p className={styles.completed}>{data.completed ? 'Completed' : ''}</p>
            <div className={styles.textGroup} style={{ textDecoration: data.completed ? "line-through" : "" }}>
                <div className="flex-between-center">
                    <h2 className='text-ellipse cursor-pointer flex-between-center' onClick={accordionOpen}>
                        {data.title}
                    </h2>
                    <div className='p-relative m-r-16'>
                        <input className={styles.tickCheckbox} type="checkbox" name="complete" onChange={(e) => getCompleted(e, data.id, setTaskGroup)} />
                        <Image src={data.completed ? greenTick : redCross} className={styles.completedIcon} alt="completed icon" />
                    </div>
                    <div className="p-absolute right-5 cursor-pointer" onClick={accordionOpen}>{accordion ? <BsArrowUpCircleFill size="1rem" color="white" /> : <BsArrowDownCircleFill size="1rem" color="white" />}</div>
                </div>

                <div className="flex-between-center" >
                    <small>Deadline - {data.deadline}</small>
                    <small className={styles.priority_text}>{data.priority}</small>
                </div>
                <div>
                    <Image
                        src={data.url}
                        alt="Card Banner"
                        className={styles.img_fluid}
                        width={200}
                        height={200}
                        unoptimized
                        style={{ filter: data.completed ? "grayscale(100%)" : "" }} />
                </div>
                <p className={styles.description_text}>{data.task}</p>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.button_update} onClick={() => {
                    setMenu(true)
                    getId(data.id, data.title, setTitle, data.task, setTask, data.priority, setPriority, data.deadline, setDeadline, data.url, setUrl, setUpdateId, setUpdate)
                }} disabled={data.completed ? "disabled" : ""}><TbEdit size="1.2rem" color={data.completed ? "grey" : "white"} /></button>
                <button className={styles.button_delete} onClick={() => {
                    setAccordion(false);
                    deleteTask(data.id, setTaskGroup, data.filename)
                }}><MdDeleteSweep size="1.2rem" color="rgb(255, 81, 116)" /></button>
            </div>
        </li>
    )
}

Card.propTypes = {
    data: PropTypes.object,
    setTitle: PropTypes.func,
    setTask: PropTypes.func,
    setPriority: PropTypes.func,
    setDeadline: PropTypes.func,
    setTaskGroup: PropTypes.func,
    setUpdate: PropTypes.func,
    setUpdateId: PropTypes.func,
    getId: PropTypes.func,
    setMenu: PropTypes.func,
    deleteTask: PropTypes.func,
    getCompleted: PropTypes.func,

}

export default Card