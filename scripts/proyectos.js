function verProyecto(proyecto) {
  // Podés redirigir a páginas individuales, por ejemplo:
  if (proyecto === "casa") {
    window.location.href = "cliente-casa.html";
  } else if (proyecto === "oficina") {
    window.location.href = "cliente-oficina.html";
  } else if (proyecto === "restaurante") {
    window.location.href = "cliente-restaurante.html";
  }
}
