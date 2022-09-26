import React from "react";
import './App.css';

import Main from "./components/Main.js"
import Upload from "./components/Upload.js"
import Name from "./components/Name.js"
import Phone from "./components/Phone.js"
import Email from "./components/Email.js"
import Description from "./components/Description.js"
import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Main/>} />
          <Route  path="/upload" element={<Upload/>}/>
          <Route  path="/name" element={<Name/>}/>
          <Route  path="/phone" element={<Phone/>}/>
          <Route  path="/email" element={<Email/>}/>
          <Route  path="/description" element={<Description/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;