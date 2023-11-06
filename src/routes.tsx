import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboards from "./Pages/Leaderboards";
import App from "./Pages/App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/marketplace" element={<App />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
