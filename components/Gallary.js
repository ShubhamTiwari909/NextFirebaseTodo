import React, { useState, useEffect } from 'react'
import { getData } from "../firebase/Gallary/dbOperations"
import GallaryCard from "./mini-components/GallaryCard"
import GallaryForm from "./mini-components/GallaryForm"
import styles from "@/styles/Gallary.module.css"


function Gallary() {
    const [images, setImages] = useState([])
    const [overlay, setOverlay] = useState(false)


    useEffect(() => {
        // Find all the prefixes and items.
        getData(setImages)
    }, [])

    return (
        <>
            <div className={`${overlay ? styles.overlay : ''}`}></div>
            <div className={`m-t-100`}>
                <h1 className='text-center'>Gallary</h1>
                <GallaryForm setImages={setImages} />
                <section className={`m-t-40 flex-2 grid p-x-16 justify-center `}>
                    {images.length === 0 ? <h1 className="text-center">No images</h1> :
                        images.map(({ id, imageUrl, imageName }) => {
                            return (
                                <GallaryCard id={id} setImages={setImages} imageName={imageName} imageUrl={imageUrl} key={id} setOverlay={setOverlay} />
                            )
                        })}
                </section>
            </div>
        </>
    )
}

export default Gallary