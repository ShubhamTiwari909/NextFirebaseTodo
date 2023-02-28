import {toast} from "react-toastify"

export const logout = (router,setTokenId) => {
    sessionStorage.removeItem("Token")
    setTokenId(null)
    toast.error("logged out")
    setTimeout(() => {
        router.push("/")
    }, 1000);
}