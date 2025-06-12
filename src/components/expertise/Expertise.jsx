import React from "react";
import Container from "../layout/Container";
import expertiseIcon from "../../assets/expertise_one.png";
import { IoArrowRedoSharp } from "react-icons/io5";

function Expertise() {
  return (
    <div className="py-[100px] bg-myBG">
      <Container>
        <div>
          <div className="flex justify-between items-center">
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
                <IoArrowRedoSharp size={25} color="black"/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Expertise;
