$(document).ready(function(){
    // Slider
    if (window.location.href.indexOf('index') > -1) {     // Validación de que se encuentre el index

      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

    }

    // Posts
    if (window.location.href.indexOf('index') > -1) {
    posts =
    [
      // Se crea cada post que se quiere insertar en objetos JSON
      {
        tittle: "Prueba de titulo 1",
        date: 'Publicado el '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del año '+moment().format('YYYY'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        tittle: "Prueba de titulo 2",
        date: 'Publicado el '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del año '+moment().format('YYYY'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        tittle: "Prueba de titulo 3",
        date: 'Publicado el '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del año '+moment().format('YYYY'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        tittle: "Prueba de titulo 4",
        date: 'Publicado el '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del año '+moment().format('YYYY'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        tittle: "Prueba de titulo 5",
        date: 'Publicado el '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del año '+moment().format('YYYY'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ];


    // Insertar a través del ciclo foreach los post guardados en el JSON, a través de una plantilla y finalmente con el appen en el ID seleccionado
    posts.forEach((item, index) => {
      // Se crea una plantilla que posteriormente será insertada a traves de JS
      var post = `
      <article class="post">
        <h2>${item.tittle}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
      </article>
      `;
      $("#posts").append(post);   // Se insertan los datos en el campo seleccionado
    });

  } // Fin IF

    // Selector de temas
    var theme = $("#theme");

    // Se modifica el href para cambiar el tema
    $("#to-green").click(function(){
      theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
      theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css")
    });

    // Scrol arriba de la web
    $(".subir").click(function(e){
      e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){             // Se selecciona el DIV del login y el formulario
      var form_name = $("#form_name").val();        // Se captura el VAL del input nombre y se asigna a una variable
      localStorage.setItem("form_name", form_name); // Se inserta el valor en el localStorage
    });

    var form_name = localStorage.getItem("form_name"); // Se consulta el valor en el localStorage

    if (form_name != null && form_name != "undefined") { // Se valida que no se envíen datos vacios
      var about_parrafo = $("#about p");

      about_parrafo.html("<br><strong>Bienvenido "+form_name+"</strong> ");   // Se inserta el texto y el valor en el DIV about en el parrafo
      about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>")       // Se crea la opción de cerrar sesión

      $("#login").hide();   // Se oculta el formulario

      $("#logout").click(function(){    // Se selecciona la opción creada anteriormente
        localStorage.clear();           // Se limpia el localStorage
        location.reload();              // Se recarga la página
      });
    } // Fin if


    // ***ACORDEON***
    if (window.location.href.indexOf('about') > -1) {     // Validación de que se encuentre el about
      $('#acordeon').accordion();
    }


    // ***RELOJ***
    if (window.location.href.indexOf('reloj') > -1) {     // Validación de que se encuentre el reloj

      setInterval(function(){     // Se repite cada tiempo que se le ordene
        var reloj = moment().format("hh:mm:ss");
        $("#reloj").html(reloj);
      }, 1000)      // Se repite cada segundo
    }


    // ***VALIDACION***
    if (window.location.href.indexOf('contact') > -1) {     // Validación de que se encuentre el contact

    $("form input[name='date']").datepicker({
      dateFormat: 'dd/mm/yy'
    });      // Picker Calendario

    $.validate({
    lang: 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true
    });
    }

});
