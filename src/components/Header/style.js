import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 175px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 55px calc((100% - 295px)/2);
`
const Logo = styled.img`
  width: 295px;
`

export {
  StyledHeader,
  Logo
}