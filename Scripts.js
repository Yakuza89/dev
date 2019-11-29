//captura dos elementos da DOM
var Varmar = document.querySelector("#aplication ul");
let Valor = document.querySelector("#aplication input");
var botao = document.querySelector("#aplication button");
var bnn= document.querySelector("#di");
var ed=document.querySelector("#das");
var de=document.querySelector("#ed");

var tab=[];
//Receptaculo do ToDo ARRAY
var recep = [];
//Funcao mor do sistema
function Main(){
//Limpar o Elemento de lista para a insercao de novos elementos
Varmar.innerHTML='';
ed.innerHTML='';

//percorrer o ToDo array
for (listTodo of recep){
	for (listTodo2 of tab){
		var Elemento2= document.createElement('li');
		var Texto2= document.createTextNode(listTodo2);
		Elemento2.appendChild(Texto2);
			ed.appendChild(Elemento2);

			

		}
//creates dos elementos
var Elemento = document.createElement('li');
var Texto = document.createTextNode(listTodo);
		var delet=document.createElement('button');
		var btnexe= document.createTextNode('Apagar');
		delet.appendChild(btnexe);
		Elemento.appendChild(Texto);
		Elemento.appendChild(delet);
		var pos = recep.indexOf(listTodo);
		delet.setAttribute('onclick', 'deletar('+ pos +')')
		delet.setAttribute('id','al');
		Varmar.appendChild(Elemento);
 
		
	}
	
 }


Main();
//funcao de adcionar os todos 
function add(){

	var Texto = Valor.value;
	var Texto2 = ed.value;
	recep.push(Texto);
	tab.push(Texto2);
	Valor.value='';
	de.value='';
	Main();
}



botao.onclick=add;
bnn.onclick=add;
//realizar a exclusão dos items
function deletar(pos){
	recep.splice(pos, 1);
	tab.splice(pos,1);
	Main();
}





var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    var menu = document.getElementById('menu-hidde');
    if (veri == 1) {
        menu.style.left = "0px";
        veri = 0;
    }else{
        menu.style.left = "-100%";
        veri = 1;
    }
})