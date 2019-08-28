$(document).ready(function(){
    // Slider
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });

    // Posts
    posts =
    [
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
      var post = `
      <article class="post">
        <h2>${item.tittle}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
      </article>
      `;
      $("#posts").append(post);
    });

    // Selector de temas
    var theme = $("#theme");

    $("#to-green").click(function(){
      theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
      theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css")
    });

});
