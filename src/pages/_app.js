import '@/styles/globals.css'
import Layout from '../../components/Layout'
import { useState } from 'react';
import { AppContext } from "../../components/Context"
import { getId, addTask, updateTask, deleteTask, getData, getCompleted } from '../../firebase/dbOperations'
import PropTypes from "prop-types";
import Navbar from '../../components/Navbar'



export default function App({ Component, pageProps }) {
  // For date input
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);
  //states
  const [tokenId, setTokenId] = useState(null);
  const [title, setTitle] = useState("")
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("P1")
  const [deadline, setDeadline] = useState(date)
  const [completed, setCompleted] = useState(false)
  const [file, setFile] = useState("");
  const [url, setUrl] = useState({ url: "", filename: "" });
  const [percent, setPercent] = useState(0)
  const [taskGroup, setTaskGroup] = useState([])
  const [update, setUpdate] = useState(false)
  const [updateId, setUpdateId] = useState(null)
  const [search, setSearch] = useState("");
  const [searchCompleted, setSearchCompleted] = useState("All");
  const [menu, setMenu] = useState(false)

  return (
    <AppContext.Provider value={{
      tokenId, setTokenId, update, setUpdate, taskGroup, setTaskGroup, title, setTitle, task, setTask,
      priority, setPriority, deadline, setDeadline, file, setFile, percent, setPercent, setUrl, menu,
      setMenu, completed, url, updateId, search, setSearch, searchCompleted, setSearchCompleted,
      setCompleted, setUpdateId, getId, getData, getCompleted, deleteTask, addTask, updateTask,
    }}>
      <div className='fixed top-0 z-99 w-full'>
        <Navbar tokenId={tokenId} />
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}


App.propTypes = {
  tokenId: PropTypes.string,
  setTokenId: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  task: PropTypes.string,
  setTask: PropTypes.func,
  priority: PropTypes.string,
  setPriority: PropTypes.func,
  deadline: PropTypes.string,
  setDeadline: PropTypes.func,
  completed: PropTypes.bool,
  setCompleted: PropTypes.func,
  url: PropTypes.object,
  setUrl: PropTypes.func,
  percent: PropTypes.number,
  setPercent: PropTypes.func,
  taskGroup: PropTypes.array,
  setTaskGroup: PropTypes.func,
  update: PropTypes.bool,
  setUpdate: PropTypes.func,
  updateId: PropTypes.string,
  setUpdateId: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.string,
  searchCompleted: PropTypes.string,
  setSearchCompleted: PropTypes.func,
  menu: PropTypes.bool,
  setMenu: PropTypes.func,
  getId: PropTypes.func,
  getData: PropTypes.func,
  addTask: PropTypes.func,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
  getCompleted: PropTypes.func,
}