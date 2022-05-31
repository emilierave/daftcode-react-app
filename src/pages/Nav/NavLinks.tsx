import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
// @ts-ignore
import styles from './Nav..scss';

interface NavProps {
    toggleHamburger: () => void
}

export  function NavLinks({toggleHamburger}:NavProps) {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 769


    useEffect(() => {
            window.addEventListener('resize', () => setWidth(window.innerWidth))}
        ,[])


    return (
        <ul className={width < breakpoint ? `${styles.listed}` : `${styles.listednoMobile}`}>
            <li  className={styles.list}>
                <Link onClick={toggleHamburger} to='/' className={styles.anchorTag}>Home</Link>
            </li>
            <li  className={styles.list}>
                <Link onClick={toggleHamburger} to='/about' className={styles.anchorTag}>About</Link>
            </li>
            <li  className={styles.list}>
                <Link onClick={toggleHamburger} to='/contact' className={styles.anchorTag}>Contact</Link>
            </li>
        </ul>
    )
}
export default NavLinks