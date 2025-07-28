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

  const plan = document.getElementById('plan');
  const extra = document.getElementById('extra');

  const valorPlan = parseInt(plan.value) || 0;
  const valorExtra = parseInt(extra.value) || 0;
  const total = valorPlan + valorExtra;

  const mensaje =
    `👋 ¡Hola! Quisiera mi plan personalizado de entrenamiento:\n\n` +
    `👤 *Nombre:* ${nombre}\n` +
    `🎂 *Edad:* ${edad}\n` +
    `🎯 *Objetivo:* ${objetivo}\n` +
    `🏋️ *Lugar de entrenamiento:* ${lugar}\n` +
    `📅 *Días por semana:* ${dias}\n` +
    `⚠️ *Lesiones:* ${lesiones}\n` +
    `🛠️ *Equipamiento:* ${equipamiento}\n\n` +
    `💰 *Precio del plan:* $${valorPlan.toLocaleString()}\n` +
    `➕ *Extra:* $${valorExtra.toLocaleString()}\n` +
    `🧾 *Total a pagar:* $${total.toLocaleString()}`;

  const numero = "543515223831";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});

const plan = document.getElementById('plan');
const extra = document.getElementById('extra');
const total = document.getElementById('total');

function actualizarTotal() {
  const valorPlan = parseInt(plan.value) || 0;
  const valorExtra = parseInt(extra.value) || 0;
  const suma = valorPlan + valorExtra;
  total.textContent = `Total: $${suma.toLocaleString()}`;
}

plan.addEventListener('change', actualizarTotal);
extra.addEventListener('change', actualizarTotal);
