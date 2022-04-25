import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 175px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${ ( { home } ) => home ? '' : '55px calc((100% - 295px)/2)'};
`
const Logo = styled.img`
  width: 295px;
`
const IconBox = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  StyledHeader,
  Logo,
  IconBox
}