function start(){
	document.getElementById("start").style.display ="none";
	document.getElementById("menu_button").style.display="block";
}
function menu(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="block";
	document.getElementById("save").style.display="block";
}
function resume(){
	document.getElementById("menu_button").style.display="block";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
}