import styles from "./NavItem.module.css"

const NavItem = (props) => {
    return(
        <a className={styles.navItem} href={props.link}>{props.text}</a>
    );
}

export default NavItem;