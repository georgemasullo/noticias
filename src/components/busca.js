import React,{Component} from 'react';
class Busca extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.filtra = this.filtra.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  filtra(event) {
    event.preventDefault();
    this.props.filtro(this.state.value);
    
  }

  render() {
    return (
        <form class="form-inline" onSubmit={this.filtra}>
        <div class="form-group">
       <input class="form-control mr-sm-2" type="search" placeholder="Título da notícia"
                            value={this.state.value}
                            onChange={this.handleChange}/>
       <button class="btn btn-info" type="submit">Buscar</button>
       </div>
     </form>
    )
  }
}

export default Busca;
