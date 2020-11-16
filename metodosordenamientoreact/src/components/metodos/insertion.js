import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

var quick=null;
var array_size = 0;
var div_sizes=[];

var valor = {
    min: 4,
    max: 30
}
var margin_size;

var divsI=[];
var timeI = 0;

//VISUALIZACION TIME
var speed=50;
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;


function div_updateI(cont,height,color)
{
    
    window.setTimeout(function(){
        if(cont != undefined){
            cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }       
        timeI = (c_delay+=delay_time/200);
    },c_delay+=delay_time);
    
}

function generate_array(array)
{
    quick.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(array[i] * 0.5*(valor.max - valor.min) ) + 10;
        divsI[i]=document.createElement("div");
        quick.appendChild(divsI[i]);   
        margin_size=0.3;
        divsI[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

//INSERT 
function insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_updateI(divsI[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_updateI(divsI[i],div_sizes[i],"red");//Color update
            div_updateI(divsI[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_updateI(divsI[i],div_sizes[i],"red");//Height update
            div_updateI(divsI[i+1],div_sizes[i+1],"red");//Height update
    
            div_updateI(divsI[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_updateI(divsI[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_updateI(divsI[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_updateI(divsI[t],div_sizes[t],"green");//Color update
        }
    }
    div_updateI(divsI[j-1],div_sizes[j-1],"green");//Color update
}
//INSERT FIN

class Insertion extends Component{
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
            var child = node.querySelector('#idInsertion');
            
            quick = child;

            array_size = this.state.valores.length;
            delay_time = 10000/(Math.floor(array_size/2)*speed);           
            generate_array(this.state.valores);
            this.state.btn.addEventListener('click', () => {
                insertion();
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
                <h4 class="text-center">Insertion {this.state.valores.length} Elementos</h4>
                <div id='idInsertion'  className="array_container"></div>        
                </div>
      
        );
    }
}

export default Insertion;