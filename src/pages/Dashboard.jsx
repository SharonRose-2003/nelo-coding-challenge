import { useEffect, useMemo, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import { startCron, stopCron } from '../utils/cron'

const STORAGE_KEY = 'nelo_tasks_v1'

export default function Dashboard(){
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
  })
  const [editing, setEditing] = useState(null)
  const [filter, setFilter] = useState('All')
  const [searchText, setSearchText] = useState('')

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)) }, [tasks])
  useEffect(() => { startCron(() => tasks); return () => stopCron() }, [tasks])

  const addTask = (t) => setTasks(prev => [t, ...prev])
  const updateTask = (u) => setTasks(prev => prev.map(p=> p.id===u.id ? u : p))
  const deleteTask = (id) => { if(confirm('Delete this task?')) setTasks(prev => prev.filter(p=>p.id!==id)) }
  const toggleTask = (id) => setTasks(p=> p.map(t=> t.id===id? {...t, completed:!t.completed}:t))
  const editTask = (t) => setEditing(t)

  const filtered = useMemo(() => {
    const s = searchText.toLowerCase()
    return tasks.filter(t => {
      const match = s==='' || t.title.toLowerCase().includes(s) || (t.description||'').toLowerCase().includes(s)
      if(!match) return false
      if(filter==='All') return true
      if(filter==='Completed') return t.completed
      if(filter==='Pending') return !t.completed
      if(['High','Medium','Low'].includes(filter)) return t.priority===filter
      return true
    })
  }, [tasks, filter, searchText])

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

        <TaskForm onAdd={addTask} editData={editing} onUpdate={(t)=>{updateTask(t); setEditing(null)}} />

        <SearchBar onSearch={setSearchText} />
        <FilterBar setFilter={setFilter} />
        <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
      </div>
    </div>
  )
}
