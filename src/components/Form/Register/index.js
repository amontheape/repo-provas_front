import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'
import { registerUser } from '../../../services/index.js'
import { Title, TopWrapper, Separator, Form, Input, BottomWrapper, StyledLink } from '../style'
import { Button } from '../../../components'

export default function RegisterForm() {
  const { register, handleSubmit, getValues, formState : { errors } } = useForm()
  const { navigate } = useAuth()

  function handleRegister( { email, password } ) {
    registerUser( { email, password } )
     .then( navigate('/login') )
     .catch( err => {
       console.log( err )
     })
  }

  return (
    <>
      <Title>Cadastro</Title>

      {/* <TopWrapper>
        <Separator />
        <span>ou</span>
        <Separator />
      </TopWrapper> */}

      <Form onSubmit = { handleSubmit( data => handleRegister(data) ) } >
        <Input type = 'email' {...register('email', { required: 'O campo Email não pode ser nulo' })}  placeholder = 'Email' />
        { errors.email && <p>{errors.email.message}</p> }

        <Input {...register('password', {
            required: 'o campo Senha não pode ser nulo',
            minLength: { value: 6, message: 'Senha deve conter no mínimo 6 caracteres'}
          })}
          type = 'password' placeholder = 'Senha' />
        { errors.password && <p>{errors.password.message}</p> } 

        <Input type = 'password' {...register('pwcheck', {
          validate : {
             matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'As senhas devem ser iguais';
          } } } ) } placeholder = 'Confirme sua senha' />
        { errors.pwcheck && <p>{errors.pwcheck.message}</p> } 

        <BottomWrapper>
          <StyledLink to = '/login'>Já possuo cadastro</StyledLink>
          <Button type = 'submit' buttonStatus = 'active'>CADASTRAR</Button>
        </BottomWrapper>  
      </Form>
    </>
  )
}