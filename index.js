const formulario = document.getElementById('formularioWhatsApp');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = formulario.nombre.value.trim();
      const edad = formulario.edad.value.trim();
      const objetivo = formulario.objetivo.value.trim();
      const lugar = formulario.lugar.value;
      const dias = formulario.dias.value.trim();
      const lesiones = formulario.lesiones.value.trim() || "❌ Ninguna";
      const equipamiento = formulario.equipamiento.value.trim() || "❌ No indicó";

      const mensaje =
        `👋 ¡Hola! Quisiera mi plan personalizado de entrenamiento:\n\n` +
        `👤 *Nombre:* ${nombre}\n` +
        `🎂 *Edad:* ${edad}\n` +
        `🎯 *Objetivo:* ${objetivo}\n` +
        `🏋️ *Lugar de entrenamiento:* ${lugar}\n` +
        `📅 *Días por semana:* ${dias}\n` +
        `⚠️ *Lesiones:* ${lesiones}\n` +
        `🛠️ *Equipamiento:* ${equipamiento}`;

      const numero = "543515223831";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
    });