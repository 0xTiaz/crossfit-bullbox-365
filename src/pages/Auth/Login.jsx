import Navbar from "../../components/Navbar/Navbar";
import LoginSection from "../../components/Login/LoginSection";

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <LoginSection />
      </main>
    </div>
  );
};

export default Login;
