import useAuth from "../../hooks/useAuth"
import { MdExitToApp } from 'react-icons/md'
import logo from '../../assets/images/logo.svg'

import { StyledHeader, Logo, IconBox } from "./style"

export default function Header() {
  const { location, handleLogout } = useAuth()

  return (
    <StyledHeader home = {location.pathname === '/home'}>
      <Logo src = { logo } alt = 'website logo' />
      { location.pathname === '/home' &&  <IconBox onClick = { () => handleLogout() } ><MdExitToApp color="black" fontSize="30px" /></IconBox>}
    </StyledHeader>
  )
}