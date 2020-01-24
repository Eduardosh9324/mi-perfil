function createNewElement(){

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