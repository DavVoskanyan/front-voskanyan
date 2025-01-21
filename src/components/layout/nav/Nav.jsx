import styles from "./Nav.module.css";
import NavItemWithDropdown from "../../basicComponents/navItemWithDropdown/NavItemWithDropdown";
import {setMultipleClassNames} from "../../../utils/functions";
import NavItem from "../../basicComponents/navItem/NavItem";

const Nav = (props) => {
    const navigationBar = [
        {
            groupTitle: 'Demos',
            subitems: [
                {
                    title: 'Demo 1',
                    link: '#'
                },
                {
                    title: 'Demo 2',
                    link: '#'
                },
                {
                    title: 'Demo 3',
                    link: '#'
                }
            ]
        },
        {
            groupTitle: 'Post',
            subitems: [
                {
                    title: 'Post Header',
                    link: '#'
                },
                {
                    title: 'Post Layout',
                    link: '#'
                },
                {
                    title: 'Share Buttons',
                    link: '#'
                },
                {
                    title: 'Gallery Post',
                    link: '#'
                },
                {
                    title: 'Video Post',
                    link: '#'
                },
            ]
        },
        {
            groupTitle: 'Features',
            subitems: [
                {
                    title: 'Feature 1',
                    link: '#'
                },
                {
                    title: 'Feature 2',
                    link: '#'
                }
            ]
        },
        {
            groupTitle: 'Categories',
            subitems: [
                {
                    title: 'category 1',
                    link: '#'
                },
                {
                    title: 'category 2',
                    link: '#'
                },
                {
                    title: 'category 3',
                    link: '#'
                },
                {
                    title: 'category 4',
                    link: '#'
                },
            ]
        },
        {
            groupTitle: 'Shop',
            subitems: [
                {
                    title: 'Shop 1',
                    link: '#'
                },
                {
                    title: 'Shop 2',
                    link: '#'
                },
                {
                    title: 'Shop 3',
                    link: '#'
                },
                {
                    title: 'Shop 4',
                    link: '#'
                },
                {
                    title: 'Shop 5',
                    link: '#'
                },
            ]
        },
    ];
    const navClassNamesString = setMultipleClassNames(
        styles.nav,
        props.isMenuOpen ? styles.open : '',
        props.scrollY > 200 ? styles.hide : ''
    );

    return (
        <nav className={navClassNamesString}
             onClick={(eventObject) => {
                 if(eventObject.currentTarget === eventObject.target) { props.setIsMenuOpen(); }
             }}
        >
            <div className={styles.navigationHeader}>
                <img src="/assets/images/Logo.svg" alt="logo in nav bar" className={styles.navigationLogo}/>
                <button className={styles.navigationClosingButton} onClick={() => props.setIsMenuOpen(false)}>
                    <img src="/assets/images/icons/xMark.svg" alt=""/>
                </button>
            </div>
            <ul className={styles.navigationBarList}>
                {navigationBar.map((groupItem, index) => {
                    return (
                        <NavItemWithDropdown key={index}
                                      title={groupItem.groupTitle}
                                      items={groupItem.subitems}
                        />
                    );
                })}
                <NavItem link={'#'} text={'Buy Now'}/>
            </ul>
        </nav>
    );
}

export default Nav;