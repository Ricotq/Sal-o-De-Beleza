// JavaScript Document
//window.alert("ok");

var Gname = document.getElementById('name');
var insert = document.getElementById('insert');
var apagar = document.getElementById('apagar');
var update = document.getElementById('update');

//Inserir
insert.addEventListener('click' , e=>{
	var name = Gname.value;
	var dbInsert = firebase.database().ref().push().child(/users/'name').set(name);
});

//Update
update.addEventListener('click' , e=>{
	var name = Gname.value;
	var dbUpdate = firebase.database().ref().update({name: name});
});

//Delete
apagar.addEventListener('click' , e=>{
	var dbDelete = firebase.database().ref().child('name').remove();
});