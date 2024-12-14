import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/taskSlice";

function EditTask({ task }) {

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const dispatch = useDispatch();


    const handleEdit = () => {
        dispatch(editTask({ id: task.id, title, description, status }))
        setIsEditing(false)
    }
    return (
        <div>
            {isEditing ? (
                <div className="absolute right-20 top-20 bg-white p-4 border rounded-md shadow-lg z-10">
                    <h2 className="text-xl font-semibold mb-3 text-indigo-500">Edit Task</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Task Title"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onInput={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Task Description"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="3"
                            onInput={(e) => setDescription(e.target.value)}
                            value={description}
                        >
                        </textarea>
                    </div>
                    <div className="mb-4">
                        <select
                            value={status}
                            onInput={(e) => setStatus(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">completed</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-indigo-600 text-white px-2 py-2 rounded-md hover:bg-indigo-700"
                            onClick={handleEdit}
                        >Save</button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-300 px-2 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) :
                <>  <button
                    onClick={() => setIsEditing(true)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Edit</button>

                </>
            }

        </div>
    )
}

export default EditTask