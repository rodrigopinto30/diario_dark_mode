import React from "react";
import BodyMode from "./components/BodyMode";
import FooterMode from "./components/FooterMode";
import Navbar from "./components/Navbar";
import Mode from "./components/Mode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Politica from "./pages/Politica";
import Tendencia from "./pages/Tendencia";
import NotFoundPage from "./pages/NotFoundPage";
import CarruselNoticia from "./components/CarruselNoticia";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cookies from 'universal-cookie';

export function App() {
  const cookies = new Cookies();  
  const [userLog, setUserLog] = React.useState({user: "user", password:"user"});
    
    const valor = -10;
    return (
      <BrowserRouter>
        <Navbar />
       {/*<Mode /> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/tendencia" element={<Tendencia />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        {valor > 0 ?
          <FooterMode />
          :
          <></>
        }
        {
          cookies.get('user') ===  userLog.user? <FooterMode /> : <></>
        }
      </BrowserRouter>
    );
  }
export default App;
