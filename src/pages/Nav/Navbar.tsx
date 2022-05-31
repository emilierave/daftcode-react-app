import {Navigation} from './Navigation'
import { MobileNavbar } from '../Ham/MobileNavbar';
import { useState } from 'react';
// @ts-ignore
import styles from './Nav..scss';

export function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(true)
    const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

    return (
        <div className={styles.navbar}>
            <Navigation  toggleHamburger={toggleHamburger}/>
            <MobileNavbar toggleHamburger={toggleHamburger} hamburgerOpen={hamburgerOpen}/>
        </div>
    )
}
export default Navbar