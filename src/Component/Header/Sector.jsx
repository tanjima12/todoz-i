import Lottie from "lottie-react";
import taskani from "../../assets/animation/Animation - 1703185090246.json";

const Sector = () => {
  return (
    <div className="flex ml-10 mr-10 mt-10 items-center justify-around gap-5">
      <div>
        <p className="text-xl font-poppins">
          Introducing our versatile todo list website designed<br></br> with you
          in mind! Whether you are a student, <br></br>office professional, or
          programmer, our platform is <br></br>tailored to elevate your
          productivity.
        </p>
      </div>
      <div className="">
        <Lottie className="h-96" animationData={taskani} loop={true}></Lottie>
      </div>
      <div>
        <p className="text-xl font-poppins">
          Seamlessly manage your tasks, deadlines, and<br></br> priorities in
          one convenient space. Stay organized,<br></br> meet your goals, and
          simplify your daily routine with our<br></br> user-friendly todo list.
          Enhance your efficiency and make<br></br> every day a success!
        </p>
      </div>
    </div>
  );
};

export default Sector;
