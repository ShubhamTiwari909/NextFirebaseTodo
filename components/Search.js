import styles from '../src/styles/Search.module.css'
import InputGroup from './mini-components/InputGroup'
import SelectField from './mini-components/SelectField'
import PropTypes from "prop-types"

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

Search.propTypes = {
    search: PropTypes.string,
    searchCompleted:PropTypes.string,
    setSearch:PropTypes.func,
    setSearchCompleted:PropTypes.func,
}

export default Search