import React, { useState, useEffect } from 'react'
import styles from '../src/styles/Form.module.css'
import InputGroup from './mini-components/InputGroup'
import { handleUpload } from '../firebase/Gallary/GallaryUpload';
import { addImageToDB, getData, deleteImage } from "../firebase/Gallary/dbOperations"
import GallaryCard from "./mini-components/GallaryCard"
function Gallary() {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [images, setImages] = useState([])
    const [url, setUrl] = useState("")

    useEffect(() => {
        // Find all the prefixes and items.
        getData(setImages)
    }, [])

    return (
        <div className='m-t-100'>
            <h1 className='text-center'>Gallary</h1>
            <form>
                <div className="flex-2 justify-center items-center flex-wrap m-t-20">
                    <InputGroup
                        title="Choose a File"
                        type="file"
                        name="file"
                        placeholder=""
                        className={styles.input_file}
                        onChange={(e) => {
                            setFile(e.target.files[0])
                        }}
                        labelClassname={styles.file_label}
                        accept="image/*" />
                    <button
                        onClick={(e) => handleUpload(e, file, url, setUrl, setPercent)}
                        className={`${styles.button_sm} ${styles.button_blue}`}>Add</button>
                    <p>{percent} % done</p>
                    <button className={`${styles.button_sm} ${percent === 100 ? styles.button_purple : "d-none"}`} onClick={(e) => {
                        addImageToDB(e, url, setUrl)
                        getData(setImages)
                        setPercent(0)
                    }} disabled={percent === 100 ? "" : "disabled"}>Upload</button>
                </div>
            </form>
            <section className='m-t-40 flex-2 p-x-16 flex-wrap justify-center'>
                {images.length === 0 ? <h1 className="text-center">No images</h1> :
                    images.map(({ id, imageUrl, imageName }) => {
                        return (
                            <GallaryCard id={id} setImages={setImages} imageName={imageName} imageUrl={imageUrl} key={id} />
                        )
                    })}
            </section>
        </div>
    )
}

export default Gallary