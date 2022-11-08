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
    if(arguments.length > 1){
        localStorage.setItem(localStorageID, localStorageID)
        window.open(arguments[1], "_self")
    } else {
        localStorage.setItem(localStorageID, localStorageID)
        window.open("Songs/song_template.html", "_self")
    }
}

function changeTemplate(pageTitle, songName, artistName, coverPictureSourceURL, spotifySourceURL, appleMusicSourceURL, soundCloudSourceURL, deezerSourceURL, artistLink){
    document.title = pageTitle
    document.getElementById("Song_Name").innerHTML = songName
    document.getElementById("Artist_Name").innerHTML = artistName
    document.getElementById("Artist_Link").href = artistLink
    var elements = document.querySelectorAll("#cover");
    for (var i = 0; i < elements.length; i++) {
        elements[i].src = coverPictureSourceURL;
    }
    document.getElementById("spotifySourceURL").src = spotifySourceURL
    document.getElementById("appleMusicSourceURL").src = appleMusicSourceURL
    document.getElementById("soundCloudSourceURL").src = soundCloudSourceURL
    document.getElementById("deezerSourceURL").src = deezerSourceURL
    
}

if (document.URL.includes("song_template.html")) {
    console.log("You are in the song template page")
    console.log(localStorage.length + " " + localStorage.key(0))

    if(localStorage.getItem(localStorage.key(0)).includes("7Ep")){
        changeTemplate(
        "Noa-Nodz | 7EP - Lil Nas X", 
        "7EP", 
        "Lil Nas X", 
        "../Albums/Cover Pictures/7EP.jfif",
        "https://open.spotify.com/embed/album/4IRiXE5NROxknUSAUSjMoO?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/7-ep/1468166325",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/969098314&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/100896762",
        "../Artists/LilNasX.html"
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("PlanetHer")){
        changeTemplate(
        "Noa-Nodz | Planet Her - Doja Cat", 
        "Planet Her", 
        "Doja Cat", 
        "../Albums/Cover Pictures/planet her.jfif",
        "https://open.spotify.com/embed/album/1nAQbHeOWTfQzbOoFrvndW?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/planet-her-deluxe/1574004234",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1277395135&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/album/238876612",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("HarrysHouse")){
        changeTemplate(
        "Noa-Nodz | Harry's House - Harry Styles", 
        "Harry's House", 
        "Harry Styles", 
        "../Albums/Cover Pictures/harrys house.jfif",
        "https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/as-it-was/1615584999?i=1615585008",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1242349246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1703487577",
        "../Artists/HarryStyles.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("GoodByeAndGoodRiddance")){
        changeTemplate(
        "Noa-Nodz | Good Bye And Good Riddance - Juice Wrld", 
        "Good Bye And Good Riddance", 
        "Juice Wrld", 
        "../Albums/Cover Pictures/Good BYe and Good Riddance.jfif",
        "https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/as-it-was/1615584999?i=1615585008",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1242349246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1703487577",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("As_It_Was")){
        changeTemplate(
        "Noa-Nodz | As It Was - Harry Styles", 
        "As It Was", 
        "Harry Styles", 
        "../Songs/Cover Pictures/AsItWas.jpg",
        "https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/as-it-was/1615584999?i=1615585008",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1242349246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1703487577",
        "../Artists/HarryStyles.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Montero")){
        changeTemplate(
        "Noa-Nodz | MONTERO - Lil Nas X", 
        "Montero", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/MontaroSong.jfif",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("FineLine")){
        changeTemplate(
        "Noa-Nodz | Fine Line - Harry Styles", 
        "Fine Line", 
        "Harry Styles", 
        "https://cdn.vox-cdn.com/thumbor/cUUdVnTXrleRNqbV-9JloWAleSI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19535833/thumb_clean.jpg",
        "https://open.spotify.com/embed/album/7xV2TzoaVc0ycW7fwBwAml?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/fine-line/1485802965",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/944166691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/album/122664252",
        "../Artists/HarryStyles.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Satisfaction")){
        changeTemplate(
        "Noa-Nodz | Satisfaction - Isak Original", 
        "Satisfaction", 
        "Benny Benassi", 
        "../Songs/Cover Pictures/Satisfaction.jfif",
        "https://open.spotify.com/embed/track/1n7omixiROWs5q6xpWiQuL?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/satisfaction-benny-benassi-presents-the-biz/285865925?i=285865932",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299148405&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/13839055",
        "#"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("KissMeMore")){
        changeTemplate(
        "Noa-Nodz | Kiss Me More - Doja cat", 
        "Kiss Me More", 
        "Doja Cat", 
        "../Songs/Cover Pictures/KissMeMore-DojaCat.jpg",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("StarWalkin")){
        changeTemplate(
        "Noa-Nodz | Star Walkin - Lil Nas X", 
        "Star Walkin", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/StarWalkinSong.jpg",
        "https://open.spotify.com/embed/track/38T0tPVZHcPZyhtOcCP7pF?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/star-walkin-league-of-legends-worlds-anthem/1642613175?i=1642613664",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1348340140&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/1924639057",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Panini")){
        changeTemplate(
        "Noa-Nodz | Panini - Lil Nas X", 
        "Panini", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/PaniniSong.jpg",
        "https://open.spotify.com/embed/track/4SDgTLDYrJ2UrHbkRkg7MD?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/panini-dababy-remix/1479239195?i=1479239196",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/679807847&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/753157742",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Holiday")){
        changeTemplate(
        "Noa-Nodz | Holiday - Lil Nas X", 
        "Holiday", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/HolidaySong.jpg",
        "https://open.spotify.com/embed/track/6zFMeegAMYQo0mt8rXtrli?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/holiday/1539565272?i=1539565285",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927660829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/1139537462",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("OldTownRoad")){
        changeTemplate(
        "Noa-Nodz | Old Town Road - Lil Nas X", 
        "Old Town Road", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/OldTownRoadSong.jpg",
        "https://open.spotify.com/embed/track/6u7jPi22kF8CTQ3rb9DHE7?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/old-town-road-feat-billy-ray-cyrus-remix/1458638377?i=1458638381",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/600964365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/699056192",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("ILikeYou")){
        changeTemplate(
        "Noa-Nodz | I Like You - Post Malone, Doja Cat", 
        "I Like You", 
        "Doja Cat", 
        "../Songs/Cover Pictures/ILikeyou-DojaCat.jpg",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("IAmAGummyBear")){
        changeTemplate(
        "Noa-Nodz | I am a Gummy Bear", 
        "I am a Gummy Bear", 
        "The Gummy Bear Song", 
        "../Songs/Cover Pictures/IAmAGummyBear-GummyBear.jpg",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "#"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Poland")){
        changeTemplate(
        "Noa-Nodz | Poland - Lil Yachty", 
        "Poland", 
        "Lil Yachty", 
        "../Songs/Cover Pictures/Poland-LilYachty.jpg",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "#"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("IndustryBaby")){
        changeTemplate(
        "Noa-Nodz | Industry Baby - Lil Nas X", 
        "Industry Baby", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/IndustryBabySong.jpg",
        "https://open.spotify.com/embed/track/27NovPIUIRrOZoCHxABJwK?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/industry-baby/1576552540?i=1576552565",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1091068756&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/1439691952",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Rodeo")){
        changeTemplate(
        "Noa-Nodz | Rodeo - Lil Nas X", 
        "Rodeo", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/RodeoSong.jpg",
        "https://open.spotify.com/embed/track/7ikRId3U9AXd6tfF2fbItC?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/rodeo/1495107244?i=1495107370",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/748947898&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/860263412",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("SunGoesDown")){
        changeTemplate(
        "Noa-Nodz | Sun Goes Down - Lil Nas X", 
        "Sun Goes Down", 
        "Lil Nas X", 
        "../Songs/Cover Pictures/SunGoesDownSong.jpg",
        "https://open.spotify.com/embed/track/34eF4BoV8FPk0uhAAoqU7h?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/sun-goes-down/1567410554?i=1567410789",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1050538246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/track/1375065762",
        "../Artists/LilNasX.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("GetItToIt")){
        changeTemplate(
        "Noa-Nodz | Get It To It - Doja Cat", 
        "Get It To It", 
        "Doja Cat", 
        "../Songs/Cover Pictures/GetIntoIt-DojaCat.jpg",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Robbery")){
        changeTemplate(
        "Noa-Nodz | Robbery - Juice WRLD", 
        "Robbery", 
        "Juice WRLD", 
        "../Songs/Cover Pictures/Robbery.jfif",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Righteous")){
        changeTemplate(
        "Noa-Nodz | Righteous - Juice WRLD", 
        "Righteous", 
        "Juice WRLD", 
        "../Songs/Cover Pictures/Righteous.jfif",
        "https://open.spotify.com/embed/album/6pOiDiuDQqrmo5DbG0ZubR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/montero/1582660720",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1316422069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://widget.deezer.com/widget/dark/album/258772832",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorage.getItem(localStorage.key(0)).includes("Shadowbringers")){
        changeTemplate(
        "Noa-Nodz | Shadowbringers - Final Fantasy XIV: Shadowbringers", 
        "Shadowbringers", 
        "Final Fantasy XIV: Shadowbringers", 
        "../Songs/Cover Pictures/Shadowbringers-Soken.jpg",
        "https://open.spotify.com/embed/track/1MOsWaaMx4L7YUYGu7LdEx?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/shadowbringers/1477136155?i=1477136551",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/657272936&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/731353052",
        "#"
        
        )
    }
    //set localStoraged item called As_It_Was_btn to null when one pf the navbar and if the back button is pressed
} else {
    //TODO: Maybe implement a 404 page not found here
    localStorage.clear()
}