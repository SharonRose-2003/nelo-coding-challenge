import { useEffect, useState } from 'react'

export default function TaskForm({ onAdd, editData, onUpdate }){
  const empty = { title:'', description:'', priority:'Low', dueDate:'' }
  const [form, setForm] = useState(empty)

  useEffect(()=>{ if(editData) setForm(editData); else setForm(empty) }, [editData])

  const submit = (e)=>{
    e.preventDefault()
    if(!form.title.trim()) return alert('Title required')
    if(editData) onUpdate(form)
    else onAdd({ ...form, id:Date.now(), completed:false })
    setForm(empty)
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input className="input col-span-2" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
        <select className="input" value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})}>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
        <textarea className="input col-span-3" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
        <input type="date" className="input" value={form.dueDate} onChange={e=>setForm({...form,dueDate:e.target.value})} />
        <button className="btn col-span-3 md:col-span-1">{editData?'Update':'Add Task'}</button>
      </div>
    </form>
  )
}
