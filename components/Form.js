import { useContext } from 'react'
import styles from '../src/styles/Form.module.css'
import InputGroup from './mini-components/InputGroup'
import SelectField from './mini-components/SelectField'
import { handleUpload } from "../methods/UploadImage"
import { AppContext } from './Context'

function Form() {
    const { update, setUpdate, title, setTitle, task, setTask, priority, setPriority, deadline, setDeadline, file, setFile, setUrl, percent, setPercent, setMenu, completed, setCompleted, url,
        setUpdateId,updateId, setTaskGroup, addTask, updateTask } = useContext(AppContext);
    return (
        <div>
            <form className={styles.todoForm}>
                <InputGroup
                    title="Title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    className={styles.input_md}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <InputGroup
                    title="Task"
                    type="text"
                    name="task"
                    placeholder="Task"
                    className={styles.input_md}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <InputGroup
                    title="Deadline"
                    type="date"
                    name="deadline"
                    placeholder=""
                    className={styles.input_md}
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <SelectField
                    className={styles.select_md}
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    options={["P1", "P2", "P3", "P4", "P5"]} />
            </form>
            <div className="flex-2 justify-center items-center flex-wrap m-t-20">
                <InputGroup
                    title="Choose a File"
                    type="file"
                    name="file"
                    placeholder=""
                    className={styles.input_file}
                    onChange={(e) => {
                        setFile(e.target.files[0])
                    }}
                    labelClassname={styles.file_label}
                    accept="image/*" />
                <button onClick={() => handleUpload(file, setUrl, setPercent)} className={`${styles.button_sm} ${styles.button_blue}`}>Upload</button>
                <p>{percent} % done</p>
            </div>
            <div className="h-center m-t-40">
                {update
                    ?
                    <div className="flex-2 justify-center flex-wrap p-x-16">
                        <button className={`${styles.button_sm} ${styles.button_purple}`} onClick={(e) => {
                            updateTask(e, title, setTitle, task, setTask, priority, setPriority, deadline, setDeadline, url, setUrl, setPercent, setUpdateId, setUpdate, setTaskGroup, updateId)
                            setMenu(false)
                        }}>Update</button>
                        <button className={`${styles.button_sm} ${styles.button_cancel}`} onClick={() => {
                            setMenu(false)
                            setTitle("")
                            setTask("")
                            setPriority("P1")
                            setDeadline("")
                            setUpdate(false)
                        }}>Cancel</button>
                    </div>
                    :
                    <button className={`${styles.button_sm} ${styles.button_purple}`} onClick={(e) => {
                        addTask(e, title, setTitle, task, setTask, priority, setPriority, deadline, setDeadline, completed, setCompleted, url, setUrl, setPercent, setTaskGroup)
                        setMenu(false)
                    }}>Add</button>}
            </div>
        </div>
    )
}

export default Form