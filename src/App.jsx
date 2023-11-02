import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layouts/MasterLayout";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MasterLayout />}>
            <Route path="/" element={<Home/>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
