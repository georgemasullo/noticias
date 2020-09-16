import React,{Component} from 'react';

import './App.css';
import Navbar from './components/navbar'
import NoticiasGrup from'./components/noticiasGrup'
import NavPagina from'./components/navPagina'
import Busca from'./components/busca'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      filtro:[],
      isFiltro:false,
      pagina:1,
      qtdPaginas:1,
      indice:1
    }
    this.filtroNoticias=this.filtroNoticias.bind(this)
    this.filtroCategoria=this.filtroCategoria.bind(this)
    this.mudarPagina=this.mudarPagina.bind(this)
  }
  
  componentDidMount() {
    fetch('https://5f61624707c1770016c51f97.mockapi.io/noticia')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      const l=data
      l.sort((a, b)=>{
        return new Date(b.data) - new Date(a.data);
      })
        this.setState({noticias:[...l]})
      const paginas=Math.ceil(l.length/10)
      this.setState({qtdPaginas:paginas})
    })
    .catch(console.log)
    /*const l=[
      {id:1,titulo:"TITULO1",subtitulo:"ALguma coisa",categoria:"Saúde",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:2,titulo:"TITULO2",subtitulo:"ALguma coisa",categoria:"Economia",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:3,titulo:"TITULO3",subtitulo:"ALguma coisa",categoria:"Saúde",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:4,titulo:"TITULO4",subtitulo:"ALguma coisa",categoria:"Economia",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:5,titulo:"TITULO5",subtitulo:"ALguma coisa",categoria:"Saúde",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:6,titulo:"TITULO6",subtitulo:"ALguma coisa",categoria:"Economia",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:7,titulo:"TITULO7",subtitulo:"ALguma coisa",categoria:"Economia",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:8,titulo:"TITULO8",subtitulo:"ALguma coisa",categoria:"Política",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:9,titulo:"TITULO9",subtitulo:"ALguma coisa",categoria:"Entreterimento",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:10,titulo:"TITULO10",subtitulo:"ALguma coisa",categoria:"Entreterimento",autor:"Autor",data:'Mar 12 2012 10:00:00 AM'},
      {id:11,titulo:"TITULO11",subtitulo:"ALguma coisa",categoria:"Entreterimento",autor:"Autor",data:'Mar 12 2020 11:00:00 AM'},
  ]
  */
  
  }
  filtroNoticias (titulo){
    const itens=this.state.noticias.filter((noticia)=>{
      return noticia.titulo.toUpperCase() === titulo.toUpperCase()
    })
    if(itens.length===0){
        return
    }
    this.setState({
      filtro:[...itens]
    })
    const paginas=Math.ceil(itens.length/10)
    this.setState({qtdPaginas:paginas})
}
filtroCategoria (categoria){
  if(categoria.toUpperCase()==="HOME"){
    this.setState({
      filtro:[]
    })
    const paginas=Math.ceil(this.state.noticias.length/10)
    this.setState({qtdPaginas:paginas})
    return;
  }
  const itens=this.state.noticias.filter((noticia)=>{
    return noticia.categoria.toUpperCase() === categoria.toUpperCase()
  })
  if(itens.length===0){
    return
}
  this.setState({
    filtro:[...itens]
  })
  const paginas=Math.ceil(itens.length/10)
  this.setState({qtdPaginas:paginas})
}
mudarPagina(pagina){
  if(pagina<1 || pagina>this.state.qtdPaginas){
    return
  }
  if(pagina===1){
    this.setState({pagina:pagina,indice:1})
    return
  }
  let i=this.state.indice+10
  if(pagina<this.state.pagina){
    i=this.state.indice-10
  }
  this.setState({pagina:pagina,indice:i})
}
  render() {
    const exibir= this.state.filtro.length>0?this.state.filtro:this.state.noticias
    return (
      <div >
        <div id="head">
          <Navbar filtro={this.filtroCategoria}/>
        </div>
        <div class="busca">
          <Busca filtro={this.filtroNoticias}/>
        </div>
        <div class="container-fluid">
          <NoticiasGrup noticias={exibir.length<this.state.pagina*10 
                                  ? exibir.slice(this.state.indice-1,exibir.length)
                                  :  exibir.slice(this.state.indice-1,this.state.pagina*10)
          }/>
        </div>
        <div>
          <NavPagina paginaAtual={this.state.pagina} qtdPaginas={this.state.qtdPaginas} mudarPagina={this.mudarPagina}/>
        </div>
      </div>
    );
  }
}
export default App;