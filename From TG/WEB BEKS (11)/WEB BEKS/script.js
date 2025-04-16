var makeWinHeight = function(){
	var vh = $(window).height();
	var projects = vh/2;
	$('#scene, .layer.main').height(vh);
	$('#scene .col a, #scene .col').height(projects);
}
$(document).ready(function(){
	makeWinHeight();

});
$(window).resize(function(){
	makeWinHeight();
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);