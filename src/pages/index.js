import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

import { getId, addTask, updateTask, deleteTask, getData } from '../../firebase/dbOperations'

export default function Home() {

  //states
  const [tokenId, setTokenId] = useState("null");
  const [task, setTask] = useState("")
  const [taskGroup, setTaskGroup] = useState([])
  const [update, setUpdate] = useState(false)
  const [updateId, setUpdateId] = useState(null)

  //router
  const router = useRouter()

  /* Checking if the user is logged in or not. If not, it will redirect to the register page. */
  useEffect(() => {
    let token = sessionStorage.getItem("Token")
    setTokenId(token)
    if (token) {
      getData(setTaskGroup)
    }
    if (!token) {
      router.push("/login")
    }
  }, [tokenId])


  return (
    <>
      <Head>
        <title>Next Firebase Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        {tokenId ? <button className={styles.buttonRed}
          onClick={() => {
            sessionStorage.removeItem("Token")
            router.push("/login")
          }}>Logout</button> : ""}
        {!tokenId ? <Link href="/login">Login</Link> : ""}
      </nav>
      <main className={styles.container}>
        {/* ADD TASK FORM */}
        <section>
          <form className={styles.todoForm}>
            <label>Task</label>
            <input
              type="text"
              name="task"
              placeholder="Task"
              className={styles.input_md}
              value={task}
              onChange={(e) => setTask(e.target.value)} />
            {update
              ?
              <button className={styles.button_sm} onClick={(e) => updateTask(e, task, setTask, setUpdateId, setUpdate, setTaskGroup, updateId)}>Update</button>
              :
              <button className={styles.button_sm} onClick={(e) => addTask(e, task, setTask, setTaskGroup)}>Add</button>}
          </form>
        </section>

        {/* READ TASKS */}
        <section className={styles.listContainer}>
          <h1>Task List</h1>
          <ul className={styles.listTask}>
            {taskGroup.length === 0 ? <h2>No Task Found</h2> : taskGroup.map((data) => {
              return (
                <li key={data.id}>
                  <p>{data.task}</p>
                  <div className={styles.buttonGroup}>
                    <button className={styles.button_update} onClick={() => getId(data.id, data.task, setTask, setUpdateId, setUpdate)}>Update</button>
                    <button className={styles.button_delete} onClick={() => deleteTask(data.id, setTaskGroup)}>Delete</button>
                  </div>
                </li>
              )
            }).sort()}
          </ul>
        </section>
      </main>
    </>
  )
}
