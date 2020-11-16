import React, { Component } from 'react';
import './index.css';

export default class Developers extends Component {
    state = {
        developers: [],
    };

    async componentDidMount() {
        const url = "http://localhost:3001/api/Metodos";
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        this.setState({ developers: data[1] });
    }

    render() {
        return (
            <div className="container">
                <div class="row">
                    {this.state.developers.map((developers) => {
                        return (
                            <div class="card col-4">
                                <img src={developers.url} width="100px"  class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">{developers.nombre}</h5>
                                    <p class="card-text">{developers.descripcion}</p>
                                    <a href={developers.account} class="btn btn-primary">GitHub</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
  }   