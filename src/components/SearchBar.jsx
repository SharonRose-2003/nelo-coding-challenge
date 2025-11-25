import { useState, useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'

export default function SearchBar({ onSearch }){
  const [q, setQ] = useState('')
  const deb = useDebounce(q, 350)
  useEffect(()=>{ onSearch(deb) }, [deb])
  return <input className="input" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} />
}
