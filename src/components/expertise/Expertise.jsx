import React from "react";
import Container from "../layout/Container";
import expertiseIcon from "../../assets/expertise_one.png";
import { IoArrowRedoSharp } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { SiHtml5 } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import arrow_three from "../../assets/arrow_three.png";
import express_logo from "../../assets/expertise/express_logo.svg"
import { SiNextdotjs } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";


function Expertise() {
  return (
    <div id="expertise" className="pt-[80px] pb-[100px] bg-myBG">
      <Container>
        <div>
          <div className="flex justify-between items-center relative mb-[40px]">
            <div>
              <p className="capitalize font-primary font-medium text-[35px] text-myOrange">
                skills & tools i’ve
              </p>
              <div className="flex items-center ml-8">
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
              <div className="h-[52px] w-[185px] bg-white rounded-full flex items-center justify-center ml-[4px]">
                <p className="capitalize text-black text-[16px] font-primary font-medium">
                  explore my expertise
                </p>
              </div>
              <div className="h-[46px] w-[46px] bg-myBG rounded-full mr-[7px] flex items-center justify-center">
                <IoArrowRedoSharp size={25} color="black" />
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-[10px] w-full grid-cols-5 auto-rows-[200px]">
              {/* git and github component anchored here */}
              <div className="relative bg-[#F0F0F0] rounded-[15px] row-span-2 p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-40%] before:left-[-40%] before:w-[180%] before:h-[180%] 

                      before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(35,35,35,0.7)_100deg,rgba(35,35,35,1)_140deg,rgba(35,35,35,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_9s_linear_infinite] before:origin-center">
                <div className="relative w-full h-full bg-[#F0F0F0] rounded-[12px] flex flex-col justify-evenly items-center font-bold cursor-default select-none text-[18px] z-[2]">
                  <div>
                    <FaGitAlt size={110} color="#F05639" />
                  </div>

                  <div>
                    <FaGithubSquare size={90} color="#1A1E22" />
                  </div>
                </div>
              </div>
              {/* git and github component released here */}


              {/* mongodb component anchored here */}
              <div className="relative bg-[#E6FAE1] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 
                      before:rounded-full

                   before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(76,176,80,0.7)_100deg,rgba(76,176,80,1)_140deg,rgba(76,176,80,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_10s_linear_infinite_reverse] before:origin-center">
                <div className="relative w-full h-full bg-[#E6FAE1] rounded-[11px] flex items-center justify-center z-[2]">
                  <BiLogoMongodb size={95} color="#49A63B" />
                </div>
              </div>
              {/* mongodb component released here */}


              {/* bootstrap component anchored here */}
              <div className="relative bg-[#F4EEFF] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 
                      before:rounded-full

                    before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(119,18,247,0.7)_100deg,rgba(119,18,247,1)_140deg,rgba(119,18,247,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_10s_linear_infinite] before:origin-center">
                <div className="relative h-full w-full bg-[#F4EEFF] rounded-[11px] flex items-center justify-center z-[2]">
                  <FaBootstrap color="#7712F7" size={90} />
                </div>
              </div>
              {/* bootstrap component released here */}


              {/* js and react component anchored here  */}
              <div className="relative bg-[#E6F4FB] rounded-[15px] row-span-2 p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-40%] before:left-[-40%] before:w-[180%] before:h-[180%] 

                      before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(6,182,212,0.7)_100deg,rgba(6,182,212,1)_140deg,rgba(6,182,212,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_9s_linear_infinite] before:origin-center">
                <div className="relative w-full h-full bg-[#E6F4FB] rounded-[12px] flex flex-col justify-evenly items-center font-bold cursor-default select-none text-[18px] z-[2]">
                  <div className="h-[90px] w-[90px] bg-[#F0DB4F] relative rounded-[11px]">
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
              {/* js and react component released here  */}


              {/* nodejs component anchored here */}
              <div className="relative bg-[#E6FAE1] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 
                      before:rounded-full 
                      
                    before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(76,176,80,0.7)_100deg,rgba(76,176,80,1)_140deg,rgba(76,176,80,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_11s_linear_infinite_reverse] before:origin-center">
                <div className="relative h-full bg-[#E6FAE1] rounded-[11px] flex items-center justify-center z-[2]">
                  <DiNodejs size={190} color="#4CB050" />
                </div>
              </div>
              {/* nodejs component released here */}


              {/* tailwind css component anchored here */}
              <div className="relative bg-[#E6F4FB] rounded-[15px] col-span-2 p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-100%] before:left-[] before:w-[100%] before:h-[300%] 
                      
                      before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(6,182,212,0.7)_100deg,rgba(6,182,212,1)_140deg,rgba(6,182,212,0.7)_180deg,transparent_180deg,transparent_360deg)]
                      
                      before:blur-[19px] before:z-[1] before:animate-[spin_7s_linear_infinite_reverse] before:origin-center">
                <div className="relative h-full bg-[#E6F4FB] rounded-[11px]  flex justify-center items-center cursor-default select-none gap-5 z-[2]">
                  <div>
                    <SiTailwindcss color="#06B6D4" size={66} className="mt-2" />
                  </div>
                  <div>
                    <p className="font-primary font-medium text-[60px]">
                      tailwindcss
                    </p>
                  </div>
                </div>
              </div>
              {/* tailwind css component released here*/}


              {/* css3 component anchored here */}
              <div className="relative bg-[#E6F4FB] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 
                      before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(38,77,228,0.7)_100deg,rgba(38,77,228,1)_140deg,rgba(38,77,228,0.7)_180deg,transparent_180deg,transparent_360deg)] 
                      before:blur-[19px] before:z-[1] before:animate-[spin_8s_linear_infinite_reverse] before:origin-center">
                <div className="relative w-full h-full bg-[#E6F4FB] rounded-[11px] flex items-center justify-center z-[2]">
                  <IoLogoCss3 size={90} color="#264de4" />
                </div>
              </div>
              {/* css3 component released here */}


              {/* html5 component anchored here */}
              <div className="relative bg-[#F8E6E1] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 
                      before:rounded-full

                      before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(255,87,51,0.7)_100deg,rgba(255,87,51,1)_140deg,rgba(255,87,51,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_11s_linear_infinite] before:origin-center">
                <div className="relative w-full h-full bg-[#F8E6E1] rounded-[11px] flex items-center justify-center z-[2]">
                  <SiHtml5 size={90} color="#ff5733" />
                </div>
              </div>
              {/* html5 component released here */}


              {/* typescript component anchored here */}
              <div className="relative bg-[#E0EFFF] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 
                      before:rounded-full

                    before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(45,121,199,0.7)_100deg,rgba(45,121,199,1)_140deg,rgba(45,121,199,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_10s_linear_infinite] before:origin-center">

                <div className="relative h-full w-full bg-[#E0EFFF] rounded-[11px] flex items-center justify-center z-[2]">
                  <BiLogoTypescript color="#2D79C7" size={105} />
                </div>
              </div>
              {/* typescript component released here */}


              {/* js and expressJs component anchored here  */}
              <div className="relative bg-[#FBE2E2] rounded-[15px] col-span-2 p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-100%] before:left-[] before:w-[100%] before:h-[300%] 

                     before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(137,0,0,0.7)_100deg,rgba(137,0,0,1)_140deg,rgba(137,0,0,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_11s_linear_infinite] before:origin-center">
                <div className="relative h-full bg-[#FBE2E2] rounded-[11px]  flex justify-evenly items-center cursor-default select-none gap-5 z-[2]">
                  <div >
                    <SiMongoose size={105} color="#890000" />
                  </div>
                  <img src={express_logo} alt="express_logo" className="h-[60px] w-auto object-contain" />
                </div>
              </div>
              {/* js and expressJs component released here  */}


              {/* nextjs component anchored here */}
              <div className="relative bg-[#F0F0F0] rounded-[15px] p-[4px] overflow-hidden 
                      transition-all duration-300 origin-center 
                      before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] 

                    before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,rgba(35,35,35,0.7)_100deg,rgba(35,35,35,1)_140deg,rgba(35,35,35,0.7)_180deg,transparent_180deg,transparent_360deg)]

                      before:blur-[19px] before:z-[1] before:animate-[spin_11s_linear_infinite_reverse] before:origin-center">
                <div className="relative h-full w-full bg-[#F0F0F0] rounded-[11px] flex items-center justify-center z-[2]">
                  <SiNextdotjs size={90} color="#232323" />
                </div>
              </div>
              {/* nextjs component released here */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Expertise;
