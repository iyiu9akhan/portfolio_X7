import React from "react";
import Container from "../layout/Container";
import banner_img from "../../assets/banner.png";

function Banner() {
  return (
    <div className="bg-[#FFFFF0] py-[100px]">
      <Container>
        <div className="flex justify-center items-center ">
          <div className="relative before:content-[''] before:absolute before:bottom-0 before:left-[21%] before:w-[45%] before:border-2 before:rounded before:border-[#2E2E2E] before:translate-y-2">
            <img src={banner_img} alt="banner_img" className="relative" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
