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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsServices from "./pages/TermsServices";
import Security from "./pages/Security";
import { UserProvider } from "./components/Context/userContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <UserProvider>
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
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsservices" element={<TermsServices />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/security" element={<Security />} />

        </Routes>
      </BrowserRouter>
    </SidebarProvider>
    </UserProvider>
  );
}

export default App;
