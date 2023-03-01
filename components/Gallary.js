import React, { useState, useEffect } from 'react'
import { getData } from "../firebase/Gallary/dbOperations"
import GallaryCard from "./mini-components/GallaryCard"
import GallaryForm from "./mini-components/GallaryForm"
import styles from "@/styles/Gallary.module.css"


function Gallary({folderName}) {
    const [images, setImages] = useState([])
    const [overlay, setOverlay] = useState(false)

    useEffect(() => {
        // Find all the prefixes and items.
        getData(setImages,folderName)
    }, [folderName])

    return (
        <>
            <div className={`${overlay ? styles.overlay : ''}`}></div>
            <div>
                <h1 className='text-center'>{folderName === "default"  ? "Default" : folderName}</h1>
                <GallaryForm setImages={setImages} folderName={folderName} />
                <section className={`m-t-40 flex-2 flex-wrap p-x-16 justify-center `}>
                    {images.length === 0 ? <h1 className="text-center">No images</h1> :
                        images.map(({ id, imageUrl, imageName }) => {
                            return (
                                <GallaryCard id={id} folderName={folderName} setImages={setImages} imageName={imageName} imageUrl={imageUrl} key={id} setOverlay={setOverlay} />
                            )
                        })}
                </section>
            </div>
        </>
    )
}

export default Gallary