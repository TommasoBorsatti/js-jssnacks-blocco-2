
/*
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.
*/


var cognomi = ["Inzaghi", "Morbidozzi", "Lardi", "Peloncini", "Mammalucchi"];
var nomi = ["Tommaso", "Bobby", "Mimmo", "Tony", "Rigoberto"];
var nomeCasuale = 0;
var j=0;
var r=0;

for (var i = 0; i < 3; i++){

  j = Math.floor(Math.random() * 5);
  r = Math.floor(Math.random() * 5);
  nomeCasuale = nomi[j] + " " + cognomi[r];
  console.log(nomeCasuale);
  document.getElementById('lista').innerHTML += "<li>" + nomeCasuale + "</li>"
}
