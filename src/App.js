import React, { useState } from "react";

export default function FreelancerWebsite() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Servicios para Extranjeros en Paraguay",
      subtitle:
        "Te ayudo con interpretación inglés-español, trámites legales y administrativos, y todo lo necesario para instalarte y hacer negocios en Paraguay.",
      cta: "Contactar ahora",
    },
    en: {
      title: "Services for Foreigners in Paraguay",
      subtitle:
        "I help you with English-Spanish interpretation, legal and administrative processes, and everything you need to settle in Paraguay.",
      cta: "Contact now",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ backgroundColor: "black", color: "white", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Darwin Casco</h2>
        <div>
          <button onClick={() => setLang("es")} style={{ marginRight: "10px" }}>ES</button>
          <button onClick={() => setLang("en")} style={{ marginRight: "20px" }}>EN</button>
          <a href="https://wa.me/595986481992" target="_blank" style={{ backgroundColor: "green", padding: "10px", color: "white", textDecoration: "none", borderRadius: "8px" }}>WhatsApp</a>
        </div>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "40px" }}>{t[lang].title}</h1>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>{t[lang].subtitle}</p>
        <a href="https://wa.me/595986481992" target="_blank" style={{ backgroundColor: "black", color: "white", padding: "15px 25px", borderRadius: "10px", textDecoration: "none" }}>
          {t[lang].cta}
        </a>
      </div>

      {/* Servicios */}
      <div style={{ display: "flex", gap: "20px", padding: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Interpretación</h3>
          <p>Inglés ↔ Español en tiempo real</p>
        </div>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Residencias</h3>
          <p>Gestión completa para extranjeros</p>
        </div>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Consultoría</h3>
          <p>Estudio de mercado y negocios</p>
        </div>
      </div>

      {/* Contacto */}
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Contacto</h2>
        <p>📧 darielcasco@gmail.com</p>
        <p>📱 +595 986 481 992</p>
      </div>
    </div>
  );
}