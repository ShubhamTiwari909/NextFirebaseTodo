import { useMemo, useContext } from "react";
import { sortTask } from "../methods/Sorting"
import { priorityFilter, searchFilter } from "../methods/SearchFilter"
import styles from "../src/styles/Display.module.css"
import Card from './mini-components/Card'
import { AppContext } from './Context'


function Display() {
    const { taskGroup, search, searchCompleted } = useContext(AppContext)
    const list = useMemo(
        () => taskGroup
            .filter((data) => searchFilter(data, search))
            .filter((data) => priorityFilter(data, searchCompleted))
            .sort((a, b) => sortTask(a, b))
            .map((data) => {
                return (
                    <Card key={data.id} data={data} />
                )
            })
    )
    return (
        <section className={styles.listContainer}>
            <h1>Task List</h1>
            <small className={"h-center font-w-600"}>{search === "" ? "" : "Results for " + search}</small>
            <small className={"h-center font-w-600"}>{searchCompleted === "All" ? "" : "Results for " + searchCompleted}</small>
            <ul className={styles.listTask}>
                {list.length === 0 ? <h2 className="w-full text-center">No Task Found</h2> : list}
            </ul>
        </section>
    )
}


export default Display

