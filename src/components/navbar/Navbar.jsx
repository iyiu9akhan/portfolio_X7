import React from "react";
import Container from "../layout/Container";
import logo from "../../assets/logo.png";
import logo_two from "../../assets/logo_two.png";
import Button from "../layout/button";
import { TypeAnimation } from "react-type-animation";
import PaintButton from "../layout/sparkleButton/PaintButton";
// import SparkleButton from "../layout/sparkleButton/PaintButton";
const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

const navbar_list = [
  "home",
  "expertise",
  "projects",
  "experiences",
  "insights",
  "contact",
];

function Navbar() {
  return (
    <div className="bg-myBG py-6">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 h-[62px] cursor-pointer">
            <div className="h-[75px] w-[75px] bg-myGreen rounded-[12px] flex items-center justify-center ">
              <p className="font-m text-myBG text-[90px] rotate-[108deg] transform scale-x-[-1] mt-[10px] ml-[10px]">M</p>
            </div>
            <div className="flex items-center h-full font-logo">
              <TypeAnimation
                cursor={false}
                style={{
                  fontSize: "60px",
                  // fontFamily: "Sacramento",
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
                className="ml-3 mb-1 text-myGreen"
                style={{
                  // color: "#00674F",
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
             group-hover:after:content-['}'] group-hover:after:opacity-100 group-hover:after:translate-x-2 group-hover:before:text-myOrange group-hover:after:text-myOrange"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-actions">
            {/* <Button className="py-[10px] px-[20px] font-primary font-medium">Let’s Collaborate</Button> */}
              {/* <SparkleButton>Let's Collaborate</SparkleButton> */}
              <PaintButton className="text-primary">Let's Collaborate</PaintButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
