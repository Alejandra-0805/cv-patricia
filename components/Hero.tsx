"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    // Agregamos "relative" aquí para controlar las capas absolutas
    <section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
      
      {/* El fondo degradado ahora tiene "-z-10" para que se quede ATRÁS y deje hacer clic */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-cyan-900/20 blur-3xl -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-10"
      >
        <Image
          src="/profile.png"
          alt="Patricia"
          width={180}
          height={180}
          className="rounded-full border-4 border-violet-500 object-cover"
          priority // Carga la imagen de perfil más rápido
        />

        <div>
          <h1 className="text-5xl font-bold text-white">
            Patricia Alejandra Clemente Chacón
          </h1>

          <h2 className="text-violet-400 text-2xl mt-3">
            Frontend Developer
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-relaxed">
            Estudiante de Ingeniería en Tecnologías de la Información con enfoque
            en desarrollo Frontend. Experiencia en la creación de interfaces web
            modernas con React, Next.js y TypeScript, así como integración de APIs
            REST utilizando Fetch API.
          </p>

          {/* Contenedor de botones corregido */}
          <div className="flex gap-4 mt-8 flex-wrap">
            {/* Botón de GitHub */}
            <a
              href="https://github.com/Alejandra-0805" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6114ff] hover:bg-violet-900 transition px-5 py-3 rounded-xl flex items-center gap-2 text-white z-10"
            >
              <FaGithub /> GitHub
            </a>

            {/* Botón de LinkedIn */}
            <a
              href="https://www.linkedin.com/in/patricia-alejandra-clemente-chacon-4466013aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" // 👈 Cambia por tu enlace real
              target="_blank"
              rel="noopener noreferrer"
              className="border border-violet-600 hover:bg-violet-900 transition px-5 py-3 rounded-xl flex items-center gap-2 text-white z-10"
            >
              <FaLinkedin /> LinkedIn
            </a>

            {/* Botón de Currículum */}
            <a
              href="/Curriculum.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-violet-600 hover:bg-violet-900 transition px-5 py-3 rounded-xl flex items-center gap-2 text-white z-10"
            >
              <FaFilePdf /> Curriculum
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}