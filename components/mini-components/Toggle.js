import styles from "../../src/styles/Toggle.module.css"
import { toast } from 'react-nextjs-toast'

function Toggle({ toggle, setToggle }) {
    return (
        <label htmlFor="toggle" className={`${styles.toggle} ${toggle ? styles.bg_nightsky : styles.bg_daysky}`} onClick={() => {
            setToggle(!toggle)
            toggle ?
                toast.notify('Switched to Light Mode', {
                    title: "Theme",
                    duration: 2,
                    type: "info"
                }) :
                toast.notify('Switched to Dark Mode', {
                    title: "Theme",
                    duration: 2,
                    type: "info"
                })
        }}>
            <input type="checkbox" className={styles.toggleCheckbox} />
            <span className={`${styles.circle} ${toggle ? styles.bg_moon : styles.bg_sun} ${toggle ? styles.slideRight : styles.slideLeft}`}></span>
        </label>
    )
}

export default Toggle