import {useState} from 'react'
import styles from '../src/styles/Form.module.css'
import InputGroup from './mini-components/InputGroup'
import SelectField from './mini-components/SelectField'

function Form({ update,setUpdate, title, setTitle, task, setTask,priority,setPriority, addTask, updateTask }) {
 

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
                <SelectField 
                className={styles.select_md}
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                options={["P1","P2","P3","P4","P5"]} />
            </form>
            <div className="h-center m-t-20">
                {update
                    ?
                    <div className="grid_2">
                        <button className={styles.button_sm} onClick={updateTask}>Update</button>
                        <button className={`${styles.button_sm} ${styles.button_cancel}`} onClick={() => {
                            setTitle("")
                            setTask("")
                            setUpdate(false)
                        }}>Cancel</button>
                    </div>
                    :
                    <button className={styles.button_sm} onClick={addTask}>Add</button>}
            </div>
        </div>
    )
}

export default Form