import React from 'react';

const CrecePolicy = () => {
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    },
    title: {
      color: '#2E9CD1', // El color primario de tu App
      borderBottom: '2px solid #2E9CD1',
      paddingBottom: '10px',
    },
    section: {
      marginTop: '25px',
    },
    subtitle: {
      color: '#444',
      fontSize: '1.2rem',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Política de Privacidad - Crece Ventas</h1>
      <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>

      <section style={styles.section}>
        <p>
          <strong>Crece Ventas</strong> es una aplicación diseñada para optimizar la gestión de ventas y clientes de
          <strong> Distribuidora Crece </strong>. Esta política describe cómo manejamos la información en nuestra plataforma.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>1. Información que Recopilamos</h2>
        <p>Para el funcionamiento de la aplicación, recopilamos los siguientes datos:</p>
        <ul>
          <li><strong>Datos de Clientes:</strong> Nombres comerciales, RIF/Tax ID, contactos y direcciones.</li>
          <li><strong>Ubicación:</strong> Coordenadas geográficas (Geo-location) para la ruta de ventas y registro de clientes.</li>
          <li><strong>Datos de Ventas:</strong> Detalles de pedidos, productos y estados de cuenta.</li>
          <li><strong>Información del Dispositivo:</strong> Para asegurar la sincronización local y persistencia de datos.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>2. Uso de la Información</h2>
        <p>La información recopilada se utiliza exclusivamente para:</p>
        <ul>
          <li>Sincronizar las ventas realizadas en campo con nuestro servidor central.</li>
          <li>Facilitar la navegación hacia los locales de los clientes.</li>
          <li>Generar reportes de gestión para administradores y super-administradores.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>3. Almacenamiento Local (SQLite/AsyncStorage)</h2>
        <p>
          Nuestra aplicación utiliza almacenamiento local para permitir el trabajo offline. Estos datos permanecen
          en el dispositivo hasta que son sincronizados exitosamente con nuestros servidores o el usuario borra la caché de la app.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>4. Seguridad</h2>
        <p>
          Implementamos medidas de seguridad para proteger los datos contra accesos no autorizados. El acceso a la
          aplicación está restringido a usuarios autorizados mediante credenciales de acceso.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>5. Contacto</h2>
        <p>
          Si tiene preguntas sobre esta política o el manejo de datos, puede contactarnos en:
          <br />
          <strong>Email:</strong>
          innovapos.admin@gmail.com
        </p>
      </section>

      <footer style={{ marginTop: '50px', fontSize: '0.8rem', textAlign: 'center', color: '#888' }}>
        &copy; {new Date().getFullYear()} Distribuidora Crece - Crece Ventas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default CrecePolicy;