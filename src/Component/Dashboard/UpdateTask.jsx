import Swal from "sweetalert2";

import useAxiosPublic from "../Hook/PublicAxios";
import { useParams } from "react-router-dom";

const UpdateTask = () => {
  const axiosSecure = useAxiosPublic();
  const { id } = useParams();

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;

    const Title = form.title.value;
    const Description = form.description.value;
    const Deadline = form.priority.value;
    const Priority = form.deadline.value;

    const updateList = {
      Title,
      Description,
      Deadline,
      Priority,
    };

    axiosSecure
      .patch(`/updateTodo/${id}`, updateList)
      .then((response) => {
        console.log("Success:", response.data);
        Swal.fire("Successfully updated");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="card">
            <span className="title">Create a list</span>
            <form onSubmit={handleUpdateInfo} className="form">
              <div className="group">
                <input name="title" type="text" />
                <label>Title</label>
              </div>
              <div className="group">
                <input type="text" name="description" id="email" />
                <label>Description</label>
              </div>
              <div className="group">
                <input type="date" name="deadline" id="" />
                <label>Deadline</label>
              </div>
              <div>
                <select name="priority" className="group w-60 h-10 rounded-sm">
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
    </div>
  );
};

export default UpdateTask;
