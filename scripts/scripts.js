//Función para crear carruseles de imágenes====================================
document.addEventListener("DOMContentLoaded", () => {
  function crearCarrusel(imagenes, selectorContenedor, ruta, claseImagen, intervalo) {
    const contenedor = document.querySelector(selectorContenedor);
    if (!contenedor) return;

    let indice = 0;

    function mostrarSiguiente() {
      contenedor.innerHTML = "";

      const img = document.createElement("img");
      img.src = `${ruta}${imagenes[indice]}`;
      img.classList.add(claseImagen);

      contenedor.appendChild(img);
      indice = (indice + 1) % imagenes.length;

      setTimeout(mostrarSiguiente, intervalo);
    }

    mostrarSiguiente();
  }

  //Carrusel de LOGOS de organismos
  crearCarrusel(
    [
      "01_ingesa.png", "02_policia_local_ceuta.png", "03_policia_nacional.png",
      "04_sepe.png", "05_gobierno_ceuta.png", "06_junta_castilla_leon.png",
      "07_gobierno_larioja.png", "08_junta_galicia.png", "09_comunidad_madrid.png",
      "10_sas.png", "11_salud_madrid.png", "12_salud_castilla_lamancha.png",
      "13_salud_galicia.png", "14_salud_asturias.png", "15_salud_navarra.png",
      "16_correos.png", "17_bomberos_ceuta.png", "18_policia_local_madrid.png",
      "19_gobierno_melilla.png", "20_bomberos_melilla.png", "21_amgevicesa_ceuta.png",
      "22_obimace_ceuta.png", "23_policia_local_melilla.png"
    ],
    ".logos", "styles/img/logos/", "logo-img", 1500
  );

  //Carrusel de MEDALLAS
  crearCarrusel(
    ["medalla_50.png", "medalla_150.png", "medalla_300.png", "medalla_mes.png"],
    ".medallas", "styles/img/medallas/", "medalla-img", 2000
  );

  //Carrusel de CARNETS
  crearCarrusel(
    [
      "batman.png", "beetlejuice.png", "ciclope.png", "corintio.png",
      "daredevil.png", "dos_caras.png", "frankenstein.png", "ghost_rider.png",
      "heisenberg.png", "hellboy.png", "hombre_invisible.png", "hulk.png",
      "indiana.png", "iron_man.png", "joker.png", "klingon.png", "lobo.png",
      "nightcrawler.png", "pinhead.png", "rorschach.png", "ryuk.png", "sandman.png",
      "spiderman.png", "thing.png", "xenomorfo.png", "maul.png", "buzz.png", "terminator.png"
    ],
    ".carnets_oposito", "styles/img/carnets/", "carnet-img", 3000
  );
});

//Mapa menú=====================================================================
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
        mapa.src = `styles/img/mapas/${archivo}`;
      }
    });

    enlace.addEventListener("mouseleave", () => {
      mapa.src = `styles/img/mapas/mapa_blanco.png`;
    });
  });
});

//Menú hamburguesa========================================================================
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

//Carrusel de tarjetas de instrucciones (bienvenido_suscriptor)====================================================
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let currentIndex = 0;

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove("active");
      if (index === currentIndex) {
        card.classList.add("active");
      }
    });

    // Oculta flechas si está en extremos
    leftArrow.style.display = currentIndex === 0 ? "none" : "block";
    rightArrow.style.display = currentIndex === cards.length - 1 ? "none" : "block";
  }

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCards();
    }
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCards();
    }
  });

  updateCards(); // Inicial
});

//Activar el swap de tarjetas de instrucciones en versión responsive==============================
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const container = document.querySelector(".card-container");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove("active");
            if (i === index) card.classList.add("active");
        });
    }

    // Flechas
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    // Swipe con Hammer.js
    const hammer = new Hammer(container);
    hammer.on("swipeleft", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    hammer.on("swiperight", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    // Mostrar la primera tarjeta
    showCard(currentIndex);
});

//Aparición checkboxes en página seleccion_test=========================================================
document.addEventListener("DOMContentLoaded", () => {
  const temasSelect = document.getElementById("temas");
  const temasFieldset = document.getElementById("temas_personalizados_fieldset");
  const checkboxContainer = document.getElementById("checkboxContainer");

  // Crear los 34 checkboxes al cargar
  for (let i = 1; i <= 31; i++) {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "temasSeleccionados[]";
  checkbox.value = i;
  
  // Si el número es de una cifra, añade un 0 delante
  const numeroFormateado = i < 10 ? `0${i}` : `${i}`;
  
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(` T${numeroFormateado}`));
  checkboxContainer.appendChild(label);
}


  // Mostrar/ocultar los checkboxes según selección
  temasSelect.addEventListener("change", function () {
    if (this.value === "personalizados") {
      temasFieldset.style.display = "flex";
    } else {
      temasFieldset.style.display = "none";
      // Desmarcar todos los checkboxes
      document.querySelectorAll('#checkboxContainer input[type="checkbox"]').forEach(cb => cb.checked = false);
    }
  });
});

//Activar swap en tarjeta-test=================================================================
document.addEventListener("DOMContentLoaded", () => {
    const cardWrapper = document.querySelector(".tarjeta_test");
    const leftArrow = cardWrapper.querySelector(".left-arrow");
    const rightArrow = cardWrapper.querySelector(".right-arrow");

    // Simulación de múltiples tarjetas para futuro backend
    const tarjetas = [cardWrapper]; // más adelante: cargar dinámicamente
    let currentIndex = 0;

    function showCard(index) {
        tarjetas.forEach((t, i) => {
            t.style.display = (i === index) ? "flex" : "none";
        });
    }

    // Swipe con Hammer.js
    const hammer = new Hammer(cardWrapper);
    hammer.on("swipeleft", () => {
        currentIndex = (currentIndex + 1) % tarjetas.length;
        showCard(currentIndex);
    });

    hammer.on("swiperight", () => {
        currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
        showCard(currentIndex);
    });

    // Mostrar tarjeta inicial
    showCard(currentIndex);
});

//Aparición de los guardias del login
document.addEventListener("DOMContentLoaded", () => {
  const campos = [document.getElementById("email"), document.getElementById("password")];
  const soldados = document.querySelectorAll(".soldado");

  function mostrarSoldados() {
    soldados.forEach(s => s.classList.add("visible"));
  }

  function ocultarSoldados() {
    soldados.forEach(s => s.classList.remove("visible"));
  }

  // Mostrar al hacer foco en cualquier campo
  campos.forEach(campo => {
    campo.addEventListener("focus", mostrarSoldados);
  });

  // Ocultar al hacer clic fuera del formulario
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".logueate")) {
      ocultarSoldados();
    }
  });
});

//Aparición de opositos en el registro
document.addEventListener("DOMContentLoaded", () => {
  const camposRegistro = document.querySelectorAll(".registrate input");
  const amores = document.querySelectorAll(".amor_izq, .amor_dcha");

  function mostrarAmores() {
    amores.forEach(a => a.classList.add("visible"));
  }

  function ocultarAmores() {
    amores.forEach(a => a.classList.remove("visible"));
  }

  // Mostrar al hacer foco en cualquier input del formulario de registro
  camposRegistro.forEach(input => {
    input.addEventListener("focus", mostrarAmores);
  });

  // Ocultar al hacer clic fuera del formulario
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".registrate")) {
      ocultarAmores();
    }
  });
});










