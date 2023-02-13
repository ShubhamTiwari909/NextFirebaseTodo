import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getId, addTask, updateTask, deleteTask, getData, getCompleted } from '../../firebase/dbOperations'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Form from '../../components/Form'
import Display from '../../components/Display'
import Toggle from '../../components/mini-components/Toggle'


export default function Home() {
  //states
  const [tokenId, setTokenId] = useState(null);
  const [title, setTitle] = useState("")
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("P1")
  const [deadline, setDeadline] = useState("")
  const [completed, setCompleted] = useState(false)
  const [taskGroup, setTaskGroup] = useState([])
  const [update, setUpdate] = useState(false)
  const [updateId, setUpdateId] = useState(null)
  const [search, setSearch] = useState("");

  // For dark mode
  const [toggle, setToggle] = useState(false)

  const router = useRouter()

  /* Checking if the user is logged in or not. If not, it will redirect to the Login page. */
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

      {/* NAVBAR */}
      <Navbar tokenId={tokenId} />

      <main className={toggle ? "dark-mode" : "light-mode"}>
        <Toggle toggle={toggle} setToggle={setToggle} />
        <section className={`grid_2`}>
          {/* ADD TASK FORM */}
          <Form
            update={update}
            setUpdate={setUpdate}
            title={title}
            setTitle={setTitle}
            task={task}
            setTask={setTask}
            priority={priority}
            setPriority={setPriority}
            deadline={deadline}
            setDeadline={setDeadline}
            addTask={(e) => addTask(e, title, setTitle, task, setTask, priority, setPriority, deadline, setDeadline, completed, setCompleted, setTaskGroup)}
            updateTask={(e) => {
              updateTask(e, title, setTitle, task, setTask, priority, setPriority, deadline, setDeadline, setUpdateId, setUpdate, setTaskGroup, updateId)
              window.scrollTo(0, window.innerHeight)
            }}
          />
          {/* SEARCH FORM */}
          <Search search={search} setSearch={setSearch} />
        </section>

        {/* READ TASKS */}
        <section>
          <Display
            taskGroup={taskGroup}
            setTitle={setTitle}
            setTask={setTask}
            setPriority={setPriority}
            setDeadline={setDeadline}
            setCompleted={setCompleted}
            setTaskGroup={setTaskGroup}
            setUpdate={setUpdate}
            setUpdateId={setUpdateId}
            search={search}
            getId={getId}
            deleteTask={deleteTask}
            getCompleted={getCompleted}
          />
        </section>
      </main>
    </>
  )
}
