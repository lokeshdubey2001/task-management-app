import { useDispatch } from "react-redux";
import { useTaskState } from "../../customHooks/useTaskState"
import EditTask from "../EditTask/EditTask";
import { deleteTask } from "../../store/taskSlice";

function TaskList() {
  const {tasks, loading, error} = useTaskState();

const dispatch = useDispatch();
  if(loading){
    return <p>Tasks loading...</p>
  }

  if(error){
    return <p>An error occured {error}</p>
  }


  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div>
        <div>
            <h2>Task List</h2>
            <ul className="space-y-4">
                {tasks?.map((task) => (
                    <li key={task.id} className="bg-gray-50 p-4 rounded-md shadow-md flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
                        {task.description && <p className="text-gray-600">{task.description}</p>}
                        <p className="mt-1 text-sm font-semibold">Status: <span className="italic underline">{task.status}</span></p>
                      </div>
                      <div className="flex space-x-2">
                       <EditTask task={task}/>
                        <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(task.id)}
                        >Delete</button>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
        
    </div>
  )
}

export default TaskList