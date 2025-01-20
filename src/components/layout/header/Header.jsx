import SearchField from "../../formsAndFields/searchFIeld/SearchField";

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <button className={styles.navBarOpeningButton} onClick={() => props.setIsMenuOpen(true)}>
                    <img src="/assets/images/icons/burgerMenu.svg" alt="menu button"/>
                </button>
                <img className={props.isMenuOpen ? styles.hiddenLogo : ''} src="/assets/images/Logo.svg" alt="Logo"/>
                <SearchField setSearchBarText={props.setSearchBarText}/>
            </div>
        </header>
    )
}

export default Header;