import { useState } from "react"
import { MdDeleteSweep } from "react-icons/md"
import { BiCloudDownload } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { saveAs } from 'file-saver'
import { deleteImage } from "../../firebase/Gallary/dbOperations"

function GallaryCard({ id,setImages,imageUrl, imageName }) {
    const [fullScreen, setFullScreen] = useState(false)
    return (
        <div>
            <img src={imageUrl}
                alt="Gallary Image"
                className={`img_fluid ${fullScreen ? "full-screen p-fixed z-101" : ""}`}
                width={200}
                height={200}
                onClick={() => {
                    setFullScreen(true)
                }} />
            <div className='flex justify-between'>
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
            onClick={() => setFullScreen(false)}><RxCross1 /></button>
        </div>
    )
}

export default GallaryCard