import { useState, useEffect } from "react";
import Link from "next/link";
import InputGroup from "./mini-components/InputGroup";
import styles from '@/styles/Gallary.module.css'
import formStyles from '@/styles/Form.module.css'
import { getFolders, addFolderToDB } from "../firebase/Gallary/folderOperations";
import { AiTwotoneFolderOpen } from "react-icons/ai"

function FolderNavbar() {
    const [folder, setFolder] = useState("");
    const [folders, setFolders] = useState([])

    useEffect(() => {
        getFolders(setFolders)
    }, [])

    return (
        <>
            <div className={`${styles.foldersNav}`}>
                <form className="flex-2 flex-wrap justify-center items-center">
                    <InputGroup
                        title="Folder Name"
                        type="text"
                        name="Folder name"
                        placeholder="Enter Folder Name"
                        className={formStyles.input_sm}
                        value={folder}
                        onChange={(e) => setFolder(e.target.value)}
                    />
                    <button onClick={(e) => {
                        addFolderToDB(e, folder, setFolder)
                        getFolders(setFolders)
                    }} className={`${formStyles.button_sm} ${formStyles.button_blue}`}>Add</button>
                </form>
                <ul className={styles.foldersList}>
                    <li className={`${styles.folderLink}`}>
                        <Link href={`/folders/default`} className="text-black flex gap-1">
                            <AiTwotoneFolderOpen color="black" size="1.2rem" /> Default
                        </Link>
                    </li>
                    {folders.map(({ id, folderName }) => {
                        return (
                            <li key={id} className={`${styles.folderLink}`}>
                                <Link href={`/folders/${folderName}`} className={`text-black flex gap-1`}><AiTwotoneFolderOpen color="black" size="1.2rem" /> {folderName.slice(0, 10)}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default FolderNavbar