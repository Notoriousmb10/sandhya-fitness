import Coach from "../components/Trainers/Coach";
import Navbar from "../components/Home/NavbarTwo";
import MenuBar from "../components/MobileMenu/MenuBar";
import Bgimg from "../assets/bg.png";
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
  export default Trainers;