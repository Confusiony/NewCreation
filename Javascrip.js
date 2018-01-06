function start(){
	document.getElementById("start").style.display ="none";
	document.getElementById("menu_button").style.display="block";
	loop();
}
function menu(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="block";
	document.getElementById("save").style.display="block";
	document.getElementById("quit").style.display="block";
}
function resume(){
	document.getElementById("menu_button").style.display="block";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
}
function quit(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
	document.getElementById("start").style.display ="block";
}

var map = {65:false,68:false,74:false,76:false};
var X = 50;
var Y = 100;
var object = [
	{x:X,y:Y},
	{x:X+50,y:Y},
	{x:X+50,y:Y+50},
	{x:X,y:Y+50}
]

function loop() {
	window.setInterval(function () {
		if(map[68]==true){
			X +=5;
		}
		if(map[65]==true){
			X -=5;
		}
		for (i=0;i<object.length+1;i++){
			if(object[i].x<0){
				x+=5;
			}
			if(object[i].x>1000){
				x-=5;
			}
			if(object[i].y<0){
				y+=5;
			}
			if(object[i].y>600){
				y-=5;
			}
		}
		document.getElementById("test").style.left = x+"px";
	}, 100); 
}


// https://stackoverflow.com/questions/13640061/get-a-list-of-all-currently-pressed-keys-in-javascript?noredirect=1&lq=1 //
//this will check if any keys are down or up and with the list i crate called map it will change the false to a true if that key is down
document.addEventListener('keydown',function(event){
map[event.keyCode] = true;
},
false);
document.addEventListener('keyup',function(event){
	map[event.keyCode] = false;
},false);