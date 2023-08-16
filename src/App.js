import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
