import Swal from "sweetalert2";
import "./Dashboard.css";

import { useForm } from "react-hook-form";
import { AuthContext } from "../LogIn/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../Hook/PublicAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import NavBar from "../Header/NavBar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();
  const { data: todo = [], refetch } = useQuery({
    queryKey: ["todolist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addList?email=${user?.email}`);
      refetch();
      return res.data;
    },
  });
  const handleDelete = (_id) => {
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
        axiosSecure.delete(`/addListDlt/${_id}`).then((res) => {
          refetch();
          console.log(res);

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const createList = {
      email: user?.email,
      Title: data.title,
      Description: data.description,
      Deadline: data.deadline,
      Priority: data.priority,
    };
    console.log(createList);
    axiosSecure
      .post("/addList", createList)
      .then((res) => {
        console.log(res.data, "added");
        reset();
        Swal.fire("successfully added");
      })
      .catch((error) => {
        console.error("create list error:", error);
      });
  };
  // const todo = tasks.filter((task) => task.status === status);
  // console.log(todo);

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col lg:flex-row justify-between mt-20 ml-10 mr-10">
        <div>
          <h1 className="text-3xl font-poppins font-bold text-center">
            Create List
          </h1>
          <hr></hr>
          <div>
            <div className="card">
              <span className="title">Create a list</span>
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="group">
                  <input {...register("title")} type="text" />
                  <label>Title</label>
                </div>
                <div className="group">
                  <input type="text" {...register("description")} id="email" />
                  <label>Description</label>
                </div>
                <div className="group">
                  <input type="date" {...register("date")} id="" />
                  <label>Deadline</label>
                </div>
                <div>
                  <select
                    name="role"
                    className="group w-60 h-10 rounded-sm"
                    {...register("priority")}
                  >
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                    <option value="High">Moderate</option>
                  </select>
                  <label>Priority</label>
                </div>
                <button type="submit">Create</button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold text-center">
            To do List
          </h1>
          <hr></hr>
          <div className="mt-10 ml-10 lg:ml-2">
            {todo?.map((todo) => (
              <div className="mb-5" key={todo._id}>
                <h1>
                  <span className="text-xl font-semibold">Title: </span>{" "}
                  {todo.Title}
                </h1>
                <h1>
                  <span className="text-xl font-semibold">Description: </span>
                  {todo.Description}
                </h1>
                <h1>
                  <span className="text-xl font-semibold">Deadline: </span>
                  {todo.Deadline}
                </h1>
                <h1>
                  <span className="text-xl font-semibold">Priority: </span>
                  {todo.Priority}
                </h1>
                <button
                  onClick={() => handleDelete(todo._id)}
                  className="px-5 py-3 bg-teal-100"
                >
                  Delete
                </button>
                <Link to={`updateList/${todo._id}`}>
                  <button className="px-5 py-3 bg-teal-100 ml-5">Edit</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold text-center">
            Ongoing
          </h1>
          <hr></hr>
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold text-center">
            Complete
          </h1>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
