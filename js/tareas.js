function createNewElement(indicator){
    if (indicator==='a'){
    console.log("entre a tareas.....")
    //Conseguimos la tabla
    var tabla = document.getElementById("tabla");
    //Creamos los elementos basicos
    var newTr = document.createElement("tr");
    var newTd1 = document.createElement("td");
    var newTd2 = document.createElement("td");
    var newTd3 = document.createElement("td");
    //Conseguir valores de ingreso del usuario
    var newText1 = document.getElementById("desc");
    var newText2 = document.getElementById("fecha");
    var newText3 = document.getElementById("persona");
    //Colocamos los valores obtenidos en elementos
    newTd1.innerHTML = newText1.value;
    newTd2.innerHTML = newText2.value;
    newTd3.innerHTML = newText3.value;
    //Colocamos al padre...
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    //Colocamos en la tabla
    tabla.appendChild(newTr);
    //Boton de eliminar
    var ico = document.createElement("td");
    var boton = document.createElement("button");
    var img = document.createElement("img");
    img.src = "../img/basura.jpg";
    img.style.width = "20px";
    boton.appendChild(img);
    boton.style.backgroundColor = "white";
    ico.appendChild(boton);
    newTr.appendChild(ico);
    boton.onclick =  function() {myFunction()};
    function myFunction() {
        //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
        var remove = boton.parentNode;
        //remove.removeChild(remove.childNodes);
        remove.parentNode.innerHTML = '';
        }
    newText1.innerHTML = '';
    newText2.innerHTML = "";
    newText3.innerHTML = "";
    }
    else{
        /*var tabla = document.getElementById('tabla');
        var filas = document.getElementsByTagName('tr');
        var tama = filas.length - 1;
        /*var tama = 0;
        filas.length !== 0 ? tama=filas.length-1 : tama=0;
        console.log(tama)
        var fila = document.getElementsByTagName('tr')[tama];
        console.log(filas)
        console.log(fila)
        if(tama!==0){
           console.log(filas)
           tabla.removeChild(filas[tama]); 
        }else{
            console.log('Ya no hay elementos en el arreglo')                
        }*/
        var tabla = document.getElementById('tabla');
        tabla.innerHTML = '<tr><td>¿Quién realiza?</td><td>Descripción</td><td>Fecha</td><td></td></tr>';
    }
}