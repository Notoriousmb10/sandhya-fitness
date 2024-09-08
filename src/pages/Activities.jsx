import Navbar from "../components/Home/NavbarTwo";
import MenuBar from "../components/MobileMenu/MenuBar";
import Bgimg from "../assets/bg.png";
import ActiviHero from "../components/Activities/ActiviHero";
function Activities() {
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
        <div className="p-12">
          <ActiviHero />
        </div>
        <div className="flex justify-center">
          <MenuBar />
        </div>
      </>
    );
  }
  export default Activities;