import styles from "../../src/styles/Toggle.module.css"
import PropTypes from "prop-types";


function Toggle({ toggle,onClick }) {
    console.log(toggle)
    return (
        <label htmlFor="toggle" className={`${styles.toggle} ${toggle === "dark-mode" ? styles.bg_nightsky : styles.bg_daysky}`} onClick={onClick}>
            <input type="checkbox" className={styles.toggleCheckbox} />
            <span className={`${styles.circle} ${toggle ==="dark-mode" ? styles.bg_moon : styles.bg_sun} ${toggle === "dark-mode" ? styles.slideRight : styles.slideLeft}`}></span>
        </label>
    )
}

Toggle.propTypes = {
    toggle: PropTypes.string,
    onClick:PropTypes.func
}

export default Toggle