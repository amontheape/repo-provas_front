import { Header, SearchBar, Filters, TestsDisplay } from '../../components'
import { HorizontalLine } from './style'

export default function HomePage() {
  return (
    <>
      <Header />
      <SearchBar />
      <HorizontalLine />
      <Filters />
      <TestsDisplay />
    </>
  )
}