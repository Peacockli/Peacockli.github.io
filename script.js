// akarin

function akarin() {
	let akarin = document.getElementById("akarin");
	let akarinWindow = document.getElementById("window");
	let audio = new Audio('assets/akarin.mp3');

	audio.volume = 0.5;
	audio.play();
	
	if (akarin.style.display == "block") return;
	akarin.style.display = "block";
	akarinWindow.style.display = "none";

	setTimeout(function() {
		akarin.style.top = "-107px";
	}, 1300);
	setTimeout(function() {
		akarin.style.top = "245px";
	}, 3010);
	setTimeout(function() {
		akarin.style.display = "none";
		akarinWindow.style.display = "block";
	}, 4020);
}

//ayano

function door() {
	let door = document.getElementById("door");
	let audio = new Audio('assets/TOSHINOUKYOUKO.mp3');

	audio.volume = 0.8;
	audio.play();

	door.style.left = "320px";
	setTimeout(function() {
		door.style.left = "10px";
	}, 3010);
}

// tomato soundbyte

function tomato() {
	let audio = new Audio('assets/tomato.mp3');

	audio.volume = 0.5;
	audio.play();
}

// 3 contents 1 page

function page(page) {
	let content = document.getElementById("content");
	let contentx = document.getElementById("content-"+page);

	content.innerHTML = contentx.innerHTML;
}; page("home");

// mascot animation

setTimeout(function(){
	document.getElementById("mascot").style.bottom = "5px";
}, 200); 

// scrolling title

var scrl = "AAAAaaaaaAAaaAaAAAAAaaaAAAAAAaaaaAAAAAAAaaaaaAAAaAaaAaAaaaAAaaaaa";
function scrollTitle() {
	scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
	document.title = scrl;
	setTimeout("scrollTitle()", 300);
}; scrollTitle();

// random color

var degree = Math.round(Math.random() * 360);
function randColor() {
	document.body.style.filter = "hue-rotate("+degree+"deg)";
}; randColor();

// hue rotate

document.getElementById("hueslider").addEventListener("input", function(e) {
	document.body.style.filter = "hue-rotate("+e.srcElement.value+"deg)";
	degree = e.srcElement.value
})


// rainbow mode

var rainbowColorActive = false;
var rainbowColorTimeout = null;
function rainbowColor() {
	if (!rainbowColorActive) {
		clearTimeout(rainbowColorTimeout);
		return;
	}
	if (degree > 360){degree = 1};
	degree++;
	rainbowColorTimeout = setTimeout("rainbowColor()", 5);
	document.body.style.filter = "hue-rotate("+degree+"deg)";
}

window.addEventListener("keydown", function(e) {
	if (e.keyCode == 192) {
		rainbowColorActive = !rainbowColorActive;
		rainbowColor();
	}
})