import { useEffect } from "react"
import { useRouter } from "next/router"
import { signupWithGoogle, signupWithGithub } from "../../firebase/signinOperations"
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai"
import styles from "@/styles/Login.module.css"

export default function Login() {
    const router = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem("Token")
        if (token) {
            router.push("/")
        }
    }, [])

    return (
        <>
            <section className={styles.container}>
                <h1>WELCOME TO NEXT JS - FIREBASE TODO LIST APP</h1>
                <div className={styles.loginContainer}>
                    <h1>Login</h1>
                    <div className={styles.buttonGroup}>
                        <button className={styles.signinButton} onClick={() => signupWithGoogle(router)}>Sign in <FcGoogle /></button>
                        <button className={styles.signinButton} onClick={() => signupWithGithub(router)}>Sign in <AiFillGithub /></button>
                    </div>
                </div>
            </section>
        </>
    )
}
