import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (res.data.user.role === "member") {
        navigate("/user/dashboard");
      } else {
        toast({
          title: "Error!",
          description:
            "Debe contar con una membresia activa para acceder a este portal.",
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesion");
    }
  };

  return (
    <section className="h-screen bg-[#121212] flex flex-col items-center justify-center px-6 text-center">
      <div className="py-8 px-6 bg-white rounded-lg flex flex-col h-auto w-auto justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-80 items-center"
        >
          <Link
            className="w-full flex items-center text-orange-500 text-start"
            to="/"
          >
            <ArrowLeft />
            Inicio
          </Link>
          <img src="./logo.png" alt="bullbox-logo" className="w-34 h-34" />
          <div className="flex items-center justify-center">
            <FaUser className="text-orange-500 h-8 w-8 p-2" />
            <input
              type="email"
              placeholder="Correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-2 focus:outline-none border-b border-orange-500 text-black transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <FaLock className="text-orange-500 h-8 w-8 p-2" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-2 focus:outline-none border-b border-orange-500 text-black transition-all duration-300"
            />
          </div>
          <button className="bg-orange-500 text-white py-2 rounded-lg mt-4 w-full font-semibold hover:cursor-pointer">
            Iniciar sessión
          </button>
        </form>
        <p className="text-[13px] text-slate-800 mt-3">
          No tienes cuenta?{" "}
          <Link className="font-medium text-primary underline" to="/signup">
            Registrarse
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginSection;
