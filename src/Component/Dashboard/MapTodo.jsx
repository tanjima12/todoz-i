/* eslint-disable no-unused-vars */

import { useDrop } from "react-dnd";

import useAxiosPublic from "../Hook/PublicAxios";
import Showtodo from "./Showtodo";
import useListQuery from "../Hook/useListQuery";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Maptodo = ({ status }) => {
  const axiosSecure = useAxiosPublic();
  const { todo, refetch } = useListQuery();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    axiosSecure.patch(`/addList/update${id}`, { status }).then((res) => {
      refetch();
      Swal.fire("successfully added");
    });
  };
  console.log(todo);
  const toDo = todo.filter((task) => task.status === status);
  console.log(toDo);
  return (
    <div ref={drop} className={`${isOver ? "" : ""} max-w-screen-xl mx-auto`}>
      <div className="w-[200px] flex flex-col gap-5  rounded-md p-2 min-h-96 min-w-80">
        <h1 className="text-3xl text-center font-bold my-2">{status}</h1>
        {toDo.map((task, index) => (
          <Showtodo
            key={index}
            task={task}
            refetch={refetch}
            status={status}
          ></Showtodo>
        ))}
      </div>
    </div>
  );
};

export default Maptodo;
