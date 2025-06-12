import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./components/layout/errorPage/ErrorPage";
import Banner from "./components/banner/Banner";
import Expertise from "./components/expertise/Expertise";
// import ShinyText from '../reactBiteAnimation/ShinyText/ShinyText'
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Banner/>
      <Expertise/>
      {/* <ErrorPage></ErrorPage> */}
    </>
  );
}

export default App;
