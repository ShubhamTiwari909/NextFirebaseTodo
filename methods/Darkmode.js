import {toast} from "react-toastify"
export const darkMode = (setToggle) => {
    if(document.body.classList.contains("dark-mode")){
        document.body.classList.add("light-mode")
        document.body.classList.remove("dark-mode")
    }
    else{
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
    }
    setToggle(document.body.classList.value)
    sessionStorage.setItem("Theme", document.body.classList.value)
    document.body.classList.value === "dark-mode" ?
        toast.info('Switched to Dark Mode') :
        toast.info('Switched to Light Mode')
}