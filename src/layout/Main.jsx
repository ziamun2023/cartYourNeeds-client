import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Main = () => {
    return (
        <>
         
    <div className="mx-20  bg-[rgb(249,243,240)] rounded-xl">
    <Navbar/>
    </div>
    
    
         <Outlet></Outlet>
        
            <Footer/>
        </>
    );
};

export default Main;