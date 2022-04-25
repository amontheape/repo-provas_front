import useAuth from '../../hooks/useAuth'
import { StyledButton } from './style'

export default function Button( { children } ) {
  const { setFilters } = useAuth() 

  function handleClick( value ) {
    if ( value !== 'ADICIONAR') setFilters(value)
  }

  return (
    <StyledButton onClick = { e => handleClick(e.target.value)}>{ children }</StyledButton>
  )
}