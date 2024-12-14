import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskTodo } from "../store/taskSlice";

export const useTaskState = () => {
  const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
      dispatch(fetchTaskTodo())
    }, [dispatch]);
    
  return {tasks, loading, error};
}
