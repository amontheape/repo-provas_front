import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'
import { login } from '../../../services/index.js'
import { Title, TopWrapper, Separator, Form, Input, BottomWrapper, StyledLink } from '../style'
import { Button } from '../../../components'
import { toast } from 'react-toastify'

export default function LoginForm() {
  const { register, handleSubmit, formState : { errors } } = useForm()
  const { setUser, navigate } = useAuth()

  function handleLogin( data ) {
    login( data )
     .then( ( {data} ) => {
       setUser( data )
       navigate('/home')
     })
     .catch( err => {
       console.log( err )
     })
  }

  return (
    <>
      <Title>Login</Title>

      {/* <TopWrapper>
        <Separator />
        <span>ou</span>
        <Separator />
      </TopWrapper> */}

      <Form onSubmit = { handleSubmit( data => handleLogin(data) ) } >
        <Input {...register('email', { required: 'O campo Email não pode ser nulo' })} type = 'email' placeholder = 'Email' />
        { errors.email && <p>{errors.email.message}</p> }

        <Input {...register('password', {
            required: 'o campo Senha não pode ser nulo',
            minLength: { value: 6, message: 'Senha deve conter no mínimo 6 caracteres'}
          })}
          type = 'password' placeholder = 'Senha' />
         { errors.password && <p>{errors.password.message}</p> } 

        <BottomWrapper>
          <StyledLink to = '/register'>Não possuo cadastro</StyledLink>
          <Button type = 'submit' buttonStatus = 'active'>ENTRAR</Button>
        </BottomWrapper>
      </Form>
    </>
  )
}