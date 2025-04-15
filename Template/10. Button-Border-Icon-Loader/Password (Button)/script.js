const svg = document.querySelector("svg");
const input = document.querySelector("input");

svg.addEventListener("click", function(){
	this.classList.toggle("close");
	setTimeout(() => {
		input.type = input.type === "password" ? "text" : "password";
	}, 125);
});
