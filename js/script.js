backOnTopBtn = document.getElementById("backOnTopBtn");
window.onscroll = function(){scrollFunction()};
				
function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) backOnTopBtn.style.display = "block";
	else backOnTopBtn.style.display = "none";
}
				
function backOnTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}