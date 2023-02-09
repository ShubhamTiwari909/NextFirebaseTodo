import styles from '../src/styles/Search.module.css'
import InputGroup from './mini-components/InputGroup'
function Search({ search, setSearch }) {

    return (
        <div >
            <form  className={styles.searchForm}>
                <InputGroup
                    title="Search"
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={styles.input_md}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search