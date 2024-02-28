import { useEffect, useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'
import { useNavigate } from 'react-router-dom'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('AUTH')
    const authObject = JSON.parse(auth)
    const token = authObject?.jwt
    if (token) {
      navigate('/dashboard')
      console.log("T'es connecté")
    }
  }, [])

  return (
    <>
      {
        isRegister
          ? <RegisterForm />
          : <LoginForm />
      }
      <a onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "J'ai déjà un compte" : "Je n'ai pas de compte"}
      </a>
    </>
  )
}

export default Auth
