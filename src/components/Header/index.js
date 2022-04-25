import useAuth from "../../hooks/useAuth"
import { MdExitToApp } from 'react-icons/md'
import logo from '../../assets/images/logo.svg'

import { StyledHeader, Logo } from "./style"

export default function Header() {
  const { location } = useAuth()

  return (
    <StyledHeader>
      <Logo src = { logo } alt = 'website logo' />
      { location.pathname === 'home' &&  <MdExitToApp color = 'black' fontSize = '60px' />}
    </StyledHeader>
  )
}