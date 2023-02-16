import {toast} from "react-toastify"
export const darkMode = (toggle,setToggle) => {
    setToggle(!toggle)
    sessionStorage.setItem("Theme", toggle)
    toggle ?
        toast.info('Switched to Light Mode') :
        toast.info('Switched to Dark Mode')
}