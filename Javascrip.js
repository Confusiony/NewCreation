//Button setup
function menu(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="block";
	document.getElementById("save").style.display="block";
	document.getElementById("quit").style.display="block";
	document.getElementById("settings").style.display="block";
	stop = true;
}
function resume(){
	document.getElementById("menu_button").style.display="block";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
	document.getElementById("settings").style.display="none";
	stop = false;
	loop();
}
function quit(){
	document.getElementById("menu_button").style.display="none";
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
	document.getElementById("start").style.display ="block";
	document.getElementById("settings").style.display="none";
	stop = true;
}
function settings(){
	document.getElementById("resume").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("quit").style.display="none";
	document.getElementById("settings").style.display="none";
	document.getElementById("setting_buttons").style.display ="block";
	settings = document.getElementsByClassName("settings");
	for(i=0;i<settings.length;i++){
		settings[i].style.display = "block";
	}	
}
function exit(){
	settings = document.getElementsByClassName("settings");
	for(i=0;i<settings.length;i++){
		settings[i].style.display = "none";
	}	
	document.getElementById("resume").style.display="block";
	document.getElementById("save").style.display="block";
	document.getElementById("quit").style.display="block";
	document.getElementById("settings").style.display="block";
	document.getElementById("setting_buttons").style.display ="none";
}

var cookie = document.cookie;
//intro
function monolog(){
	document.getElementById("start").style.display ="none";
	var interval = 0;
	timer = setInterval(function() {
		interval+=1;
		if (interval<=2){
			document.getElementById("mono").innerHTML = "Ummm.";
			if (interval==1){
				fad_in(document.getElementById("mono"));
			}
			if(interval==2){
				fad_out(document.getElementById("mono"));
			}
		}
		if(interval<=4 &&interval>2){
			document.getElementById("mono").innerHTML = "I seem to be by a ominous entrance.";
			if (interval==3){
				fad_in(document.getElementById("mono"));
			}
			if(interval==4){
				fad_out(document.getElementById("mono"));
			}
		}
		if(interval<=6 &&interval>4){
			document.getElementById("mono").innerHTML = "So of course i'll go in.";
			if (interval==5){
				fad_in(document.getElementById("mono"));
			}
			if(interval==6){
				fad_out(document.getElementById("mono"));
			}
			//// Hmm its too quiet in here. I hope there isn't any deadly monsters waiting to ambush me... oh for fucc
		}
		if(interval>6){
			clearInterval(timer);
			setUp();
			stop = false;
			document.getElementById("menu_button").style.display="block";
		}
	},2000);
}

function fad_in(element){
	var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var fad_in_Interval = setInterval(function () {
        if (op >= 1){
            clearInterval(fad_in_Interval);
        }
        element.style.opacity = op;
        op+= 0.1;
    }, 100);
}

function fad_out(element){
	var op = 0.5;  // initial opacity
    element.style.display = 'block';
    var fad_out_Interval = setInterval(function () {
        if (op <= 0){
            clearInterval(fad_out_Interval);
        }
		element.style.opacity = op;
        op -= 0.15;
    }, 150);
}


//sound
var sound = new Audio('library/sound/songone.mp3');
function onload(){
	sound.volume = 0.01;
	sound.play();
	var Main_audio = setInterval(function(){
		sound.currentTime = 0;
	},386400)
}

var click = new Audio('library/sound/click.mp3');
var clicked = false;
function PlaySound() {
	if(clicked==true){
		clearInterval(sound_interval);
	}
	click.currentTime=0;
	click.volume = 0.1;
    click.play();
	sound_interval = setInterval(function(){
		click.pause();
		click.currentTime=0;
		clearInterval(sound_interval);
		clicked = true;
	},300)
}

var volume = 0.01;
document.getElementById("bar").style.width= (volume*1000)*2+"px";
var mute_toggel = false;
toggel_mute();
function toggel_mute(){
	mute_toggel = !mute_toggel;
	if(mute_toggel==false){
		sound.volume = 0;
		document.getElementById("mute").innerHTML="Unmute";
	}
	if(mute_toggel==true){
		sound.volume = volume;
		document.getElementById("mute").innerHTML="Mute";
	}
	
}
function minus_volume(){
	if(volume>0){
		volume-=0.01;
		sound.volume = volume;
	}
	document.getElementById("bar").style.width= (volume*1000)*2+"px";
}
function plus_volume(){
	if(volume<0.0998){
		volume+=0.01;
		sound.volume = volume;
	}
	document.getElementById("bar").style.width= (volume*1000)*2+"px";
}


//setup
function setUp(){

}



//level create

var classes = "floor_plain";
var health = false;
function floor_create(){
	var position = 0;
	var random = Math.floor((Math.random() * 2) + 1)
	if(random<1.5){
		classes = "floor_plain";
		health = true;
	}
	else if(random>1.5){
		classes = "floor_corridor";
		health = false;
	}
	for(i=0;i<5;i++){
		var floor = document.createElement('div');
		floor.setAttribute('class', classes);
		floor.setAttribute('id','floor');
		floor.style.left = position+"px";
		document.getElementById("Window").appendChild(floor);
		position+=200;
	}
	if(health==true){
		var floor = document.createElement('div');
		floor.setAttribute('id','health');
		floor.style.left = Math.floor((Math.random() * 0) + 800)+"px";
		document.getElementById("Window").appendChild(floor);
	}
}

function floor_remove(){
	for(i=0;i<5;i++){
		var div = document.getElementById('floor');
		div.parentNode.removeChild(div);
	}
}


//main
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
	document.getElementById("Window").style.backgroundImage = "none";
	Main_loop = window.setInterval( function () {
		if(stop==true){
			clearInterval(Main_loop);
		}
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
