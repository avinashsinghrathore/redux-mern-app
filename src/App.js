import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Create" element={<Create />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
