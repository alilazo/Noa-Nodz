function f1(){
	var content = document.getElementById("b1").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b1").style.width = "24.5%"
        document.getElementById("b2").style.display = "inline"
        document.getElementById("b3").style.display = "inline"
        document.getElementById("b4").style.display = "inline"
	} else {
		content.style.display = "block";
        document.getElementById("b1").style.width = "100%"
        document.getElementById("b2").style.display = "none"
        document.getElementById("b3").style.display = "none"
        document.getElementById("b4").style.display = "none"
	}
}

function f2(){
	var content = document.getElementById("b2").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b2").style.width = "24.5%"
        document.getElementById("b1").style.display = "inline"
        document.getElementById("b3").style.display = "inline"
        document.getElementById("b4").style.display = "inline"
	} else {
		content.style.display = "block";
        document.getElementById("b2").style.width = "100%"
        document.getElementById("b1").style.display = "none"
        document.getElementById("b3").style.display = "none"
        document.getElementById("b4").style.display = "none"
	}
}

function f3(){
	var content = document.getElementById("b3").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b3").style.width = "24.5%"
        document.getElementById("b2").style.display = "inline"
        document.getElementById("b1").style.display = "inline"
        document.getElementById("b4").style.display = "inline"
	} else {
		content.style.display = "block";
        document.getElementById("b3").style.width = "100%"
        document.getElementById("b2").style.display = "none"
        document.getElementById("b1").style.display = "none"
        document.getElementById("b4").style.display = "none"
	}
}

function f4(){
	var content = document.getElementById("b4").nextElementSibling;
    if (content.style.display === "block") {
		content.style.display = "none";
        document.getElementById("b4").style.width = "24.5%"
        document.getElementById("b2").style.display = "inline"
        document.getElementById("b3").style.display = "inline"
        document.getElementById("b1").style.display = "inline"
	} else {
		content.style.display = "block";
        document.getElementById("b4").style.width = "100%"
        document.getElementById("b2").style.display = "none"
        document.getElementById("b3").style.display = "none"
        document.getElementById("b1").style.display = "none"
	}
}

function showVideo(){
    var video = document.getElementById("cover").nextElementSibling
    video.style.display = "block"
    document.getElementById("cover").style.display = "none"
}

//This is for JavaScript LocalStorage

function Listenbtn(localStorageID){
    localStorage.setItem(localStorageID, localStorageID)
    window.open("Songs/song_template.html", "_self")
}

function changeTemplate(pageTitle, songName, artistName, coverPictureSourceURL, spotifySourceURL, appleMusicSourceURL, soundCloudSourceURL, deezerSourceURL, youtubeSourceURL, lyricsSourceURL, songDescription){
    document.title = pageTitle
    document.getElementById("Song_Name").innerHTML = songName
    document.getElementById("Artist_Name").innerHTML = artistName
    document.getElementById("cover").src = coverPictureSourceURL
    document.getElementById("spotifySourceURL").src = spotifySourceURL
    document.getElementById("appleMusicSourceURL").src = appleMusicSourceURL
    document.getElementById("soundCloudSourceURL").src = soundCloudSourceURL
    document.getElementById("deezerSourceURL").src = deezerSourceURL
    
}

if (document.URL.includes("song_template.html")) {
    console.log("You are in the song template page")
    console.log(localStorage.length + " " + localStorage.key(0))
    if(localStorage.getItem(localStorage.key(0)).includes("As_It_Was")){
        changeTemplate(
        "Noa-Nodz | As It Was - Harry Styles", 
        "As It Was", 
        "Harry Styles", 
        "../Artists/HarryStyles/Images/AsItWas.jpg",
        "https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/as-it-was/1615584999?i=1615585008",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1242349246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1703487577"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Montero")){
        changeTemplate(
        "Noa-Nodz | MONTERO - Lil Nas X", 
        "Montero", 
        "Lil Nas X", 
        "../Artists/LilNasX/Images/MontaroAlbum.jfif",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832"
        
        )
    }
    //set localStoraged item called As_It_Was_btn to null when one pf the navbar and if the back button is pressed
} else {
    //TODO: Maybe implement a 404 page not found here
    localStorage.clear()
}