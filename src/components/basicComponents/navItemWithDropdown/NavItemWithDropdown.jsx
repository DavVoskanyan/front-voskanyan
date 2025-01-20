import styles from'./NavItemWithDropdown.module.css';


const NavItemWithDropdown = (props) => {
    return (
        <div className={styles.navigationGroupItem}>
            <button className={styles.navigationGroupItemButton}>
                {props.title}
                <img className={styles.dropdownIcon} src="/assets/images/icons/chevronDown.svg" alt="dropdown icon"/>
            </button>
            <div className={styles.dropdown}>
                {props.items.map((item, index) => {
                    return (
                        <a className={styles.dropdownItem} href={item.link} key={index}>
                            <span className={styles.dropdownItemText}>{item.title}</span>
                            <img src="/assets/images/icons/chevronRight.svg" alt=""/>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default NavItemWithDropdown;