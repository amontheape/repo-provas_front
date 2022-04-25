import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<>logIn PlaceHolder</>} />
        <Route path = '/home' element = {<>Home PlaceHolder</>} />
      </Routes>
    </Router>
  )
}