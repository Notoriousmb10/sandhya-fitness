import Hero from "../components/Home/Hero";
import HomeNavbar from "../components/Home/HomeNavbar";
import OurSide from "../components/Home/OurSide";
import GymSection from "../components/Home/GymSection";
import Middle from "../components/Home/Middle";
import AboutUs from "../components/Home/AboutUs";
import HomePageVideo from '../assets/HomePageVideo.mp4'
import MenuBar from "../components/MobileMenu/MenuBar";
function Homepage() {
    return (
      <main className="relative">
        <section
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "100vh",  // Adjust height to fit the viewport
            width: "100%",
            position: "relative", // Ensures proper layering of content
          }}
        >
      <video 
        autoPlay 
        muted 
        loop 
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1" // Keeps the video in the background
        }}
      >
        <source src={HomePageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <div className="">
            <HomeNavbar />
          </div>
          <div className="px-20">
            <Hero />
          </div>
        </section>
        <div className="px-10 py-20">
          <GymSection />
        </div>
        <div className="px-20 py-20">
          <Middle />
        </div>
        <div className="px-20 py-20">
          <OurSide />
        </div>
        <div className="flex justify-center">
          <MenuBar />
        </div>
        <div className="flex justify-center">
          <AboutUs />
        </div>
      </main>
    );
  }
  export default Homepage;