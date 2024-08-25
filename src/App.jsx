import "./index.css";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";
import Coach from "./components/Trainers/Coach";
import OurSide from "./components/Home/OurSide";
import Middle from "./components/Home/Middle";
import Bgimg from "./assets/bg.png";
import MenuBar from "./components/MobileMenu/MenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/Context/SidebarContext";

function Homepage() {
  return (
    <main className="relative">
      <section
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="">
          <Navbar />
        </div>
        <div className="px-20">
          <Hero />
        </div>
      </section>
      <div className="px-20 py-20">
        <Middle />
      </div>
      <div className="px-20 py-20">
        <OurSide />
      </div>
      <div className="flex justify-center">
        <MenuBar />
      </div>
    </main>
  );
}

function Trainers() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
      </section>
      <div className="px-10">
        <Coach />
      </div>
      <div className="flex justify-center">
        <MenuBar />
      </div>
    </>
  );
}
function Pricing() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
      </section>
      <div className="flex justify-center">
        <MenuBar />
      </div>
    </>
  );
}
function Programs() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
      </section>
      <div className="flex justify-center">
        <MenuBar />
      </div>
    </>
  );
}
function Transformations() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
      </section>
      <div className="flex justify-center">
        <MenuBar />
      </div>
    </>
  );
}

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/transformations" element={<Transformations />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
