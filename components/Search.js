import styles from '../src/styles/Search.module.css'
import InputGroup from './mini-components/InputGroup'
import SelectField from './mini-components/SelectField'
function Search({ search, setSearch,searchCompleted,setSearchCompleted }) {

    return (
        <div >
            <form className={styles.searchForm}>
                <InputGroup
                    title="Search"
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={styles.input_md}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SelectField
                    className={styles.select_md}
                    value={searchCompleted}
                    onChange={(e) => setSearchCompleted(e.target.value)}
                    options={["All","Completed","To Do"]} />
            </form>
        </div>
    )
}

export default Search