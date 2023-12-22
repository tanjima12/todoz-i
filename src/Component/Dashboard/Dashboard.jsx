import Swal from "sweetalert2";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../LogIn/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../Hook/PublicAxios";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const createList = {
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

  return (
    <div className="flex justify-between mt-20 ml-10 mr-10">
      <div>
        <h1 className="text-3xl font-poppins font-bold text-center">
          Create List
        </h1>
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
        <h1 className="text-3xl font-poppins font-bold">To do List</h1>
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">Ongoing</h1>
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">Complete</h1>
      </div>
    </div>
  );
};

export default Dashboard;
