container = document.getElementById("c1");

container.innerHTML = "Hola Mundo";

container.style.backgroundColor = "#000000";

container.style.color = "red";

container.style.width = "200px";
container.style.height = "200px";

container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

let containers = document.getElementsByClassName("c2");

for ( let i = 0; i< containers.length; i++){
    containers[i].style.backgroundColor = "#009999";
    containers[i].innerHTML = "<input type=”text” placeholder=’escriba su texto’>";
};


let boton = document.getElementById("btn-click");

boton.onclick = function(evt)
{
alert("Hola mundo");
}

let btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt)
{
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
} 