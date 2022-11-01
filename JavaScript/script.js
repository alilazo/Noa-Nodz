function f1(){
	var content = document.getElementById("b1").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b1").style.width = "24.5%"
        document.getElementById("b2").style.display = "inline";
        document.getElementById("b3").style.display = "inline";
        document.getElementById("b4").style.display = "inline";
	} else {
		content.style.display = "block";
        document.getElementById("b1").style.width = "100%"
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").style.display = "none";
        document.getElementById("b4").style.display = "none";
	}
}

function f2(){
	var content = document.getElementById("b2").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b2").style.width = "24.5%"
        document.getElementById("b1").style.display = "inline";
        document.getElementById("b3").style.display = "inline";
        document.getElementById("b4").style.display = "inline";
	} else {
		content.style.display = "block";
        document.getElementById("b2").style.width = "100%"
        document.getElementById("b1").style.display = "none";
        document.getElementById("b3").style.display = "none";
        document.getElementById("b4").style.display = "none";
	}
}

function f3(){
	var content = document.getElementById("b3").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b3").style.width = "24.5%"
        document.getElementById("b2").style.display = "inline";
        document.getElementById("b1").style.display = "inline";
        document.getElementById("b4").style.display = "inline";
	} else {
		content.style.display = "block";
        document.getElementById("b3").style.width = "100%"
        document.getElementById("b2").style.display = "none";
        document.getElementById("b1").style.display = "none";
        document.getElementById("b4").style.display = "none";
	}
}

function f4(){
	var content = document.getElementById("b4").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b4").style.width = "24.5%"
        document.getElementById("b2").style.display = "inline";
        document.getElementById("b3").style.display = "inline";
        document.getElementById("b1").style.display = "inline";
	} else {
		content.style.display = "block";
        document.getElementById("b4").style.width = "100%"
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").style.display = "none";
        document.getElementById("b1").style.display = "none";
	}
}

function showVideo(){
    var video = document.getElementById("cover").nextElementSibling;
    video.style.display = "block";
    document.getElementById("cover").style.display = "none";
}