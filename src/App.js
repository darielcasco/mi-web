import React, { useState } from "react";

export default function FreelancerWebsite() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "Paraguay Residency & Relocation Services",
      subtitle:
        "We help foreigners move to Paraguay, obtain residency, open bank accounts, and handle all legal processes fast and stress-free.",
      cta: "Start Your Process Now",
      benefits: [
        "Fast residency process",
        "English & Spanish assistance",
        "Local expertise in Paraguay",
        "Personalized support",
      ],
      steps: [
        "Contact me via WhatsApp",
        "I evaluate your case",
        "Step-by-step guidance",
        "You get your residency",
      ],
    },
    es: {
      title: "Residencia y Relocalización en Paraguay",
      subtitle:
        "Te ayudo a mudarte a Paraguay, obtener residencia, abrir cuentas bancarias y gestionar todos los procesos legales de forma rápida y segura.",
      cta: "Iniciar proceso ahora",
      benefits: [
        "Proceso rápido de residencia",
        "Atención en inglés y español",
        "Experiencia local en Paraguay",
        "Asesoría personalizada",
      ],
      steps: [
        "Contactame por WhatsApp",
        "Evalúo tu caso",
        "Te guío paso a paso",
        "Obtenés tu residencia",
      ],
    },
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f5f5" }}>
      
      {/* HEADER */}
      <div style={{ background: "black", color: "white", padding: 20, display: "flex", justifyContent: "space-between" }}>
        <h2>Darwin Casco</h2>
        <div>
          <button onClick={() => setLang("es")} style={{ marginRight: 10 }}>ES</button>
          <button onClick={() => setLang("en")} style={{ marginRight: 20 }}>EN</button>
          <a
            href="https://wa.me/595986481992?text=Hi, I want help moving to Paraguay"
            target="_blank"
            style={{ background: "green", padding: 10, color: "white", textDecoration: "none", borderRadius: 8 }}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: 60 }}>
        <h1 style={{ fontSize: 40 }}>{t[lang].title}</h1>
        <p style={{ maxWidth: 600, margin: "20px auto" }}>{t[lang].subtitle}</p>
        <a
          href="https://wa.me/595986481992?text=Hi, I want help moving to Paraguay"
          target="_blank"
          style={{ background: "black", color: "white", padding: "15px 25px", borderRadius: 10, textDecoration: "none" }}
        >
          {t[lang].cta}
        </a>
      </div>

      {/* BENEFITS */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", padding: 20 }}>
        {t[lang].benefits.map((b, i) => (
          <div key={i} style={{ background: "white", padding: 20, borderRadius: 10, width: 250 }}>
            ✔ {b}
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <div style={{ textAlign: "center", padding: 40 }}>
        <h2>How it works</h2>
        {t[lang].steps.map((s, i) => (
          <p key={i}>{i + 1}. {s}</p>
        ))}
      </div>

      {/* CONTACT */}
      <div style={{ textAlign: "center", padding: 40 }}>
        <h2>Contact</h2>
        <p>📧 darielcasco@gmail.com</p>
        <p>📱 +595 986 481 992</p>
      </div>

    </div>
  );
}