import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./container/Footer/Footer";
import Home from "./Pages/Home/Home";
import SingleBLog from "./Pages/SingleBLog/SingleBLog";
import Preloader from "./Wraper/Preloader/Preloader";
import ScrollToTop from "./Wraper/ScrollToTop";

function App() {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setPreloader(false);
    }, 2500);

    return () => {
      clearInterval(time);
      setPreloader(false);
    };
  }, []);
  return (
    <Preloader loading={preloader}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:name' element={<SingleBLog />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </Preloader>
  );
}

export default App;
