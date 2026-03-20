import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdate = "19 de marzo de 2026";

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-[#121212] rounded-3xl p-8 border border-[#333] shadow-2xl">
        
        {/* Encabezado */}
        <header className="text-center mb-10">
          <h1 className="text-[#39FF14] text-3xl font-black uppercase tracking-widest mb-2">
            Easy P2P
          </h1>
          <h2 className="text-white text-xl font-bold mb-4">
            Política de Privacidad
          </h2>
          <p className="text-sm text-gray-500">
            Última actualización: {lastUpdate}
          </p>
        </header>

        <hr className="border-[#222] mb-8" />

        {/* Contenido */}
        <section className="space-y-8 leading-relaxed">
          
          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-2">1. Introducción</h3>
            <p>
              <strong>Easy P2P</strong> es una herramienta de cálculo y gestión diseñada para la comunidad de 
              <span className="text-white font-semibold"> @laruta_p2p</span>. Valoramos su privacidad y hemos diseñado esta aplicación 
              para que funcione con la mínima exposición de datos posible.
            </p>
          </div>

          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-2">2. Recopilación de Información</h3>
            <p className="mb-4">
              <span className="text-[#39FF14] font-bold">Cero Recolección Externa:</span> No recopilamos, transmitimos ni almacenamos 
              ningún dato personal identificable (PII) en servidores externos. 
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Datos de Cálculo:</strong> Precios, márgenes y conversiones se procesan localmente.</li>
              <li><strong>Historial:</strong> Sus registros se guardan únicamente en la memoria de su dispositivo.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-2">3. Permisos del Dispositivo</h3>
            <p>
              La Aplicación no requiere permisos sensibles como acceso a cámara, contactos, micrófono o ubicación 
              por GPS para su funcionamiento básico.
            </p>
          </div>

          <div className="bg-black/50 p-4 rounded-xl border border-dashed border-[#333]">
            <h3 className="text-[#FFD700] font-bold text-lg mb-2">4. Público Objetivo</h3>
            <p>
              Esta aplicación no está dirigida a menores de 13 años. No solicitamos ni procesamos información de 
              identificación personal de ningún tipo.
            </p>
          </div>

          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-2">5. Servicios de Terceros</h3>
            <p>
              Utilizamos servicios estándar de Google Play para informes de errores y rendimiento. Estos servicios 
              pueden recopilar información técnica del dispositivo de forma anónima para ayudarnos a mejorar la estabilidad de la app.
            </p>
          </div>

          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-2">6. Contacto</h3>
            <p>
              Para cualquier duda sobre esta política, puede contactarnos a través de nuestras redes oficiales en 
              <span className="text-[#39FF14] font-bold"> @laruta_p2p</span>.
            </p>
          </div>

        </section>

        {/* Footer del Modal */}
        <footer className="mt-12 pt-8 border-t border-[#222] text-center text-xs text-gray-600">
          <p>© 2026 Easy P2P - Una herramienta para la comunidad Crypto.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;