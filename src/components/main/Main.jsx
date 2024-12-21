// import Main from "../main/Main.jsx";
// import Admin from "../admin/Admin.jsx";
import ScrollUp from "../scrollUp/ScrollUp.jsx";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import About from "../about/About";
import Services from "../services/Services";
import Pricing from "../pricing/Pricing";
import Reviews from "../reviews/Reviews";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import useDeviceType from "../useDeviceType/useDeviceType";

const Main = () => {
    const { isMobile, isTablet, isDesktop } = useDeviceType();
    return (
        <>
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


            {isDesktop &&
                <section>
                    <Pricing />
                </section>
            }

            {isMobile &&
                <Pricing />
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
        </>
    )
}

export default Main