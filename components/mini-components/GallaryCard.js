import { useState } from "react"
import { MdDeleteSweep } from "react-icons/md"
import { BiCloudDownload } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { saveAs } from 'file-saver'
import { deleteImage } from "../../firebase/Gallary/dbOperations"
import styles from '@/styles/Gallary.module.css'


function GallaryCard({ id, setImages, imageUrl, imageName, setOverlay }) {
    const [fullScreen, setFullScreen] = useState(false)
    return (
        <div>
            <img src={imageUrl}
                alt="Gallary Image"
                className={`img_fluid ${fullScreen ? `${styles.full_screen} z-101 cursor-pointer` : ""}`}
                width={200}
                height={200}
                onClick={() => {
                    setFullScreen(true)
                    setOverlay(true)
                }} />
            <div className={`${fullScreen ? "d-none" : "flex justify-between p-x-16"}`}>
                <button onClick={() => {
                    deleteImage(id, setImages, imageName)
                }}><MdDeleteSweep size="1.5rem" color="rgb(255, 81, 116)" /></button>
                <button onClick={() => {
                    saveAs(imageUrl, imageName)
                }}>
                    <BiCloudDownload size="1.5rem" color='rgb(81, 217, 255)' />
                </button>
            </div>
            <button
                className={fullScreen ? "p-fixed z-101 bg-white p-16 top-5 right-5" : "d-none"}
                onClick={() => {
                    setFullScreen(false)
                    setOverlay(false)
                }}><RxCross1 /></button>
        </div>
    )
}

export default GallaryCard