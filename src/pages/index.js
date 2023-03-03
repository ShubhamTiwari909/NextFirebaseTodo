import { useEffect } from "react"
import { useRouter } from "next/router"
import Login from "../../components/Login"

export default function Signin() {
    const router = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem("Token")
        if (token) {
            router.push("/home")
        }
    }, [])

    return (
        <>
            <Login router={router} />
        </>
    )
}
