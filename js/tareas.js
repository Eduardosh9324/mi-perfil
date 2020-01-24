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
    var newText1 = document.getElementById("desc").value;
    var newText2 = document.getElementById("fecha").value;
    var newText3 = document.getElementById("persona").value;
    //Colocamos los valores obtenidos en elementos
    newTd1.innerHTML = newText1;
    newTd2.innerHTML = newText2;
    newTd3.innerHTML = newText3;
    //Colocamos al padre...
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    //Colocamos en la tabla
    tabla.appendChild(newTr);
    }
    else{
        var tabla = document.getElementById('tabla');
        var filas = document.getElementsByTagName('tr');
        var tama = filas.length - 1;
        /*var tama = 0;
        filas.length !== 0 ? tama=filas.length-1 : tama=0;
        console.log(tama)
        var fila = document.getElementsByTagName('tr')[tama];
        console.log(filas)
        console.log(fila)*/
        if(tama!==0){
           console.log(filas)
           tabla.removeChild(filas[tama]); 
        }else{
            console.log('Ya no hay elementos en el arreglo')                
        }

        
        

    }
}