import { useState } from "react"
import { MdDeleteSweep } from "react-icons/md"
import { BiCloudDownload } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { saveAs } from 'file-saver'
import { deleteImage } from "../../firebase/Gallary/dbOperations"
import styles from '@/styles/Gallary.module.css'
import Image from "next/image"

function GallaryCard({ id,folderUrl, setImages, imageUrl, imageName, setOverlay }) {
    const [fullScreen, setFullScreen] = useState(false)
    return (
        <div className="p-3 border-2 border-slate-400 rounded-xl flex flex-col justify-between min-h-200">
            <Image src={imageUrl}
                alt="Gallary Image"
                className={`object-fill rounded-lg md:w-52 w-44 ${fullScreen ? `${styles.full_screen} z-101 cursor-pointer` : ""}`}
                width={200}
                height={200}
                onClick={() => {
                    setFullScreen(true)
                    setOverlay(true)
                }} />
            <div className={`${fullScreen ? "d-none" : "flex justify-between px-4 mt-2"}`}>
                <button className="p-1 rounded-full border-2 border-red-400"
                onClick={(e) => {
                    deleteImage(id, setImages, imageName,folderUrl)
                }}><MdDeleteSweep size="1.5rem" color="rgb(255, 81, 116)" /></button>
                <button className="p-1 rounded-full border-2 border-blue-400"
                onClick={() => {
                    saveAs(imageUrl, imageName)
                }}>
                    <BiCloudDownload size="1.5rem" color='rgb(81, 217, 255)' />
                </button>
            </div>
            <button
                className={fullScreen ? "fixed z-101 bg-white p-4 top-1.5 right-1.5" : "hidden"}
                onClick={() => {
                    setFullScreen(false)
                    setOverlay(false)
                }}><RxCross1 /></button>
        </div>
    )
}

export default GallaryCard