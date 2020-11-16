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

var divsQ=[];
var timeQ = 0;

//VISUALIZACION TIME
var speed=50;
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;


function div_updateQ(cont,height,color)
{
    
    window.setTimeout(function(){
        if(cont != undefined){
            cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }       
        timeQ = (c_delay+=delay_time/200);
    },c_delay+=delay_time);
    
}

function generate_array(array)
{
    quick.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(array[i] * 0.5*(valor.max - valor.min) ) + 10;
        divsQ[i]=document.createElement("div");
        quick.appendChild(divsQ[i]);   
        margin_size=0.3;
        divsQ[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

//QUICKSORT
function Quick()
{
    c_delay=0;
    quick_sort(0,array_size-1);
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_updateQ(divsQ[start],div_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_updateQ(divsQ[j],div_sizes[j],"yellow");//Color update

                div_updateQ(divsQ[i],div_sizes[i],"red");//Color update
                div_updateQ(divsQ[j],div_sizes[j],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_updateQ(divsQ[i],div_sizes[i],"red");//Height update
                div_updateQ(divsQ[j],div_sizes[j],"red");//Height update

                div_updateQ(divsQ[i],div_sizes[i],"blue");//Height update
                div_updateQ(divsQ[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    div_updateQ(divsQ[start],div_sizes[start],"red");//Color update
    div_updateQ(divsQ[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_updateQ(divsQ[start],div_sizes[start],"red");//Height update
    div_updateQ(divsQ[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_updateQ(divsQ[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }

 }

//FIN QUICKSORT

class Quicksort extends Component{
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
            var child = node.querySelector('#idQuick');
            
            quick = child;

            array_size = this.state.valores.length;
            delay_time = 10000/(Math.floor(array_size/2)*speed);           
            generate_array(this.state.valores);
            this.state.btn.addEventListener('click', () => {
                Quick();
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
                <h4 class="text-center">Quicksort {this.state.valores.length} Elementos</h4>
                <div id='idQuick'  className="array_container"></div>        
                </div>
      
        );
    }
}

export default Quicksort;