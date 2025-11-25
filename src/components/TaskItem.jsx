export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="bg-white p-3 rounded shadow flex justify-between items-center">
      <div>
        <div className="flex items-center gap-3">
          <h3 className={task.completed?'line-through text-gray-400':''}>{task.title}</h3>
          <span className="text-xs px-2 py-1 rounded bg-gray-200">{task.priority}</span>
        </div>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
      </div>

      <div className="space-x-2">
        <button className="btn-sm" onClick={()=>onToggle(task.id)}>{task.completed?'Pending':'Complete'}</button>
        <button className="btn-sm" onClick={()=>onEdit(task)}>Edit</button>
        <button className="btn-danger-sm" onClick={()=>onDelete(task.id)}>Delete</button>
      </div>
    </div>
  )
}
