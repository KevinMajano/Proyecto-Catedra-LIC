import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

var quick=null;

var array_size = 0;
var div_sizes=[];

var valor = {
    min: 4,
    max: 30
}
var idBoton= null;
var margin_size;

var divsS=[];
var timeS = 0;
var index_min = null;

//VISUALIZACION TIME
var speed=50;
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;


function div_updateS(cont,height,color)
{
    
    window.setTimeout(function(){
        if(cont != undefined){
            cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }       
        timeS = (c_delay+=delay_time/200);
    },c_delay+=delay_time);
    
}

function generate_array(array)
{
    quick.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(array[i] * 0.5*(valor.max - valor.min) ) + 10;
        divsS[i]=document.createElement("div");
        quick.appendChild(divsS[i]);   
        margin_size=0.3;
        divsS[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

//SELECT 
function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_updateS(divsS[i],div_sizes[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_updateS(divsS[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_updateS(divsS[index_min],div_sizes[index_min],"blue");//Color update
                }
                index_min=j;
                div_updateS(divsS[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_updateS(divsS[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_updateS(divsS[index_min],div_sizes[index_min],"red");//Height update
            div_updateS(divsS[i],div_sizes[i],"red");//Height update
            div_updateS(divsS[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_updateS(divsS[i],div_sizes[i],"green");//Color update
    }
    div_updateS(divsS[i],div_sizes[i],"green");//Color update

}
//FIN SELECT

class Selection extends Component{
    constructor(data){
        super(data);
        this.state = {
          valores: data.data,
          btn: data.btn
        }
        //array_size = this.state.valores.length;
    }
    componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            var child = node.querySelector('#idSelect');
            
            quick = child;

            array_size = this.state.valores.length;
            delay_time = 10000/(Math.floor(array_size/2)*speed);           
            generate_array(this.state.valores);
            this.state.btn.addEventListener('click', () => {
                Selection_sort();
            });
        }
    }
    componentDidUpdate(){
        array_size = this.state.valores.length;
        delay_time = 10000/(Math.floor(array_size/2)*speed);
        generate_array(this.state.valores);
    }

    render(){
        return(
                <div>
                <h4 class="text-center">Selection {this.state.valores.length} Elementos</h4>
                <div id='idSelect'  className="array_container"></div>        
                </div>
      
        );
    }
}

export default Selection;