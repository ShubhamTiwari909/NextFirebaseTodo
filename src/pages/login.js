import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image";
import { signupWithGoogle, signupWithGithub } from "../../firebase/signinOperations"
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai"
import styles from "@/styles/Login.module.css"
import Logo from "../images/logo-white.png"


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
                <div className={styles.welcomeMessage}>
                    <Image src={Logo} width="150" height="150" alt="logo" />
                    <h1>WELCOME TO EASE TO DO </h1>
                </div>
                <div className={styles.loginContainer}>
                    <h2>Login</h2>
                    <div className={styles.buttonGroup}>
                        <button className={styles.signinButton} onClick={() => signupWithGoogle(router)}>Sign in <FcGoogle /></button>
                        <button className={styles.signinButton} onClick={() => signupWithGithub(router)}>Sign in <AiFillGithub /></button>
                    </div>
                </div>
            </section>
        </>
    )
}
