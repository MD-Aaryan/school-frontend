import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Popup from "./components/popup"; // your popup component
import About from "./components/about";
import Contact from "./pages/contact";
import AdminLogin from "./pages/adminLogin"; // your homepage component
// import ProtectedRoute from "./components/protectedRoutes"; // for admin auth protection
import ImageUpload from "./components/imageform";
import ImageGallary from "./components/imageGallary";
import Home from "./pages/home";
import Misson from "./pages/mission";
import Member from "./pages/member";
import Syllabus from "./pages/syllabus";

export default function App() {
  return (
    <div>
      <Popup /> {/* This popup will be rendered on all pages */}
      <Routes>
        {/* Main route with nested outlet */}
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/gallary" element={<ImageGallary />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/mission" element={<Misson />} />
          <Route path="/member" element={<Member />} />
          <Route path="/syllabus" element={<Syllabus />} />

          {/* Redirect unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
