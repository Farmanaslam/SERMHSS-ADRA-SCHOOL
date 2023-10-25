import "./App.css";
import "./events.css"
import About from "./Components/About";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import Feeparticulars from "./Components/Feeparticulars";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Exam from "./Components/Exam";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Academic from "./Components/Academic";
import Holiday from "./Components/Holiday";
import Mandatory from "./Components/Mandatory";
import Foot from "./Components/Foot";
import Events from "./Components/Events";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="feeparticulars" element={<Feeparticulars />} />
        <Route path="exam" element={<Exam />} />
        <Route path="academic" element={<Academic />} />
        <Route path="holiday" element={<Holiday />} />
        <Route path="mandatory" element={<Mandatory />} />
        <Route path="events" element={<Events />} />
      </Routes>

      <Foot />
    </>
  );
}

export default App;
