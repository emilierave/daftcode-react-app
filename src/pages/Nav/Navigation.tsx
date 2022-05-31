import { NavLinks } from './NavLinks';
// @ts-ignore
import styles from './Nav..scss';

interface NavProps {
    toggleHamburger: () => void
}

export const Navigation = ({toggleHamburger}:NavProps) => {
    return (
        <nav className="navigation">
            <NavLinks toggleHamburger={toggleHamburger} />
        </nav>
    )
}
export default Navigation