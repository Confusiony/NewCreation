function start(){
	document.getElementById("start").style.display ="none";
	document.getElementById("menu_button").style.display="block";
	stop = false;
	loop();
}
function menu(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="block";
	document.getElementById("save").style.display="block";
	document.getElementById("quit").style.display="block";
	stop = true;
}
function resume(){
	document.getElementById("menu_button").style.display="block";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
	stop = false;
}
function quit(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
	document.getElementById("start").style.display ="block";
}

var map = {65:false,68:false,87:false,83:false};
var X = 50;
var Y = 100;
var stop = false;
var object = [
	{x:X,y:Y},
	{x:X+50,y:Y},
	{x:X+50,y:Y+50},
	{x:X,y:Y+50}
]

function loop() {
	window.setInterval( function () {
	if(stop==false){
		if(map[68]==true){
			X +=5;
		}
		if(map[65]==true){
			X -=5;
		}
		if(map[87]==true){
			Y-=5;
		}
		if(map[83]==true){
			Y+=5;
		}
		object = [
			{x:X,y:Y},
			{x:X+50,y:Y},
			{x:X+50,y:Y+50},
			{x:X,y:Y+50}
		]
		for (i=0;i<object.length;i++){
			if(object[i].x<0){
				X+=(object[i].x*-1)/2;
			}
			if(object[i].x>1000){
				X-=(object[i].x-1000)/2;
			}
			if(object[i].y<0){
				Y+=(object[i].y*-1)/2;
			}
			if(object[i].y>600){
				Y-=(object[i].y-600)/2;
			}
		}
		document.getElementById("test").style.left = X+"px";
		document.getElementById("test").style.top = Y+"px";
	}
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