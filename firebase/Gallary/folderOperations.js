import { addDoc, collection, getDocs } from 'firebase/firestore'
import { database } from "../firebaseConfig";

export const addFolderToDB = (e, folderName,setFolderName) => {
    e.preventDefault();
    const databaseRef = collection(database, `/Todos/FoldersName/${sessionStorage.getItem("uid")}/`)
    addDoc(databaseRef, {
        folderName:folderName
    }).then(() => {
        setFolderName("")
    }).catch((err) => {
        console.error(err)
    })
}

export const getFolders = async (setFolders) => {
    const databaseRef = collection(database, `/Todos/FoldersName/${sessionStorage.getItem("uid")}`)
    await getDocs(databaseRef)
        .then(response => {
            setFolders(response.docs.map(data => {
                return { ...data.data(), id: data.id }
            }))
        })
}


// export const deleteFolder = (id, setFolders, folderName) => {
//     const fieldToDelete = doc(database, `/Todos/FoldersName/${sessionStorage.getItem("uid")}`, id)
//     const storageRef = ref(storage, `/GlobalImages/${sessionStorage.getItem("uid")}/${folderName}`);
//     // Delete the file
//     deleteObject(storageRef).then(() => {
//         console.log("File deleted successfully")
//     }).catch((error) => {
//         console.log("Uh-oh, an error occurred!")
//     });

//     deleteDoc(fieldToDelete, id)
//         .then(() => {
//             getFolders(setFolders)
//         }).catch(err => {
//             console.error(err)
//         })
// }

