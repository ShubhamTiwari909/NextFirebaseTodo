import {toast} from "react-toastify"

export const logout = (router) => {
    sessionStorage.removeItem("Token")
    toast.error("logged out")
    setTimeout(() => {
        router.push("/")
    }, 1000);
}