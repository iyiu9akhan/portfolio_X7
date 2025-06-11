import React from "react";
import "./errorPage.css";
import error from "../../../assets/error.gif";
import Container from "../Container";
import PaintButton from "../sparkleButton/PaintButton";

function ErrorPage() {
  return (
    <div className="bg-black ">
      <Container>
        <div className="flex items-center flex-col justify-center h-screen">
          <img src={error} alt="" className="" />
          <h1 className="text-[#FFFFF0] font-primary text-[50px] mb-10">
            whoops ! something went wrong
          </h1>
          <PaintButton color="#407AFE">
            {" "}
            previous page
          </PaintButton>
        </div>
      </Container>
    </div>
  );
}

export default ErrorPage;
