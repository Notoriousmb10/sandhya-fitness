import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/Context/SidebarContext";
import Activities from "./pages/Activities";
import Homepage from "./pages/Homepage";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import Transformations from "./pages/Transformations";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/transformations" element={<Transformations />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
