import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatorProfilePage from "./pages/CreatorProfilePage";
import ExplorePage from "./pages/ExplorePage";
import MembershipPage from "./pages/MembershipPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/creator/:username" element={<CreatorProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/membership/:username" element={<MembershipPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;