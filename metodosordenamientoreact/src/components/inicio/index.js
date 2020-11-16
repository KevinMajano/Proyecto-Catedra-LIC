import React,{Component} from 'react';
import './index.css';

export default class Inicio extends Component {
    state = {
      metodos: [],
    };
  
    async componentDidMount() {
      const url = "http://localhost:3001/api/Metodos";
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      this.setState({ metodos: data[0] });
    }
  
    render() {
      return (
        <div className="container">
          <div class="row">
            {this.state.metodos.map((metodos) => {
              return (
                <div key={metodos.id} className="col-12 border">
                  <h2 className="text-center">{metodos.title}</h2>
                  <p className="text-center">
                    <img alt="gif" className="img-fluid" src={metodos.url}></img>
                  </p>
                  <p>{metodos.descripcion}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }   