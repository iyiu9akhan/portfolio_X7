import React from "react";
import Container from "../layout/Container";
import logo from "../../assets/logo.png";
import logo_two from "../../assets/logo_two.png";
import Button from "../layout/button";
import { TypeAnimation } from "react-type-animation";
import SparkleButton from "../layout/sparkleButton/PaintButton";
const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

const navbar_list = [
  "home",
  "skills",
  "projects",
  "experiences",
  "insights",
  "contact",
];

function Navbar() {
  return (
    <div className="bg-[#FFFFF0] py-6">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 h-[62px] cursor-pointer">
            {/* <img src={logo} alt="navbar logo" className="h-[25px]" /> */}
            <img src={logo_two} alt="navbar logo_two" className="h-full" />
            {/* <p className="font-logo text-[72px] leading-[72px]">sameerkhan</p> */}
            <div className="flex items-center h-full">
              <TypeAnimation
                cursor={false}
                style={{
                  fontSize: "60px",
                  fontFamily: "Sacramento",
                  lineHeight: "60px",
                }}
                className={CURSOR_CLASS_NAME}
                sequence={[
                  "sameer",
                  800,
                  "sameerkhan",
                  (el) => el.classList.remove(CURSOR_CLASS_NAME),
                  6000,
                  (el) => el.classList.add(CURSOR_CLASS_NAME),
                  "",
                ]}
                repeat={Infinity}
              />

              <span
                className="ml-3 mb-1"
                style={{
                  color: "#00674F",
                  fontSize: "40px",
                  fontFamily: "Noto Sans Georgian",
                  lineHeight: "72px",
                }}
              >
                ;
              </span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <ul className="flex gap-5 capitalize text-[#0D2F3F] font-primary font-bold">
                {navbar_list.map((item) => (
                  <li className="relative group px-[15px] text-center cursor-pointer">
                    <a
                      href="#"
                      className="relative inline-block
             before:absolute before:opacity-0 before:-translate-x-5 before:transition-all before:duration-300
             after:absolute after:opacity-0 after:translate-x-5 after:transition-all after:duration-300
             group-hover:before:content-['{'] group-hover:before:opacity-100 group-hover:before:-translate-x-3
             group-hover:after:content-['}'] group-hover:after:opacity-100 group-hover:after:translate-x-2"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-actions">
            {/* <Button className="py-[10px] px-[20px] font-primary font-medium">Let’s Collaborate</Button> */}
              <SparkleButton>Let's Collaborate</SparkleButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
