import { useRouter } from 'next/router'
import Gallary from "../../../components/Gallary"
import Link from 'next/link'
const Folder = () => {
    const router = useRouter()
    const { folder } = router.query

    return (
        <div className="m-t-100">
            <Link href="/folders/navigation" className='p-fixed left-5 text-black'>Folders</Link>
            <Gallary folderName={folder} />
        </div>
    )
}

export default Folder