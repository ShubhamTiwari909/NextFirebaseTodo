import Image from 'next/image'
import { useState, useRef, useContext } from 'react'
import PropTypes from "prop-types";
import { TbEdit } from "react-icons/tb"
import { MdDeleteSweep } from "react-icons/md"
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs"
import { BiCloudDownload } from "react-icons/bi"
import * as htmlToImage from 'html-to-image';
import styles from "@/styles/Card.module.css"
import greenTick from "../../src/images/green-tick.png"
import redCross from "../../src/images/red-cross.png"
import { AppContext } from '../Context'
import NoImage from "../../src/images/no-image.jpg"

function Card({ data }) {
    const { setTitle, setTask, setPriority, setDeadline, setUrl, setTaskGroup, setUpdate, setUpdateId, getId, setMenu, deleteTask, getCompleted } = useContext(AppContext)

    const [accordion, setAccordion] = useState(false)
    const [hideButtons, setHideButtons] = useState(false)
    const listRef = useRef(null);
    const accordionOpen = () => {
        setAccordion(!accordion);
    }

    const downloadImage = async (filename) => {
        const dataUrl = await htmlToImage.toPng(listRef.current);
        // download image
        const link = document.createElement('a');
        link.download = `${filename}`;
        link.href = dataUrl;
        link.click();
    }

    return (
        <li className='relative' style={{ maxHeight: accordion ? "500px" : "60px" }} ref={listRef}>
            <p className={styles.completed}>{data.completed ? 'Completed' : ''}</p>
            <div className={styles.textGroup} style={{ textDecoration: data.completed ? "line-through" : "" }}>
                <div className="flex justify-between items-center gap-4">
                    <h2 className='text-ellipse cursor-pointer flex justify-between items-center gap-4' onClick={accordionOpen}>
                        {data.title}
                    </h2>
                    <div className='relative isolate mr-4'>
                        <input className={styles.tickCheckbox} type="checkbox" name="complete" onChange={(e) => getCompleted(e, data.id, setTaskGroup)} />
                        <Image src={data.completed ? greenTick : redCross} className={styles.completedIcon} alt="completed icon" />
                    </div>
                    <div className="absolute right-1.5 cursor-pointer" onClick={accordionOpen}>{accordion ? <BsArrowUpCircleFill size="1rem" color="white" /> : <BsArrowDownCircleFill size="1rem" color="white" />}</div>
                </div>

                <div className="flex justify-between items-center gap-4" >
                    <small>Deadline - {data.deadline}</small>
                    <small className={styles.priority_text}>{data.priority}</small>
                </div>
                <Image
                    src={data.url === "" ? NoImage : data.url}
                    alt="Card Banner"
                    className={`object-fill rounded-lg w-full h-40`}
                    width={200}
                    height={200}
                    unoptimized
                    style={{ filter: data.completed ? "grayscale(100%)" : "" }} />
                <p className={`${styles.description_text} text-sm`}>{data.task}</p>
            </div>
            <div className={`${styles.buttonGroup}`} style={{ display: hideButtons ? "none" : "" }}>
                <button className={styles.button_update} onClick={() => {
                    setMenu(true)
                    getId(data.id, data.title, setTitle, data.task, setTask, data.priority, setPriority, data.deadline, setDeadline, data.url, data.filename, setUrl, setUpdateId, setUpdate)
                }} disabled={data.completed ? "disabled" : ""}><TbEdit size="1.2rem" color={data.completed ? "grey" : "white"} /></button>
                <button className={styles.button_delete} onClick={() => {
                    setAccordion(false);
                    deleteTask(data.id, setTaskGroup, data.filename)
                }}><MdDeleteSweep size="1.2rem" color="rgb(255, 81, 116)" /></button>
                <button onClick={() => {
                    setHideButtons(true)
                    downloadImage(data.filename)
                    setTimeout(() => {
                        setHideButtons(false);
                    }, 1000);
                }} className={styles.button_download}><BiCloudDownload /></button>
            </div>
        </li>
    )
}

Card.propTypes = {
    data: PropTypes.object,
}

export default Card