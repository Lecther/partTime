import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-white", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-white";
}

$(document).ready(function() {
    $(".mySlides").mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        $(".comment").css({left: x + 10 , top: y - 40}).addClass("on");
    }).mouseleave(function() {
        $(".comment").removeClass("on");
    });
});