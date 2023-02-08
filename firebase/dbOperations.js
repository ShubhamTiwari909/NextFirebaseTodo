import { doc, addDoc, collection, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { database } from "../firebase/firebaseConfig"


// database reference
export const databaseRef = collection(database, "TODO")
//  CRUD methods
/**
 * It takes the event, prevents the default action, adds a document to the database, then gets the
 * data from the database and sets the task to an empty string
 * @param e - the event object
 */
export const addTask = (e,title,setTitle, task, setTask, setTaskGroup) => {
    e.preventDefault();
    if (title === "" || title.startsWith(" ") || task === "" || task.startsWith(" ")) {
        alert(`Please Fill both the fields`)
    }
    else {
        addDoc(databaseRef, {
            userId: sessionStorage.getItem("uid"),
            title:title,
            task: task
        }).then(() => {
            getData(setTaskGroup)
            setTask("")
            setTitle("")
        }).catch((err) => {
            console.error(err)
        })
    }

}

// Update task
export const getId = (id,title,setTitle, task, setTask, setUpdateId, setUpdate) => {
    setUpdateId(id)
    setTitle(title)
    setTask(task)
    setUpdate(true)
}
/**
 * We're using the `updateDoc` function to update the document with the id of `updateId` in the
 * `TODO` collection with the new task of `task`
 * @param e - the event object
 */
export const updateTask = (e,title,setTitle, task, setTask, setUpdateId, setUpdate, setTaskGroup, updateId) => {
    e.preventDefault();
    if (title === "" || title.startsWith(" ") || task === "" || task.startsWith(" ")) {
        alert(`Please Fill both the fields`)
    }
    else {

        const fieldToUpdate = doc(database, "TODO", updateId)
        updateDoc(fieldToUpdate, {
            title:title,
            task: task
        }).then(() => {
            setUpdateId(null)
            setTitle("")
            setTask("")
            setUpdate(false)
            getData(setTaskGroup)
        }).catch((err) => {
            console.error(err)
        })
    }
}

/**
 * It gets the data from the database and sets the state of the taskGroup to the data that was
 * retrieved
 */
export const getData = async (setTaskGroup) => {
    await getDocs(databaseRef)
        .then(response => {
            setTaskGroup(response.docs.filter(data => {
                return data.data().userId === sessionStorage.getItem("uid")
            }).map(data => {
                return { ...data.data(), id: data.id }
            }))
        })
}

// Delete method
/**
 * It deletes a task from the database.
 */
export const deleteTask = (id, setTaskGroup) => {
    const fieldToUpdate = doc(database, "TODO", id)
    deleteDoc(fieldToUpdate, id)
        .then(() => {
            getData(setTaskGroup)
        }).catch(err => {
            console.error(err)
        })
}