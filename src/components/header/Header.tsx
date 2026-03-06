// import type { ReactNode } from 'react'

import HeaderActions from "./HeaderActions"
import HeaderLogo from "./HeaderLogo"
import HeaderNav from "./HeaderNav"

// interface HeaderProps {
//     children?: ReactNode
// }

const Header = () => {
    return (
        <header className="w-full grid grid-cols-3 h-16 items-center">
            <HeaderLogo></HeaderLogo>
            <HeaderNav></HeaderNav>
            <HeaderActions></HeaderActions>
        </header>
    )
}

export default Header