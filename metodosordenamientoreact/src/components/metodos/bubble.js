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

var divsB=[];
var timeB = 0;

//VISUALIZACION TIME
var speed=50;
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;


function div_updateB(cont,height,color)
{
    
    window.setTimeout(function(){
        if(cont != undefined){
            cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }       
        timeB = (c_delay+=delay_time/200);
    },c_delay+=delay_time);
    
}

function generate_array(array)
{
    quick.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(array[i] * 0.5*(valor.max - valor.min) ) + 10;
        divsB[i]=document.createElement("div");
        quick.appendChild(divsB[i]);   
        margin_size=0.3;
        divsB[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

//BUBBLE
function bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_updateB(divsB[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_updateB(divsB[j],div_sizes[j], "red");//Color update
                div_updateB(divsB[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_updateB(divsB[j],div_sizes[j], "red");//Height update
                div_updateB(divsB[j+1],div_sizes[j+1], "red");//Height update
            }
            div_updateB(divsB[j],div_sizes[j], "blue");//Color updat
        }
        div_updateB(divsB[j],div_sizes[j], "green");//Color update
    }
    div_updateB(divsB[0],div_sizes[0], "green");//Color update

}

//BUBBLE FIN

class Bubble extends Component{
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
            var child = node.querySelector('#idBubble');
            
            quick = child;

            array_size = this.state.valores.length;
            delay_time = 10000/(Math.floor(array_size/2)*speed);           
            generate_array(this.state.valores);
            this.state.btn.addEventListener('click', () => {
                bubble();
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
                <h4 class="text-center">Bubble {this.state.valores.length} Elementos</h4>
                <div id='idBubble'  className="array_container"></div>        
                </div>
      
        );
    }
}

export default Bubble;