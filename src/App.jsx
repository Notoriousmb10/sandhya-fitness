import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Bgimg from "./assets/bg.png";
import OurSide from "./components/OurSide";
import Middle from "./components/Middle";

function App() {
  return (
    <>
      <main className="relative">
        <section style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
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
      </main>
    </>
  );
}

export default App;
