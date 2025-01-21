import SearchField from "../../formsAndFields/searchFIeld/SearchField";

import styles from './Header.module.css';
import {setMultipleClassNames} from "../../../utils/functions";

const Header = (props) => {
    return (
        <header className={setMultipleClassNames(styles.header, props.scrollY > 200 ? styles.hide : '')}>
            <div className={styles.headerContent}>
                <button className={styles.navBarOpeningButton} onClick={() => props.setIsMenuOpen(true)}>
                    <img src="/assets/images/icons/burgerMenu.svg" alt="menu button"/>
                </button>
                <img className={props.isMenuOpen ? styles.hiddenLogo : ''} src="/assets/images/Logo.svg" alt="Logo"/>
                <SearchField searchBarText={props.searchBarText} setSearchBarText={props.setSearchBarText}/>
            </div>
        </header>
    )
}

export default Header;