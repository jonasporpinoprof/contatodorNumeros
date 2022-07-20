var numero = 0;    
document.write("<h2>Contador</h2><br> <h1 style='color:#F00' id='label'>" + numero + "</h1><br>");
function btnAumentar(){
   numero = numero+1;
   document.getElementById("label").innerHTML = numero;
}
function btnDiminuir(){
   numero = numero-1;
   document.getElementById("label").innerHTML = numero;
}

