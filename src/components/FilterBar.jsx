export default function FilterBar({ setFilter }){
  const f=['All','Completed','Pending','High','Medium','Low']
  return (
    <div className="flex gap-2 my-3">
      {f.map(x=> <button key={x} className="btn-sm" onClick={()=>setFilter(x)}>{x}</button>)}
    </div>
  )
}
