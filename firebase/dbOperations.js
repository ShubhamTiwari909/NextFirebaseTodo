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
export const addTask = (e, task, setTask, setTaskGroup) => {
    e.preventDefault();
    if (task === "") {
        alert("Please enter some value")
    }
    else {
        addDoc(databaseRef, {
            userId: sessionStorage.getItem("uid"),
            task: task
        }).then(() => {
            getData(setTaskGroup)
            setTask("")
        }).catch((err) => {
            console.error(err)
        })
    }

}

// Update task
export const getId = (id, task, setTask, setUpdateId, setUpdate) => {
    setUpdateId(id)
    setTask(task)
    setUpdate(true)
}
/**
 * We're using the `updateDoc` function to update the document with the id of `updateId` in the
 * `TODO` collection with the new task of `task`
 * @param e - the event object
 */
export const updateTask = (e, task, setTask, setUpdateId, setUpdate, setTaskGroup, updateId) => {
    e.preventDefault();
    if (task === "") {
        alert("Please enter some value")
    }
    else {

        const fieldToUpdate = doc(database, "TODO", updateId)
        updateDoc(fieldToUpdate, {
            task: task
        }).then(() => {
            setUpdateId(null)
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