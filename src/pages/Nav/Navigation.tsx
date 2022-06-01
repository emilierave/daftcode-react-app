import { NavLinks } from './NavLinks';
// @ts-ignore

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