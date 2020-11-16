import React,{Component} from 'react';
import ReactDOM from 'react-dom';

var quick=null;
var select=null;
var insert=null;
var bubble=null;
var nodePublic = null;

var array_size = 20;
var div_sizes=[];

var divsQ=[];
var divsS=[];
var divsI=[];
var divsB=[];

var margin_size;
var valor = {
    min: 20,
    max: 150
}
var idBoton= null;

var tiempos = {
    primero: 0,
    segundo: 0,
    tercero: 0,
    cuarto: 0 , 
}
//VISUALIZACION TIME
var speed=50;
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;
var index_min = null;
//Variables tiempo
var timeQ = 0;
var timeS = 0;
var timeI = 0;
var timeB = 0;

function div_updateQ(cont,height,color)
{
    
    window.setTimeout(function(){
        if(cont != undefined){
            cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }
          
        timeQ = (c_delay+=delay_time/1000)-40000;
        CompararTiempos();
    },c_delay+=delay_time);
    
}
function div_updateS(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        timeS = (c_delay+=delay_time/1000)-40000;
        CompararTiempos();
    },c_delay+=delay_time);
}
function div_updateI(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        timeI = (c_delay+=delay_time/1000)-40000;
        CompararTiempos();
    },c_delay+=delay_time);
}
function div_updateB(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        timeB = (c_delay+=delay_time/1000)-40000;
        CompararTiempos();
    },c_delay+=delay_time);
}

function generate_array()
{
    quick.innerHTML="";
    select.innerHTML="";
    insert.innerHTML="";
    bubble.innerHTML="";


    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(valor.max - valor.min) ) + 10;

        divsQ[i]=document.createElement("div");
        divsS[i]=document.createElement("div");
        divsI[i]=document.createElement("div");
        divsB[i]=document.createElement("div");

        quick.appendChild(divsQ[i]);
        select.appendChild(divsS[i]);
        insert.appendChild(divsI[i]);
        bubble.appendChild(divsB[i]);
        
        margin_size=0.3;
        divsQ[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        divsS[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        divsI[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        divsB[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
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

//INSERT 
function Insertion()
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

//BUBBLE
function Bubble()
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
function CompararTiempos(){
    var a = [];
    a.push(timeQ,timeS,timeI,timeB);
    for (var x = 0; x < a.length; x++) {
        for (var i = 0; i < a.length-x-1; i++) {
            if(a[i] < a[i+1]){
                var tmp = a[i+1];
                a[i+1] = a[i];
                a[i] = tmp;
            }
        }
    }
    a = a.reverse();

   for (let i = 0; i < a.length; i++) {
    if(timeQ == a[i]){
        if(i == 0) tiempos.primero.innerHTML = "1. Quicksort";
        if(i == 1) tiempos.segundo.innerHTML = "2. Quicksort";
        if(i == 2) tiempos.tercero.innerHTML = "3. Quicksort";
        if(i == 3) tiempos.cuarto.innerHTML = "4. Quicksort";
    }
    if(timeS == a[i]){
        if(i == 0) tiempos.primero.innerHTML = "1. Selection";
        if(i == 1) tiempos.segundo.innerHTML = "2. Selection";
        if(i == 2) tiempos.tercero.innerHTML = "3. Selection";
        if(i == 3) tiempos.cuarto.innerHTML = "4. Selection";
    }
    if(timeI == a[i]){
        if(i == 0) tiempos.primero.innerHTML = "1. Insertion";
        if(i == 1) tiempos.segundo.innerHTML = "2. Insertion";
        if(i == 2) tiempos.tercero.innerHTML = "3. Insertion";
        if(i == 3) tiempos.cuarto.innerHTML = "4. Insertion";
    }
    if(timeB == a[i]){
        if(i == 0) tiempos.primero.innerHTML = "1. Bubble";
        if(i == 1) tiempos.segundo.innerHTML = "2. Bubble";
        if(i == 2) tiempos.tercero.innerHTML = "3. Bubble";
        if(i == 3) tiempos.cuarto.innerHTML = "4. Bubble";
    }      
   }
}

class CompareMethods extends Component{
constructor(){
    super();
    }
    
    componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            var child = node.querySelector('#compareQuick');
            var child2 = node.querySelector('#compareSelection');
            var child3 = node.querySelector('#compareInsertion');
            var child4 = node.querySelector('#compareBubble');
            var child5 = node.querySelector('#boton');
            
            var child6 = node.querySelector('#id1');
            var child7 = node.querySelector('#id2');
            var child8 = node.querySelector('#id3');
            var child9 = node.querySelector('#id4');

            tiempos.primero = child6;
            tiempos.segundo = child7;
            tiempos.tercero = child8;
            tiempos.cuarto = child9;

            nodePublic = node;
            quick = child;
            select = child2;
            insert = child3;
            bubble = child4;
            idBoton = child5;
            generate_array();
            idBoton.addEventListener('click', () => {
                Quick();
                 Selection_sort();
                 Insertion();
                 Bubble();
            });
        }
    }

       
    

    render(){
        return(
          <div className="container-fluid">
          <div className="row">
            <div  className="col col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <div class="row">
                <div class="m-0 caja border col-lg-6 col-xl-6 col-md-5 col-12">
                  <h4 class="text-center">Quicksort</h4>
                  <div id='compareQuick'  className="array_container"></div>
                </div>
                <div class="m-0 caja border col-lg-6 col-xl-6 col-md-5 col-12">
                  <h4 class="text-center">Seleccion Sort</h4>
                  <div id='compareSelection'  className="array_container"></div>
                </div>
                <div class="m-0 caja border col-lg-6 col-xl-6 col-md-5 col-12">
                  <h4  class="text-center">Insercion Sort</h4>
                  <div id='compareInsertion'  className="array_container" ></div>
                </div>
                <div class="m-0 caja border col-lg-6 col-xl-6 col-md-5 col-12">
                  <h4 class="text-center">Bubble Sort</h4>
                  <div id="compareBubble" className="array_container"></div>                
                </div>
              </div>            
             
            </div>
            <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="row">
                  <div className="container containerInicio text-center center">
                      <h4 className="mt-4">Control Comparativo</h4>
                      <button type="button" id="boton" class="btn btn-success btn-block">Iniciar</button>
                  </div>
                </div>
                <div className="row">
                  <div className="container text-center center">
                  <h4 className="mt-4 b">Resultados:</h4>
                  <p id="id1">1. Empate</p>
                  <p id="id2">2. Empate</p>
                  <p id="id3">3. Empate</p>
                  <p id="id4">4. Empate</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        );
    }
}

export default CompareMethods;
