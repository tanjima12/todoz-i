import Maptodo from "./MapTodo";

const TaskStatus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Maptodo
        className="border-2 p-2 min-h-96 min-w-80"
        status={"todo"}
      ></Maptodo>

      <Maptodo
        className="border-2 p-2 min-h-96 min-w-80"
        status={"OnGoing"}
      ></Maptodo>

      <Maptodo
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Complete"}
      ></Maptodo>
    </div>
  );
};

export default TaskStatus;
