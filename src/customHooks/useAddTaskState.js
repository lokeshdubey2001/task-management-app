import { useState } from "react"
import { useDispatch } from "react-redux";

const useAddTaskState = () => {

    const [state, setState] = useState({
        title: "",
        description: "",
        status: "To Do",
    });

    const dispatch = useDispatch();


    const setField = (field, value) => {
        setState((prev) => ({
            ...prev,
            [field]: value,
        }))
    }


    return { ...state, setField, setState, dispatch }

}

export default useAddTaskState