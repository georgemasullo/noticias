import React from 'react';
import NoticiaCart from'./noticiaCart'

function NoticiasGrup({noticias}) {
  return (
    <div class="row row-cols-1 row-cols-md-2">
      {Array.isArray(noticias) ? noticias.map((n,index) => (
        <NoticiaCart noticia={n} key={index}/>
      )): "Sem noticias"}
    </div>
  );
}

export default NoticiasGrup;
