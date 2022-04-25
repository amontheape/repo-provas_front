import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function createHeader( token ) {
  return { headers: { Authorization: `Bearer ${token}`} }
}

export async function login( body ) {
  return await axios.post(`${BASE_URL}/sign-in`, body)
}

export async function registerUser( body ) {
  return await axios.post(`${BASE_URL}/sign-up`, body)
}

export async function logout( token ) {
  const auth = createHeader( token )
  return await axios.post(`${BASE_URL}/sign-out`, {}, auth)
}

export async function getTestsByDiscipline( token ) {
  const auth = createHeader( token )
  return await axios.get(`${BASE_URL}/tests/disciplines`, auth)
}

export async function getTestsByTeacher( token ) {
  const auth = createHeader( token )
  return await axios.get(`${BASE_URL}/tests/teachers`, auth)
}