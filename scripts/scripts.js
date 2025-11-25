//Función para crear carruseles de imágenes====================================
//En todas las funciones se usa DOMContentLoaded para esperar a la carga del DOM completo, una buena práctica.
document.addEventListener("DOMContentLoaded", () => {
  function crearCarrusel(imagenes, selectorContenedor, ruta, claseImagen, intervalo) {

    //Se localiza el contenedor en el DOM. Si no existe, se termina la ejecución de la función para evitar errores.
    const contenedor = document.querySelector(selectorContenedor);
    if (!contenedor) return;
    //Esto controla la imagen que se muestra.
    let indice = 0;
    //Función para vaciar el contenedor antes de cargar una nueva imagen.
    function mostrarSiguiente() {
      contenedor.innerHTML = "";
      //Crea un nuevo elemento imagen...
      const img = document.createElement("img");
      //...la ruta de la misma...
      img.src = `${ruta}${imagenes[indice]}`;
      //...y una clase para estilos.
      img.classList.add(claseImagen);
      //Se añade la imagen al contenedor
      contenedor.appendChild(img);
      //Se incrementa el índice y cuando llega al final, vuelve a 0 con %, para que el carrusel no pare.
      indice = (indice + 1) % imagenes.length;
      //Se programa la siguiente ejecución de la función.
      setTimeout(mostrarSiguiente, intervalo);
    }
    //Se ejecuta la función la primera vez, luego sigue automáticamente.
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
  //Selecciona la imagen principal con el mapa en blanco.
  const mapa = document.getElementById("mapa_ccaa");
  //Si no existe el elemento mapa paramos la función para evitar errores.
  if (!mapa) return;
  //Aquí se relaciona cada imagen de CA coloreada con el nombre de la misma.
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
  //Selección de todos los enlaces que van a activar el cambio de mapa.
  const enlaces = document.querySelectorAll("#contenedor_menu a");
  //Se le asigna un evento a cada enlace, la entrada del cursor.
  enlaces.forEach((enlace) => {
    enlace.addEventListener("mouseenter", () => {
      //Se extrae el texto del enlace y se busca en el objeto nombreAArchivo.
      const nombre = enlace.textContent.trim();
      const archivo = nombreAArchivo[nombre];
      //Si existe, se actualiza la ruta con el nombre del archivo.
      if (archivo) {
        mapa.src = `styles/img/mapas/${archivo}`;
      }
    });
    //Otro evento para que vuelva el mapa en blanco cuando el cursor sale del enlace.
    enlace.addEventListener("mouseleave", () => {
      mapa.src = `styles/img/mapas/mapa_blanco.png`;
    });
  });
});

//Menú hamburguesa========================================================================
document.addEventListener("DOMContentLoaded", () => {
  //Selecciona el icono del menú hamburguesa.
  const botonBurger = document.querySelector(".contenedor_icono_burger");
  //Si no existe, se cancela la función.
  if (!botonBurger) return;
  //Se crea evento de click en el icono.
  botonBurger.addEventListener("click", () => {
    //Alterna la visibilidad/invisibilidad de los contenedores del menú.
    document.getElementById("contenedor_oposito")?.classList.toggle("visible");
    document.getElementById("contenedor_menu")?.classList.toggle("visible");
    //Alterna los iconos del menú hamburguesa y la X.
    botonBurger.classList.toggle("icono_cruz");
    botonBurger.classList.toggle("icono_barras");
  });
});

//Carrusel de tarjetas de instrucciones (bienvenido_suscriptor)====================================================
//Permite navegar entre tarjetas usando las flechas dcha e izq.
document.addEventListener("DOMContentLoaded", function () {
  //Este es el NodeList con todas las tarjetas.
  const cards = document.querySelectorAll(".card");
  //Las flechas de navegación.
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  //Y el índice de la tarjeta activa.
  let currentIndex = 0;
  //Función que actualiza el estado de cada tarjeta con la clase "active" para la que vemos.
  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove("active");
      if (index === currentIndex) {
        card.classList.add("active");
      }
    });

    //Oculta flechas dcha o izq si está en la primera o última tarjeta, usando la propiedad none o las muestra con block.
    leftArrow.style.display = currentIndex === 0 ? "none" : "block";
    rightArrow.style.display = currentIndex === cards.length - 1 ? "none" : "block";
  }
  //Al hacer click en la flecha izq, se decrementa el índice si no está en la primera tarjeta.
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCards();
    }
  });
  //Y aquí se incrementa al hacer click en la flecha derecha.
  rightArrow.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCards();
    }
  });
  //Se llama a la función.
  updateCards();
});

//Activar el swap de tarjetas en bienvenido_suscriptor==============================
//Esta función amplia el carrusel anterior añadiendo la librería Hammer.js para hacer swap en pantallas táctiles.
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

    //Flechas
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    //Swipe con Hammer.js
    //Aquí crea la instancia de Hammer y "escucha" los movimientos del dedo en la pantalla.
    const hammer = new Hammer(container);
    hammer.on("swipeleft", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    hammer.on("swiperight", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    //Mostrar la primera tarjeta
    showCard(currentIndex);
});

//Aparición checkboxes en página seleccion_test=========================================================
document.addEventListener("DOMContentLoaded", () => {
  const temasSelect = document.getElementById("temas");
  const temasFieldset = document.getElementById("temas_personalizados_fieldset");
  const checkboxContainer = document.getElementById("checkboxContainer");

  //Crear los 34 checkboxes al cargar
  for (let i = 1; i <= 31; i++) {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "temasSeleccionados[]";
  checkbox.value = i;
  
  //Si el número es de una cifra, añade un 0 delante, para que las columnas queden bien alineadas.
  const numeroFormateado = i < 10 ? `0${i}` : `${i}`;
  
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(` T${numeroFormateado}`));
  checkboxContainer.appendChild(label);
}


  //Mostrar/ocultar los checkboxes según selección
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

//Activar swap en tarjeta-test (de nuevo la librería Hammer)=================================================================
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

    //Swipe con Hammer.js
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

//Función que hace aparecer y desaparecer las imágenes en el login y el registro al hacer focus en los campos.
document.addEventListener("DOMContentLoaded", () => {
  function configurarAparicion(inputs, personajes, contenedor) {
    //Seleccionamos todos los inputs y todas las imágenes.
    const elementos = document.querySelectorAll(inputs);
    const figuras = document.querySelectorAll(personajes);
    //Funciones que muestra u ocultan las imágenes, les añade visibilidad o invisibilidad.
    function mostrar() {
      figuras.forEach(f => f.classList.add("visible"));
    }

    function ocultar() {
      figuras.forEach(f => f.classList.remove("visible"));
    }
    //Y aquí se le asigna el focus los inputs.
    elementos.forEach(el => {
      el.addEventListener("focus", mostrar);
    });
    //Se comprueba si los clicks se hacen dentro del formulario o fuera. Si es fuera, oculta las imágenes.
    document.addEventListener("click", (e) => {
      //Con closest, devuelve el primer ancestro del elemento que coincida con el selector. En caso contrario, devuelve null.
      if (!e.target.closest(contenedor)) {
        ocultar();
      }
    });
  }

  //Login: soldados
  configurarAparicion(
    "#email, #password",
    ".soldado",
    ".logueate"
  );

  //Registro: oposito in love
  configurarAparicion(
    ".registrate input",
    ".amor_izq, .amor_dcha",
    ".registrate"
  );
});











