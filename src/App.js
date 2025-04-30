import Student from "./components/students";
import Professor from "./components/professors";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/students" element={<Student/>} />
        <Route path="/professor" element={<Professor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
