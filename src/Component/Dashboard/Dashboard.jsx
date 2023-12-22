import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="flex justify-between mt-20 ml-10 mr-10">
      <div>
        <h1 className="text-3xl font-poppins font-bold text-center">
          Create List
        </h1>
        <div>
          <div className="card">
            <span className="title">Create a list</span>
            <form className="form">
              <div className="group">
                <input type="text" />
                <label>Title</label>
              </div>
              <div className="group">
                <input type="text" id="email" />
                <label>Description</label>
              </div>
              <div className="group">
                <input type="date" id="" />
                <label>Deadline</label>
              </div>
              <div>
                <select name="role" className="group w-60 h-10 rounded-sm">
                  <option value="Participants">Low</option>
                  <option value="Healthcare Professionals">High</option>
                  <option value="Organizers">Moderate</option>
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
