import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import Login from "./pages//Auth/Login";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import SignUpSection from "./components/SignUp/SignUpSection";
// import LoginSection from "./components/Login/LoginSection";
// import Dashboard from "./components/user/Dashboard";
// import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginSection />} />
        <Route path="/signup" element={<SignUpSection />} /> */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute role="user">
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* // <Navbar />
      // <HeroSection />
      // <AboutSecion />
      // <Coaches />
      // <Plans />
      // <ScheduleSection />
      // <ContactSection />
      // <FooterSection /> */}
    </>
  );
}

export default App;
