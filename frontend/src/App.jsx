import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
