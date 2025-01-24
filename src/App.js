import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Company from './Components/Company/Company';
import News from './Components/News/News';
import Contacts from "./Components/Contacts/Contacts";
import Navfooter from "./Components/Navfooter/Navfooter";
import NotFound from "./Components/Notfound/Notfound";

function App() {
  return (
     <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='*' element={<NotFound />}/>
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Navfooter />
    </div>
     </Router>
  );
}

export default App;
