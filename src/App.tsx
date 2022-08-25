import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "./utils/routes";
import { Home, MainLayout } from "./layout";
import { ColorModeContextProvider } from "./context/ColorModeContext";

function App() {
  return (
    <ColorModeContextProvider>
    
      <Router>
        <Routes>
          <Route path={AppRoute.Home} element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ColorModeContextProvider>
  );
}

export default App;
