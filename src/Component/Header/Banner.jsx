/* eslint-disable no-undef */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const Banner = () => {
  return (
    <div>
      <div>
        <img
          className="relative lg:h-[600px] lg:w-full"
          src="https://i.ibb.co/z6LBPXX/top-view-break-time-written-sticky-note-list-black-notepad-phone-pen-calculator-ruler-binder-clips-k.jpg"
        ></img>
        <div className="absolute top-20 font-bold ml-5 lg:top-60 lg:ml-20 ">
          <h1 className="text-white lg:text-3xl font-poppins ">
            Welcome to
            <span className="bg-gradient-to-r from-[#B7F8DB] to-[#50A7C2] text-transparent bg-clip-text">
              ToDoz.io
            </span>
            your ultimate destination<br></br> for efficient task management!
            Empower your<br></br> productivity, stay organized, and achieve your
            <br></br> goals seamlessly with our intuitive to-do list<br></br>{" "}
            platform.
          </h1>
          <Link to="/dashboard">
            <Button variant="contained" endIcon={<SendIcon />}>
              Lets Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
