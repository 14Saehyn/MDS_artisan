import Input from './inputs/Input'
import './Form.css'
import { useEffect, useState } from 'react'
import Button from './buttons/Button'
import { useLogin } from '../../hooks/Auth'
import { useNavigate } from 'react-router-dom'

function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: 'jean@mail.com',
    password: 'password2'
  })

  const navigate = useNavigate()

  const { response, error, isLoading, login } = useLogin()

  useEffect(() => {
    if (response && response.jwt) {
      navigate('/dashboard')
    }
  }, [response])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h2>Se connecter</h2>
      <Input
        type='email'
        name='identifier'
        label='Email : '
        placeholder='mail@provider.com'
        value={formData.identifier}
        onChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        label='Mot de passe : '
        placeholder=''
        value={formData.identifier}
        onChange={handleChange}
      />
      {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
      <Button type='submit'>
        Se connecter
      </Button>
    </form>
  )
}

export default LoginForm
