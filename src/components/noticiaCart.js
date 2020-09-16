import React from 'react';


function NoticiasCart({noticia}) {
  return (
    <div class="col mb-4">
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">{noticia.titulo}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{noticia.autor}</h6>
      <p class="card-text">{noticia.subtitulo}</p>
      <p class="card-text"><small class="text-muted">Publicado em {noticia.categoria} as {noticia.data}</small></p>
    </div>
    </div>
  </div>
  );
}

export default NoticiasCart;
