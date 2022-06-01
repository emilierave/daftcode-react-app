import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { MouseEventHandler } from 'react';
// @ts-ignore
import styles from './Ham.scss'

interface HamburgerMenuProps {
    isOpen: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export const HamburgerMenu = ({isOpen, onClick}: HamburgerMenuProps) => {
    return (
        <div onClick={onClick}>
            { isOpen ? (
                    <VscMenu className={styles.hamburger} aria-label='Open menu'/> )
                : (
                    <VscChromeClose className={styles.hamburger} aria-label='Close menu'/>)
            }
        </div>
    ) }

export default HamburgerMenu;