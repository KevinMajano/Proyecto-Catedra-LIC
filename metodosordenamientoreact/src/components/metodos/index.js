import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom"; 
import Quicksort from './quicksort';
import Selection from './selection';
import Insertion from './insertion';
import Bubble from './bubble';

var globalstate = true;
var child = null;
  class DropDown extends Component {
    onChange = (e) => {
      this.props.history.push(`/${e.target.value}`);
    }
    render() {
      return (
        <select className="form-control" onChange={this.onChange}>
          <option value="method">Seleccionar Metodo</option>
          <option value="method/quicksort">Quicksort</option>
          <option value="method/selection">Selection</option>
          <option value="method/insertion">Insertion</option>
          <option value="method/bubble">Bubble</option>
        </select>
      );
    }
  }
  
const Menu = withRouter(DropDown);

class MetodosOrdenacion extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    handleChange =(e) => {
        this.setState({ value: e.target.value });
      }

      onAddItem = () => {
        this.setState(state => {
           if(globalstate){
            state.list.push(state.value);
            globalstate = false;
            return true;
           }else{
            globalstate = true;
           }
            
          });
          
      }
      componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
         child = node.querySelector('#boton');   
        }
    }
      
    render() {
        return ( 
            <Router>       
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div class="row">
                            <div class="m-0 cajaMetodos border col-lg-12 col-xl-12 col-md-12 col-12">
                            <Route path="/method/quicksort" render={() => <Quicksort btn={child} data={this.state.list}/>} />
                            <Route path="/method/selection" render={() => <Selection btn={child} data={this.state.list}/>} />
                            <Route path="/method/insertion" render={() => <Insertion btn={child} data={this.state.list}/>} />
                            <Route path="/method/bubble" render={() => <Bubble btn={child} data={this.state.list}/>} />                                           
                            </div>
                        </div>

                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="row">
                            <div className="container containerInicio text-center center">
                                <h4 className="mt-4">Elegir Metodo</h4>
                                <div class="form-group">
                                   <Menu/>
                                    <h4 className="mt-4">Ingresar valor</h4>
                                    <input class="form-control" type="text" placeholder="Ejem: 1"  id="new-todo"
                                    value={this.state.value}
                                    onChange={this.handleChange}>
                                     </input>

                                    <button class="btn btn-primary btn-block mt-4"
                                    onClick={this.onAddItem}
                                    disabled={!this.state.value}
                                    >Agregar {this.state.list.length + 1}</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container text-center center">
                                <div className="table-dark m-0">Value</div>
                                <div className="scrollbar">
                                <table class="table my-4 mt-0">                                  
                                    <tbody>
                                        <tr>                                           
                                            {this.state.list.map(item => (
                                            <td>{item}</td>
                                            ))}                                         
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <button id="boton" type="button" class="btn btn-success btn-block mt-4">INICIAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default MetodosOrdenacion;