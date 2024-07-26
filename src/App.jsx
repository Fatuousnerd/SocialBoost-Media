import "./app.scss";
// import Loader from "./components/loader/Loader";
import ScrollUp from "./components/scrollUp/ScrollUp.jsx";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import useDeviceType from "./components/useDeviceType/useDeviceType";
import Test from "./Test";


const App = () => {

  const { isMobile, isTablet, isDesktop } = useDeviceType();

  return <div>
    <ScrollUp/>
    
    {/* <section>
      <Loader/>
    </section> */}

    <section>
      <Navbar/>
      <Hero/>
    </section>
    
    <section>
      <About/>
    </section>

    {isDesktop && 
      <section>
        <Services/>
      </section>
    }

    {isMobile &&
      <Services/>
    }
    
    
    <section>
      <Reviews/>
    </section>
    
    <section>
      <Contact/>
    </section>
    
    <section>
      <Footer/>
    </section>

    {/* <section>
      <Test/>
    </section>
    <section>
      <Test/>
    </section> */}

  </div>;
};

export default App;
