import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if(!email || !password) return alert('enter email and password')
    sessionStorage.setItem('user', email)
    navigate('/dashboard')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl mb-4 font-semibold">Login</h2>
        <input className="input mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="input mb-3" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="btn w-full">Login</button>
      </form>
    </div>
  )
}
