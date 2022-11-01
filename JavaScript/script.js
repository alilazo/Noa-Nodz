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

//This is for JavaScript LocalStorage

function As_It_Was_btn(){
    localStorage.setItem("As_It_Was_btn", "As_It_Was");
    window.open("Songs/song_template.html", "_self");
}

if (document.URL.includes("song_template.html")) {
    console.log("You are in the song template page");
    var As_It_Was_btn = localStorage.getItem("As_It_Was_btn");

    console.log(As_It_Was_btn);

    if(As_It_Was_btn == "As_It_Was"){
        document.title = "As It Was";
        document.getElementById("Song_Name").innerHTML = "As It Was";
        console.log("Put data here");
    }
    //set localStoraged item called As_It_Was_btn to null when one pf the navbar
    //localStorage.setItem("As_It_Was_btn", null);
}