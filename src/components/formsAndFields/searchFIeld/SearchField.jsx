import styles from "./SearchField.module.css";

const SearchField = (props) => {
    return (
        <label className={styles.searchLabel}>
            <input type="search"
                   className={styles.searchInput}
                   onInput={
                        (eventObject) => props.setSearchBarText(eventObject.currentTarget.value.trim().toLowerCase())
                   }
            />
            <img className={styles.searchIcon} src='/assets/images/icons/search.svg' alt='search icon'/>
        </label>
    );
}

export default SearchField;