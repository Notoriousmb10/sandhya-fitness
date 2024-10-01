
import Navbar from "../components/Home/NavbarTwo";
import MenuBar from "../components/MobileMenu/MenuBar";
import Bgimg from "../assets/bg.png";
import PricingCard from "../components/Pricing/PricingCard";
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
        <MenuBar />
      <div className="flex justify-center">
        <PricingCard />
      </div>
    </>
  );
}
export default Pricing;
