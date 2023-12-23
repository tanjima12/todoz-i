/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

import { useDrag } from "react-dnd";
import useAxiosPublic from "../Hook/PublicAxios";
import { Link } from "react-router-dom";

const Showtodo = ({ task, refetch }) => {
  const axiosSecure = useAxiosPublic();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/addListDlt/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div
      ref={drag}
      className={`rounded-md bg-transparent bg-blue-50 border-2 p-5 pt-5 pb-0 ${
        isDragging ? "" : ""
      } shadow-xl cursor-move`}
    >
      <div className="mb-8 bg-blue-100">
        <h3 className="mt-1 p-4 py-2 border-2 rounded-md border-gray-500  text-sm text-gray-700 shadow-sm">
          <span className="font-bold">Title:</span> {task.Title}
        </h3>
        <p className="mt-1 p-4 py-2 border-2 rounded-md border-gray-500  text-sm text-gray-700 shadow-sm">
          <span className="font-bold">Description:</span> {task.Description}
        </p>
        <p className="mt-1 p-4 py-2 border-2 rounded-md border-gray-500  text-sm text-gray-700 shadow-sm">
          <span className="font-bold">DeadLine:</span> {task.Deadline}
        </p>
        <p className="mt-1 p-4 py-2 border-2 rounded-md border-gray-500  text-sm text-gray-700 shadow-sm">
          <span className="font-bold">Priority:</span> {task.Priority}
        </p>
      </div>
      <button
        onClick={() => handleDelete(task._id)}
        className="ml-8 mb-4 hover:cursor-pointer px-5 py-2 bg-blue-200 hover:text-red-600"
      >
        Delete
      </button>
      <Link to={`updateList/${task._id}`}>
        <button className="hover:cursor-pointer px-5 py-2 bg-blue-200 hover:text-red-600 ml-5">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Showtodo;
