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

    localStorageItems = []
    for (var i = 0; i < localStorage.length; i++) {
        localStorageItems.push(localStorage.key(i))
    }

    if(localStorageItems.includes("7Ep")){
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
    if(localStorageItems.includes("PlanetHer")){
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
    if(localStorageItems.includes("HarrysHouse")){
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
    if(localStorageItems.includes("GoodByeAndGoodRiddance")){
        changeTemplate(
        "Noa-Nodz | Legends Never Die - Juice Wrld", 
        "Legends Never Die", 
        "Juice Wrld", 
        "../Albums/Cover Pictures/Good BYe and Good Riddance.jfif",
        "https://open.spotify.com/embed/album/6n9DKpOxwifT5hOXtgLZSL?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/legends-never-die/1526561014",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1089099811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/album/165354302",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorageItems.includes("As_It_Was")){
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
    if(localStorageItems.includes("Montero")){
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
    if(localStorageItems.includes("FineLine")){
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
    if(localStorageItems.includes("Satisfaction")){
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
    if(localStorageItems.includes("KissMeMore")){
        changeTemplate(
        "Noa-Nodz | Kiss Me More - Doja cat", 
        "Kiss Me More", 
        "Doja Cat", 
        "../Songs/Cover Pictures/KissMeMore-DojaCat.jpg",
        "https://open.spotify.com/embed/track/3DarAbFujv6eYNliUTyqtz?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/kiss-me-more-feat-sza/1561866167?i=1561866170",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023919816&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1321495602",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorageItems.includes("StarWalkin")){
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
    //search through the localStorage and find an item that includes the name of the song
    
    if(localStorageItems.includes("Panini")){
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
    if(localStorageItems.includes("Holiday")){
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
    if(localStorageItems.includes("OldTownRoad")){
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
    if(localStorageItems.includes("ILikeYou")){
        changeTemplate(
        "Noa-Nodz | I Like You - Post Malone, Doja Cat", 
        "I Like You", 
        "Doja Cat", 
        "../Songs/Cover Pictures/ILikeyou-DojaCat.jpg",
        "https://open.spotify.com/embed/track/0O6u0VJ46W86TxN9wgyqDj?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/i-like-you-a-happier-song-feat-doja-cat/1623192950?i=1623193283",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1279844374&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1775918667",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorageItems.includes("IAmAGummyBear")){
        changeTemplate(
        "Noa-Nodz | I am a Gummy Bear", 
        "I am a Gummy Bear", 
        "The Gummy Bear Song", 
        "../Songs/Cover Pictures/IAmAGummyBear-GummyBear.jpg",
        "https://open.spotify.com/embed/track/6nFYXpBgrNcZjbtNEuc6yR?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/i-am-a-gummy-bear-the-gummy-bear-song/305828196?i=305828241",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229786052&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1558374012",
        "#"
        
        )
    }
    if(localStorageItems.includes("Poland")){
        changeTemplate(
        "Noa-Nodz | Poland - Lil Yachty", 
        "Poland", 
        "Lil Yachty", 
        "../Songs/Cover Pictures/Poland-LilYachty.jpg",
        "https://open.spotify.com/embed/track/74loibzxXRL875X20kenvk?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/poland/1648986467?i=1648986486",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1356822547&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1954515757",
        "#"
        
        )
    }
    if(localStorageItems.includes("IndustryBaby")){
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
    if(localStorageItems.includes("Rodeo")){
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
    if(localStorageItems.includes("SunGoesDown")){
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
    if(localStorageItems.includes("GetItToIt")){
        changeTemplate(
        "Noa-Nodz | Get It To It - Doja Cat", 
        "Get It To It", 
        "Doja Cat", 
        "../Songs/Cover Pictures/GetIntoIt-DojaCat.jpg",
        "https://open.spotify.com/embed/track/0W6I02J9xcqK8MtSeosEXb?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/get-into-it-yuh/1571168930?i=1571169191",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1073025196&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1410738072",
        "../Artists/DojaCat.html"
        
        )
    }
    if(localStorageItems.includes("Robbery")){
        changeTemplate(
        "Noa-Nodz | Robbery - Juice WRLD", 
        "Robbery", 
        "Juice WRLD", 
        "../Songs/Cover Pictures/Robbery.jfif",
        "https://open.spotify.com/embed/track/6iaSML1PIYq936g62BDtBq?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/robbery/1454440896?i=1454441104",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/574858791&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1634179012",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorageItems.includes("Righteous")){
        changeTemplate(
        "Noa-Nodz | Righteous - Juice WRLD", 
        "Righteous", 
        "Juice WRLD", 
        "../Songs/Cover Pictures/Righteous.jfif",
        "https://open.spotify.com/embed/track/5dOxHHMOFAbG3VH23t0xNm?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/righteous/1526561014?i=1526562022",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/805856467&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1016968432",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorageItems.includes("LateNightTalking")){
        changeTemplate(
        "Noa-Nodz | Late Night Talking - Harry Styles", 
        "Late Night Talking", 
        "Harry Styles", 
        "../Songs/Cover Pictures/LateNightTalking.jfif",
        "https://open.spotify.com/embed/track/1qEmFfgcLObUfQm0j1W2CK?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/late-night-talking/1615584999?i=1615585006",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1270786810&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1756569577",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorageItems.includes("Matilda")){
        changeTemplate(
        "Noa-Nodz | Matilda - Harry Styles", 
        "Matilda", 
        "Harry Styles", 
        "../Songs/Cover Pictures/Matilda.jfif",
        "https://open.spotify.com/embed/track/6uvh0In7u1Xn4HgxOfAn8O?utm_source=generator&theme=0",
        "https://embed.music.apple.com/us/album/matilda/1615584999?i=1615585012",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1270786291&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://widget.deezer.com/widget/dark/track/1756569627",
        "../Artists/JuiceWrld.html"
        
        )
    }
    if(localStorageItems.includes("Shadowbringers")){
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