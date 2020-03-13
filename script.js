var left, right;

var freq = 1.0;

var i = 0, s = ["block","none"],t = [500/freq, 500/freq]; // on, off

var blinking = false;

function init() {
	left = document.getElementById("left").getElementsByClassName("circle")[0];
	right = document.getElementById("right").getElementsByClassName("circle")[0];
	document.getElementById("freq_value").value = freq;
	show();
}

function choose_color() {
	color = document.getElementById("color_picker").value;
	left.style.background = color;
	right.style.background = color;
}

function update_freq(id){

	if(id == "freq_left")
		freq-= 1;
	else if(id == "freq_right")
		freq+= 1;
	else if (id == "freq_value") {
		freq = parseFloat(document.getElementById(id).value);
	}

	if(freq < 0) {
		freq = 1;
	}

	t = [500/freq, 500/freq];
	document.getElementById("freq_value").value = freq;
}

function push_button() {
	button = document.getElementById('start_button');
	blinking ^= 1;
	if(blinking) {
		button.value = "Стоп";
		init();
	}
	else {
		right.style.display = s[0];
		left.style.display = s[0];
		button.value = "Старт";
	}
}

function show() {
	if (blinking) {
		i ^= 1;
		right.style.display = s[i];
		left.style.display = s[i];
		setTimeout(show,t[i]);
	}
}
