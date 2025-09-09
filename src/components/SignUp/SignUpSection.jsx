import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { FaLock, FaMailBulk, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpSection = () => {
  const { email, password, name } = useState("");
  const handleLogin = () => {};
  return (
    <section className="h-screen bg-[#121212] flex flex-col items-center justify-center px-6 text-center min-h-screen w-full bg-[#121212] text-white overflow-x-hidden">
      <div className="py-8 px-6 bg-white rounded-lg flex flex-col h-auto w-auto justify-center items-center">
        <form
          onSubmit={handleLogin}
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
              placeholder="Nombre"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-2 focus:outline-none border-b border-orange-500 text-black transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <FaMailBulk className="text-orange-500 h-8 w-8 p-2" />
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
          <button className="bg-orange-500 text-white py-2 rounded-lg mt-4 w-full font-semibold">
            Iniciar sessión
          </button>
        </form>
        <p className="text-[13px] text-slate-800 mt-3">
          Tienes cuenta?{" "}
          <Link className="font-medium text-primary underline" to="/login">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpSection;
