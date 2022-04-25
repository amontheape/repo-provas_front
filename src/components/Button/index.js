import useAuth from '../../hooks/useAuth'
import { StyledButton } from './style'

export default function Button( { children } ) {
  const { setFilters } = useAuth() 

  function handleClick( value ) {
    if ( value !== 'ADICIONAR') setFilters(value)
    else alert('Ainda não é possível adicionar provas')
  }

  return (
    <StyledButton onClick = { () => handleClick(children)}>{ children }</StyledButton>
  )
}