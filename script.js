var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");

color1.defaultValue = "#ff0000";
color2.defaultValue = "#ffff00";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomNum() {
	return (Math.random()*0xFFFFFF<<0).toString(16);
}

function randomGradient() {
	color1.value = "#" + randomNum();
	color2.value = "#" + randomNum();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomGradient);