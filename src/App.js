// import logo from './logo.svg';
import './App.css';
import { EachPixel } from './components/eachPixel';
import { Tools } from './components/tools';
import { useState } from "react";
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Login } from './components/login';


// Globals
let content = [...Array(25600).keys()]
let initColor = "#aabbcc";

function App() {
  const [paintColor, setColor] = useState(initColor);
  const [isErase, setErase] = useState(true);
  const [isHover, setHover] = useState(false);
  let [curUsername, setCurUsername] = useState("");

  // Login Function
  function login(username, password, navigate) {
    setCurUsername(username);
    console.log(password)
    navigate("/canvas");
  }
  return (
    <div >
      {/* Header  */}
      <Header />

      <div className="spaceTop"></div>

      <BrowserRouter> 
        <Routes>
          <Route path="/canvas" element={
            <div>
              {/* Tools */}
              <div>
                <Tools curUsername={curUsername} paintColor={paintColor} setColor={setColor} isErase={isErase} setErase={setErase} isHover={isHover} setHover={setHover}/>
              </div>

              {/* Canvas */}
              <div className="gridView" style={{backgroundColor: paintColor}}>
                {
                  content.map((content, index) => {
                    return(
                      <EachPixel paintColor={paintColor} isErase={isErase} isHover={isHover} index={index}/>
                    );
                  })
                }        
              </div>
            </div>
          } />
          <Route path="/" element={
            <div>
              <Login login={login} />
            </div>
          } />
        </Routes>
      </BrowserRouter>

      <div className="spaceBottom"></div>

      {/* Footer  */}
      <Footer />

    </div>
  );
}

export default App;
