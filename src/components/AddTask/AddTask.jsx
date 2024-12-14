import { v4 as uuid4 } from 'uuid'
import useAddTaskState from "../../customHooks/useAddTaskState"
import { addTask } from "../../store/taskSlice";

function AddTask() {

   const { title, description, status, setField, setState } = useAddTaskState();


   function handleSubmit(e) {
      e.preventDefault();
      const newTask = {
         id: uuid4(),
         title,
         description,
         status,
      }
      dispatch(addTask(newTask));
      setState({
         title: "",
         description: "",
         status: "To Do",
      })
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="mb-6">
         <h2 className="text-xl font-semibold mb-3 text-indigo-500">Add New Task</h2>
         <div className="mb-4">
            <input
               type="text"
               placeholder="Task Title"
               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               onInput={(e) => setField("title", e.target.value)}
               value={title}
               required
            />
         </div>
         <div>
            <textarea
               placeholder="Task Description"
               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               rows="3"
               onInput={(e) => setField("description", e.target.value)}
               value={description}
            >
            </textarea>
         </div>
         <div className="mb-4">
            <select
               value={status}
               onInput={(e) => setField("status", e.target.value)}
               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
               <option value="To Do">To Do</option>
               <option value="In Progress">In Progress</option>
               <option value="Completed">completed</option>
            </select>
         </div>
         <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
         >Add Task</button>
      </form>
   )
}

export default AddTask