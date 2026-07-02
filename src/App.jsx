import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./components/layout/errorPage/ErrorPage";
import Banner from "./components/banner/Banner";
import Expertise from "./components/expertise/Expertise";
// import ShinyText from '../reactBiteAnimation/ShinyText/ShinyText'
import { useEffect } from "react";
import Notice from "./components/layout/notice/Notice"

function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const handleContextMenu = (e) => e.preventDefault();
  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
  //       (e.ctrlKey && e.key.toLowerCase() === "u")
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <>
      <Navbar/>
      <Banner/>
      <Expertise/>
      <Notice/>
      {/* <ErrorPage></ErrorPage> */}
    </>
  );
}

export default App;
