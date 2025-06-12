import React from "react";
import Container from "../layout/Container";
import banner_img from "../../assets/banner.png";
import arrow_one from "../../assets/arrow_one.png";
import arrow_two from "../../assets/arrow_two.png";
import ShinyText from "../../../reactBiteAnimation/ShinyText/ShinyText";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

function Banner() {
  return (
    <div className="bg-myBG pt-[70px] pb-[200px]">
      <Container>
        <div className="flex justify-center items-center ">
          <div className="relative before:content-[''] before:absolute before:bottom-0 before:left-[21%] before:w-[45%] before:border-2 before:rounded before:border-[#2E2E2E] before:translate-y-2 select-none">
            <img
              src={banner_img}
              alt="banner_img"
              className="relative z-[999]"
            />
            <img
              src={arrow_one}
              alt="banner_img"
              className="absolute -left-[225px] top-[251px]"
            />
            <img
              src={arrow_two}
              alt="banner_img"
              className="absolute -right-[217px] bottom-[82px]"
            />
            <div className="absolute top-[130px] -left-[410px]">
              <h2 className="font-logo text-[45px]">Hey ! I am</h2>
              <h1 className="font-primary capitalize font-bold text-[50px] text-myOrange">
                sameer khan.
              </h1>
              <p className="font-primary text-[#303030] font-medium text-base -mt-3 ">
                username : iyiu9akhan
              </p>
            </div>
            <div className="absolute bottom-[10px] -right-[415px] w-[400px]">
              <p className="font-primary font-medium text-base text-justify leading-6.5">
                <span className="text-myOrange font-black text-[29px] leading-0">
                  "
                </span>
                In Progress : MERN Stack Developer | Currently mastering the
                MERN stack through hands-on projects using React, Node, Express
                & MongoDB | Cloud enthusiast | Turning ideas into seamless
                digital experiences.
                <span className="text-myOrange font-black text-[29px] leading-0">
                  "
                </span>
              </p>
            </div>
            <div className="absolute -right-[80px] -bottom-[190px]">
              <p className="font-designFirst capitalize text-[45px] -mb-8 text-myOrange">
                clean
              </p>
              <p className="capitalize ml-9 text-[55px] font-primary font-black">
                <div className="flex items-center">
                  <ShinyText text="coder" speed={3} />
                  <span
                    style={{
                      color: "#FF9D57",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                    className="mt-11 ml-2"
                  >
                    •
                  </span>
                </div>
              </p>
            </div>
            <div className="absolute -right-[290px] top-[20px] flex justify-between gap-3 items-center">
              <div className="flex flex-col gap-3 items-center">
                <a href="#">
                  <ImLinkedin
                    size={35}
                    className="text-[#0072b1] cursor-pointer"
                  />
                </a>
                <a href="https://github.com/iyiu9akhan" target="_blank">
                  <FaGithubSquare size={40} className="cursor-pointer" />
                </a>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <a href="https://x.com/iyiu9akhan" target="_blank">
                  <FaSquareXTwitter size={40} className="cursor-pointer" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iyiu9akhan@mail.com"
                  target="_blank"
                >
                  <SiGmail
                    size={40}
                    className="text-[#EA4335] cursor-pointer"
                  />
                </a>
              </div>
            </div>{" "}
            <div className="absolute -left-[260px] -bottom-[80px] flex justify-between gap-3 items-center">
                <a href="#">
                  <SiMongodb
                    size={40}
                    className="text-[#3FA037] cursor-pointer"
                  />
                </a>
                <a href="https://github.com/iyiu9akhan" target="_blank">
                  <SiExpress
                    size={40}
                    className="cursor-pointer text-[#303030]"
                  />
                </a>
                <a href="https://x.com/iyiu9akhan" target="_blank">
                  <FaReact
                    size={40}
                    className="cursor-pointer  text-[#61DBFB]"
                  />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iyiu9akhan@mail.com"
                  target="_blank"
                >
                  <FaNodeJs
                    size={40}
                    className="text-[#68A063] cursor-pointer"
                  />
                </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
