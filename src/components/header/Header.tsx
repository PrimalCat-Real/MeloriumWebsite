// import type { ReactNode } from 'react'

import HeaderActions from "./HeaderActions"
import HeaderLogo from "./HeaderLogo"
import HeaderNav from "./HeaderNav"
import HeaderWrapper from "./HeaderWrapper"

// interface HeaderProps {
//     children?: ReactNode
// }

const Header = () => {
    return (
        <HeaderWrapper className="w-full justify-between flex h-16 items-center fixed top-0 left-0 z-10">

            <HeaderNav></HeaderNav>
            <HeaderActions></HeaderActions>
        </HeaderWrapper>
    )
}

export default Header