import Navbar from "../components/Home/NavbarTwo";
import MenuBar from "../components/MobileMenu/MenuBar";
import Bgimg from "../assets/bg.png";
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
        lj
      </>
    );
  }
  export default Pricing;