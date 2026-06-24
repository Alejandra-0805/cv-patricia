"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
        import Image from "next/image";
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
></motion.div>
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="flex flex-col md:flex-row items-center gap-10">

        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-cyan-900/20 blur-3xl"></div>

    <Image
        src="/profile.png"
        alt="Patricia"
        width={180}
        height={180}
        className="rounded-full border-4 border-violet-500 object-cover"
    />

        <div>

          <h1 className="text-5xl font-bold">
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

       <div className="flex gap-4 mt-8">

            <a
                href="https://github.com/Alejandra-0805"
                target="_blank"
                className="bg-violet-600 hover:bg-violet-700 transition px-5 py-3 rounded-xl flex items-center gap-2"
            >
            <FaGithub />
            GitHub
            </a>

             <a
                href="https://www.linkedin.com/in/patricia-alejandra-clemente-chacon-4466013aa"
                target="_blank"
                className="border border-violet-600 hover:bg-violet-900 transition px-5 py-3 rounded-xl flex items-center gap-2"
            >
             <FaLinkedin />
              LinkedIn
             </a>

        </div>

        </div>

      </div>

    </section>
  );
}