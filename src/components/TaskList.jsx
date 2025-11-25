import TaskItem from './TaskItem'
export default function TaskList({ tasks, onToggle, onDelete, onEdit }){
  if(!tasks.length) return <div className="mt-4">No tasks found</div>
  return (
    <div className="mt-4 space-y-3">
      {tasks.map(t=> <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />)}
    </div>
  )
}
