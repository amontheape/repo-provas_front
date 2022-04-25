import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import { ToastContainer } from 'react-toastify'
import { HomePage, LoginPage, RegisterPage } from './pages'
import { GlobalStyle } from './styles/globalStyle'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path = '/home' element = {<HomePage />} />
            <Route path = '/login' element = {<LoginPage />} />
            <Route path = '/register' element = {<RegisterPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}