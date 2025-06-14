import React from "react";
import Container from "../layout/Container";
import expertiseIcon from "../../assets/expertise_one.png";
import { IoArrowRedoSharp } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { SiHtml5 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

import arrow_three from "../../assets/arrow_three.png";

function Expertise() {
  return (
    <div className="pt-[100px] pb-[500px] bg-myBG">
      <Container>
        <div>
          <div className="flex justify-between items-center relative z-999 mb-[60px]">
            <div>
              <p className="capitalize font-primary font-medium text-[35px] text-myOrange">
                skills & tools i’ve
              </p>
              <div className="flex items-center ml-9">
                <img
                  src={expertiseIcon}
                  alt="heading_icon"
                  className="h-[66px]"
                />
                <p className="block text-[35px] text-black font-designFirst font-medium mt-3">
                  mastered with confidence
                </p>
              </div>
            </div>
            <div className="h-[60px] w-[270px] bg-myOrange rounded-full flex justify-between  items-center cursor-pointer">
              <div className="h-[52px] w-[185px] bg-myGreen rounded-full flex items-center justify-center ml-[4px]">
                <p className="capitalize text-white text-[16px] font-primary font-medium">
                  explore my expertise
                </p>
              </div>
              <div className="h-[46px] w-[46px] bg-myBG rounded-full mr-[7px] flex items-center justify-center">
                <IoArrowRedoSharp size={25} color="black" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid gap-[10px] w-full grid-cols-5 auto-rows-[200px]">
              <div
                className="
                      relative bg-myBG rounded-[30px] row-span-2 p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center hover:scale-105 hover:shadow-[0_10px_30px_rgba(240,219,79,0.3)]
                      before:content-[''] before:absolute before:top-[-40%] before:left-[-40%] before:w-[180%] before:h-[180%] 
                      before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(240,219,79,0.7)_100deg,rgba(240,219,79,1)_140deg,rgba(240,219,79,0.7)_180deg,transparent_180deg,transparent_360deg)] 
                      before:blur-[19px] before:z-[1] before:animate-[spin_9s_linear_infinite] before:origin-center
                    "
              >
                <div className="relative w-full h-full bg-[#F8F5E9] rounded-[28px] flex flex-col justify-evenly items-center font-bold text-[18px] z-[2]">
                  <div className="h-[90px] w-[90px] bg-[#F0DB4F] relative rounded-[12px]">
                    <p className="uppercase text-[50px] font-primary font-bold absolute right-[6px] bottom-[6px] leading-[50px]">
                      js
                    </p>
                  </div>
                  <div>
                    <FaReact
                      size={90}
                      color="#61DBFB"
                      className="animate-spin"
                      style={{ animationDuration: "12s" }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F5E9] rounded-[10px] flex items-center justify-center"></div>
              <div className="bg-[#F8F5E9] rounded-[10px] flex items-center justify-center"></div>
              <div className="bg-[#F8F5E9] rounded-[10px] row-span-2"></div>
              <div className="bg-[#F8F5E9] rounded-[10px]"></div>
              <div className="bg-[#F8F5E9] rounded-[10px] col-span-2 flex justify-center items-center gap-5">
                <div>
                  <SiTailwindcss color="#06B6D4" size={66} />
                </div>
                <div>
                  <p className="font-primary font-medium text-[66px]">
                    tailwindcss
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F5E9] rounded-[10px] flex items-center justify-center">
                <SiHtml5 size={90} color="#ff5733" />
              </div>
              <div className="bg-[#F8F5E9] rounded-[10px] flex items-center justify-center">
                <IoLogoCss3 size={90} color="#264de4" />
              </div>
              <div className="bg-[#F8F5E9] rounded-[10px]"></div>
              <div className="bg-[#F8F5E9] rounded-[10px] col-span-2"></div>
              <div className="bg-[#F8F5E9] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Expertise;
