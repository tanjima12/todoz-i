import { useForm } from "react-hook-form";

const TaskForm = ({ handleAddTask }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSub = (data) => {
    handleAddTask(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSub)}>
      <label>Title:</label>
      <input {...register("title", { required: true })} />

      <label>Description:</label>
      <input {...register("description")} />

      <label>Deadline:</label>
      <input type="date" {...register("deadline")} />

      <label>Priority:</label>
      <select {...register("priority")}>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
