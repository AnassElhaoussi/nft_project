import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboards from "./Pages/Leaderboards";
import App from "./Pages/App";
import {Link} from "react-router-dom"

export const Main = () => {
    return (
        <div>
            <Link to="/marketplace">Go to marketplace</Link>
            <Link to="/leaderboards">Go to leaderboards</Link>
        </div>
    )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/marketplace" element={<App />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
