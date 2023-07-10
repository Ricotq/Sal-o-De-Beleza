// JavaScript Document

	//window.alert('oi');
	/*rootRef.on("child_added", snap => {
		
		windows.alert(snap(val));
	});*/
	alert('esta e uma caixa de alerta');
	var ref = firebese.database().ref().child("users");
	ref.on('value', function(datasnapshot){
		window.alert("snapshot");
	})
	
	