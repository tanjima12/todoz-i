/* eslint-disable no-undef */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

document.addEventListener("DOMContentLoaded", function () {
  var textWrapper = document.querySelector(".ml7");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml7 .letter",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: ".ml7",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
});

const Banner = () => {
  return (
    <div>
      <div>
        <img
          className="relative h-[750px] w-full"
          src="https://i.ibb.co/z6LBPXX/top-view-break-time-written-sticky-note-list-black-notepad-phone-pen-calculator-ruler-binder-clips-k.jpg"
        ></img>
        <div className="absolute top-48 ml-20 ">
          <h1 className="ml7">
            <span className="text-wrapper">
              <span className="letters text-white">
                Introducing{" "}
                <span className="bg-gradient-to-r from-[#B7F8DB] to-[#50A7C2] text-transparent bg-clip-text">
                  ToDoz.io
                </span>{" "}
                the go-to task <br></br> management solution for students,
                <br></br> office workers, and programmers.
              </span>
            </span>
          </h1>
          <Link>
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
