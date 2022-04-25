import { Form, Input } from '../Form/style'
import { useForm } from "react-hook-form"

export default function SearchBar() {
  const { register, handleSubmit } = useForm()

  function handleSearch(data) {
    alert(`Busca ainda não implementada.
    Você tentou pesquisar por: ${data.search}`)
  }

  return (
    <Form onSubmit = { handleSubmit( data => handleSearch(data) ) }>
      <Input type = 'text' {...register('search') } placeholder = 'Pesquise por disciplina' />
    </Form>
  )
}