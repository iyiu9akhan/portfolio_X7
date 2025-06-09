import React from "react";
import Container from "../layout/Container";
import logo from "../../assets/logo.png";
import logo_two from "../../assets/logo_two.png";
import Button from "../layout/button";

const navbar_list = ["home", "services", "projects", "contact", "blog"];

function Navbar() {
  return (
    <div className="bg-[#FFFFF0] py-10">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            {/* <img src={logo} alt="navbar logo" className="h-[25px]"/> */}
            <img
              src={logo_two}
              alt="navbar logo_two"
              className="h-[75px] cursor-pointer"
            />
          </div>
          <div className="">
            <ul className="flex gap-5 capitalize font-medium text-[#0D2F3F]">
              {navbar_list.map((item) => (
                <li className="relative group w-[100px] text-center cursor-pointer">
                  <a
                    href="#"
                    className="relative inline-block
             before:absolute before:opacity-0 before:-translate-x-5 before:transition-all before:duration-300
             after:absolute after:opacity-0 after:translate-x-5 after:transition-all after:duration-300
             group-hover:before:content-['{'] group-hover:before:opacity-100 group-hover:before:-translate-x-2
             group-hover:after:content-['}'] group-hover:after:opacity-100 group-hover:after:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button className="py-[10px] px-[20px]">Download CV</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
