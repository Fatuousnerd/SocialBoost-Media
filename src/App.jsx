import "./app.scss";
// import Loader from "./components/loader/Loader";
import Main from "./components/main/Main";
import { StateProvider } from "./components/order/SharedContext";
import useDeviceType from "./components/useDeviceType/useDeviceType";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  return <>
    <ThemeProvider>
      <StateProvider>

        <Router>
          <div className="main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/*" element={<Main />} />
            </Routes>
          </div>
        </Router>

      </StateProvider>
    </ThemeProvider>
  </>
};

export default App;
