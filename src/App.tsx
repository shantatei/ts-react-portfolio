import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "./utils/routes";
import { About, Contact, Home, Projects } from "./layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path={AppRoute.Home} element={<MainLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path={AppRoute.About} element={<About />} />
    //       <Route path={AppRoute.Projects} element={<Projects />} />
    //       <Route path={AppRoute.Contact} element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
