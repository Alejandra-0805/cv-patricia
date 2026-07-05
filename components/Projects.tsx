export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-8">
        Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 border border-slate-800 hover:border-violet-500 transition-all p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3 text-violet-400">
            IntegradorVaquita
          </h3>

          <p className="text-slate-300 mb-4">
            Desarrollo completo del frontend para una aplicación de gestión y control de ganado. Diseño de dashboard, formularios, tablas de datos y experiencia de usuario responsiva.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
              HTML
            </span>

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              CSS
            </span>

            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 hover:border-violet-500 transition-all p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3 text-violet-400">
            Sistema de Abarrotes
          </h3>

          <p className="text-slate-300 mb-4">
            Aplicación web desarrollada con Next.js y TypeScript para la gestión de productos, categorías y proveedores mediante integración con APIs REST.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-black/40 text-white px-3 py-1 rounded-full text-sm">
              Next.js
            </span>

            <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              TypeScript
            </span>

            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
              REST APIs
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 hover:border-violet-500 transition-all p-6 rounded-2xl md:col-span-2">
          <h3 className="text-xl font-semibold mb-3 text-violet-400">
            Integración de APIs
          </h3>

          <p className="text-slate-300 mb-4">
            Consumo de servicios REST utilizando Fetch API, manejo de peticiones HTTP, configuración de CORS y comunicación entre frontend y backend.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
              REST APIs
            </span>

            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              Fetch API
            </span>

            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
              CORS
            </span>
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 hover:border-violet-500 transition-all p-6 rounded-2xl md:col-span-2">
  <h3 className="text-xl font-semibold mb-3 text-violet-400">
    Integrador LecturaMétrica
  </h3>

  <p className="text-slate-300 mb-4">
    Aplicación de usuarios para LecturaMétrica: biblioteca personal, sesiones
    de lectura con temporizador, estadísticas de progreso y buzón literario
    anónimo. Construida con Next.js (App Router) y TypeScript, consumiendo
    una API REST propia mediante Fetch API con manejo de tokens, errores y
    paginación.
  </p>

  <div className="flex flex-wrap gap-2">
    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
      Next.js
    </span>

    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
      TypeScript
    </span>

    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
      Fetch API
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
      Tailwind CSS
    </span>

    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
      Recharts
    </span>
  </div>
</div>

      </div>

    </section>
  );
}