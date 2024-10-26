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
import ThemeProvider from "./utils/ThemeContext";


const App = () => {

  const { isMobile, isTablet, isDesktop } = useDeviceType();

  return <>
    <ThemeProvider>

      <ScrollUp />

      <section>
        <Navbar />
        <Hero />
      </section>

      <section >
        <About />
      </section>

      {isDesktop &&
        <section>
          <Services />
        </section>
      }

      {isMobile &&
        <Services />
      }


      <section>
        <Reviews />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>

    </ThemeProvider>
  </>
};

export default App;
