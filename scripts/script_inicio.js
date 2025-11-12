document.addEventListener("DOMContentLoaded", () => {
  const logos = [
    "01_ingesa.png",
    "02_policia_local_ceuta.png",
    "03_policia_nacional.png",
    "04_sepe.png",
    "05_gobierno_ceuta.png",
    "06_junta_castilla_leon.png",
    "07_gobierno_larioja.png",
    "08_junta_galicia.png",
    "09_comunidad_madrid.png",
    "10_sas.png",
    "11_salud_madrid.png",
    "12_salud_castilla_lamancha.png",
    "13_salud_galicia.png",
    "14_salud_asturias.png",
    "15_salud_navarra.png",
    "16_correos.png",
    "17_bomberos_ceuta.png",
    "18_policia_local_madrid.png"    
  ];

  const logosDiv = document.querySelector(".logos");
  let currentIndex = 0;

  function showNextLogo() {
    logosDiv.innerHTML = "";

    const img = document.createElement("img");
    img.src = `/styles/img/logos/${logos[currentIndex]}`;
    img.classList.add("logo-img");

    logosDiv.appendChild(img);

    currentIndex = (currentIndex + 1) % logos.length;

    setTimeout(showNextLogo, 1500); // duración: 1.5s por logo
  }

  showNextLogo();
});

document.addEventListener("DOMContentLoaded", () => {
  // Logos animación ya incluida...

  const medallas = [
    "medalla_50.png",
    "medalla_150.png",
    "medalla_300.png",
    "medalla_mes.png"
    // Añade más si las tienes
  ];

  const medallasDiv = document.querySelector(".medallas");
  let medallaIndex = 0;

  function mostrarSiguienteMedalla() {
    medallasDiv.innerHTML = "";

    const img = document.createElement("img");
    img.src = `/styles/img/medallas/${medallas[medallaIndex]}`;
    img.classList.add("medalla-img");

    medallasDiv.appendChild(img);

    medallaIndex = (medallaIndex + 1) % medallas.length;

    setTimeout(mostrarSiguienteMedalla, 2000); // cada 2s
  }

  mostrarSiguienteMedalla();
});

document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.getElementById("mapa_ccaa");

  if (!mapa) return;

  const nombreAArchivo = {
    "Andalucía": "mapa_andalucia.png",
    "Aragón": "mapa_aragon.png",
    "Asturias": "mapa_asturias.png",
    "Baleares": "mapa_baleares.png",
    "Canarias": "mapa_canarias.png",
    "Cantabria": "mapa_cantabria.png",
    "Castilla La Mancha": "mapa_castilla_la_mancha.png",
    "Castilla y León": "mapa_castilla_leon.png",
    "Cataluña": "mapa_catalunia.png",
    "Ceuta y Melilla": "mapa_ceuta_melilla.png",
    "Extremadura": "mapa_extremadura.png",
    "Galicia": "mapa_galicia.png",
    "La Rioja": "mapa_la_rioja.png",
    "Comunidad de Madrid": "mapa_madrid.png",
    "Murcia": "mapa_murcia.png",
    "Navarra": "mapa_navarra.png",
    "País Vasco": "mapa_pais_vasco.png",
    "Comunidad Valenciana": "mapa_valencia.png"
  };

  const enlaces = document.querySelectorAll("#contenedor_menu a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("mouseenter", () => {
      const nombre = enlace.textContent.trim();
      const archivo = nombreAArchivo[nombre];

      if (archivo) {
        mapa.src = `/styles/img/mapas/${archivo}`;
      }
    });

    enlace.addEventListener("mouseleave", () => {
      mapa.src = `/styles/img/mapas/mapa_blanco.png`;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const botonBurger = document.querySelector(".contenedor_icono_burger");

  if (!botonBurger) return;

  botonBurger.addEventListener("click", () => {
    document.getElementById("contenedor_oposito")?.classList.toggle("visible");
    document.getElementById("contenedor_menu")?.classList.toggle("visible");
    botonBurger.classList.toggle("icono_cruz");
    botonBurger.classList.toggle("icono_barras");
  });
});




