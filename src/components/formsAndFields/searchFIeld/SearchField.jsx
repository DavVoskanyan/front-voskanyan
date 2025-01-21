import styles from "./SearchField.module.css";
import {setMultipleClassNames} from "../../../utils/functions";

const SearchField = (props) => {
    return (
        <label className={styles.searchLabel}>
            <input type="search"
                   className={setMultipleClassNames(styles.searchInput, props.searchBarText ? styles.haveText : '')}
                   onInput={
                        (eventObject) => props.setSearchBarText(eventObject.currentTarget.value.trim().toLowerCase())
                   }
            />
            <img className={styles.searchIcon} src='/assets/images/icons/search.svg' alt='search icon'/>
        </label>
    );
}

export default SearchField;