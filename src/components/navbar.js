import React,{Component} from 'react';
class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      menu:["nav-item active","nav-item","nav-item","nav-item","nav-item"]
  }
    this.filtra = this.filtra.bind(this);
  }

  filtra(valor,event,indice) {
    event.preventDefault();
    const m=["nav-item","nav-item","nav-item","nav-item","nav-item"]
    m[indice]="nav-item active"
    this.setState({menu:[...m]})
    this.props.filtro(valor);
    
  }


  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/#"onClick={(event)=>this.filtra("home",event,0)}>G news</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class={this.state.menu[0]}>
            <a class="nav-link" href="/#" onClick={(event)=>this.filtra("home",event,0)}>Home</a>
          </li>
          <li class={this.state.menu[1]}>
            <a class="nav-link" href="/#" onClick={(event)=>this.filtra("economia",event,1)}>Economia</a>
          </li>
          <li class={this.state.menu[2]}>
            <a class="nav-link" href="/#" onClick={(event)=>this.filtra("política",event,2)}>Política</a>
          </li>
          <li class={this.state.menu[3]}>
            <a class="nav-link" href="/#" onClick={(event)=>this.filtra("saúde",event,3)}>Saúde</a>
          </li>
          <li class={this.state.menu[4]}>
            <a class="nav-link" href="/#" onClick={(event)=>this.filtra("Entretenimento",event,4)}>Entretenimento</a>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar;
