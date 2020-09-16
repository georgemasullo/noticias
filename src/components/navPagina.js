import React,{Component} from 'react';
class NavPagina extends Component {
  constructor(props) {
    super(props);
    
    this.mudarPagina = this.mudarPagina.bind(this);
  }
  mudarPagina(event,indice){
    event.preventDefault();
    this.props.mudarPagina(indice);
  }
  


  render() {
    return (
      <nav aria-label="Area para mudar a pagina">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="/#" onClick={(event)=>this.mudarPagina(event,this.props.paginaAtual-1)}>Anterior</a></li>  
    <li class="page-item active"><a class="page-link" href="/#" onClick={(event)=>event.preventDefault()}>{this.props.paginaAtual} de {this.props.qtdPaginas}</a></li>
    <li class="page-item"><a class="page-link" href="/#" onClick={(event)=>this.mudarPagina(event,this.props.paginaAtual+1)}>Proximo</a></li>
  </ul>
</nav>
      
    )
  }
}

export default NavPagina;
