import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Form = styled.form`
  width: 465px;
  
  display: flex;
  flex-direction: column;

  &>p{
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    background-color: lightcoral;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    margin-top: -2px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  border: 1px solid #c4c4c4;
  border-radius: 4px;

  padding: 0 12px;
  margin-top: 16px;

  &::placeholder {
    /* padding: 0 12px; */
    color: rgba(0, 0, 0, 0.8);
  }
`

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  text-decoration: underline;
  color: rgba(70, 115, 202, 0.8);
`

const Title = styled.span`
  display: flex;
  justify-content: center;

  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #000;
`

const Separator = styled.div`
  width: 45%;
  height: 1px;
  background-color: #c4c4c4; 
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);

  &> span{
    margin: 0 5px;
  }
`

const BottomWrapper = styled.div`
  width: 100%;
  height : 36px;
  margin-top: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export {
  Form,
  Input,
  StyledLink,
  Title,
  Separator,
  TopWrapper,
  BottomWrapper
}