import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "./utils/routes";

import { Home, MainLayout } from "./layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Home} element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
