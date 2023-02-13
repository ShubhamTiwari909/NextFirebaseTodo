import styles from "../src/styles/Display.module.css"
import Card from './mini-components/Card'

function Display({ taskGroup, setTitle, setTask, setPriority, setDeadline, setTaskGroup, setUpdate, setUpdateId, search, searchCompleted, getId,setMenu, deleteTask, getCompleted }) {
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
                }).filter(data => {
                    if (searchCompleted === "Completed") {
                        return data.completed === true
                    }
                    if (searchCompleted === "To Do") {
                        return data.completed === false
                    }
                    else {
                        return data
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
                        <Card
                            key={data.id}
                            data={data}
                            setTitle={setTitle}
                            setTask={setTask}
                            setPriority={setPriority}
                            setDeadline={setDeadline}
                            setTaskGroup={setTaskGroup}
                            setUpdate={setUpdate}
                            setUpdateId={setUpdateId}
                            getId={getId}
                            setMenu={setMenu}
                            deleteTask={deleteTask}
                            getCompleted={getCompleted} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Display

