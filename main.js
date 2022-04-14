
//////////////////////////////MAIN BODY////////////////////////////// 
document.getElementById('body').innerHTML = 
`
<main>
    <div class="topNav">
        <div class="socialLinks">
            <img src="/assets/icon/facebook-svgrepo-com.svg">
            <img src="/assets/icon/instagram-svgrepo-com.svg">
            <img src="/assets/icon/discord-icon-svgrepo-com.svg">
        </div>
        <div class="timeCont">
            <div class="timeCont">
                <div id="time"></div>
            </div>
        </div>
    </div>
    <div id="navigation"></div>
    <div class="" id="col1"></div>
    <div class="" id="col2"></div>
</main>
<div id="contextMenu" class="context-menu" 
    style="display: none">
    <ul>
        <li><a onclick="history.back()" href="#">Back</a></li>
        <li><a onclick="history.forward()" href="#">Forward</a></li>
        <li><a onclick="location.reload()"href="#">Reload</a></li>
    </ul>
</div>
`
//////////////////////////////NAVIGATION////////////////////////////// 
document.getElementById('navigation').innerHTML = 
`
<nav>
    <div class="navLinks">
        <div class="navTitle">
            <i>AnimeSenpai</i>
        </div>
        <div>
            <a href="../../" id="home">Home</a>
            <a href="#" id="">Popular</a>
            <a href="./az-list" id="">Anime List</a>
            <a href="#" id="">Movie</a>
        </div>
    </div>
    <div class="navlinks_left">
        <div class="navlinks_left_button">
            <input type="text" placeholder="Search...">
            <a id="search_icon"class="bi bi-search icon"></a>
        </div>
        <!--
        <a id="signIn" href="/auth">SIGN IN</a>
        -->
    </div>
    <button id="menuBtn" onclick="menuBtn()"><i class="bi bi-list"></i></button>
</nav>

`


////////////////////////COL 1///////////////////////////////
document.getElementById('col1').innerHTML = 
`
    <div class="feature" id="feature">
        <div class="subFeature">
            <div id="animeName"></div>
            <i id="animeSubTxt"></i>
            <div id="animeContxt"></div>
            <div class="animeBottom">
                <a class="animeButtonWatchNow" id="animeButtonWatchNow"><button>Watch Now</button></a>
                <div class="slashDiv"></div>
                <a class="animeInfo" id="animeInfo"><button>See Info</button></a>
            </div>
           <a onclick="featureLeftBtn()" id="arrow_control_left" class="bi bi-arrow-left"></a>
            <a onclick="featureRightBtn()" id="arrow_control_right" class="bi bi-arrow-right"></a>
        </div>
    </div>
`
var featureAnimeImg = document.getElementById('feature');
var featureAnimeName = document.getElementById('animeName');
var animeSubTxt = document.getElementById('animeSubTxt');
var animeContxt = document.getElementById('animeContxt');
var animeButtonWatchNow = document.getElementById('animeButtonWatchNow');
var animeInfo = document.getElementById('animeInfo');
var featureAnimeIndex = 0;

let featureAnime =
[
    {
        featureAnimeName: 'Attack On Titan Final Season Part 2',
        featureAnimeSub: 'Attack on Titan Final Season Part 2,Shingeki no Kyojin: The Final Season Part 2, 進撃の巨人',
        featureAnimeImg: 'url(/assets/feature/attack-on-titan-final-s.jpeg)',
        featureAnimeContxt: `Second part of Attack on Titan: The Final Season. The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. After taking a huge blow from a surprise attack led by Eren, Marley swiftly acts to return the favor. With Zeke's true plan revealed and a military forced under new rule, this battle might be fought on...`,
        featureAnimeUrl:'/v/attack on titan final season part 2',
        featureAnimeInfo:'/info/attack on titan final season part 2',
    },
    {
        featureAnimeName: 'One Piece',
        featureAnimeSub: 'One Piece, ワンピース',
        featureAnimeImg: 'url(/assets/feature/one-piece-bg-1.jpeg)',
        featureAnimeContxt: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece...',
        featureAnimeUrl:'/v/one piece',
        featureAnimeInfo:'/info/one piece'
    },
    {
        featureAnimeName: 'My Dress-Up Daling',
        featureAnimeSub: 'My Dress-Up Darling,Sono Bisque Doll wa Koi wo Suru,その着せ替え人形は恋をする',
        featureAnimeImg: 'url(/assets/feature/My-dress-up-Darling-2.jpeg)',
        featureAnimeContxt: `Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner, finding solace in the home ec room at his high school. To Wakana, people like beautiful Marin Kitagawa, a trendy girl who's always surrounded by a throng of friends, is practically an alien from another world. But when cheerful Marin—never one to be shy—spots Wakana sewing away one day after...`,
        featureAnimeUrl:'/v/my dress up darling',
        featureAnimeInfo:'/info/my dress up darling',
    },

]

//Default image
featureAnimeImg.style.backgroundImage = featureAnime[0].featureAnimeImg;
featureAnimeName.innerHTML = featureAnime[0].featureAnimeName;
animeSubTxt.innerHTML = featureAnime[0].featureAnimeSub;
animeButtonWatchNow.href =  featureAnime[0].featureAnimeUrl;
animeContxt.innerHTML = featureAnime[0].featureAnimeContxt;
animeInfo.href = featureAnime[0].featureAnimeInfo;


function featureAnimeLoad(featureAnimeIndex){
    featureAnimeImg.style.backgroundImage = featureAnime[featureAnimeIndex].featureAnimeImg;
    featureAnimeName.innerHTML = featureAnime[featureAnimeIndex].featureAnimeName;
    animeSubTxt.innerHTML = featureAnime[featureAnimeIndex].featureAnimeSub;
    animeButtonWatchNow.href =  featureAnime[featureAnimeIndex].featureAnimeUrl;
    animeContxt.innerHTML = featureAnime[featureAnimeIndex].featureAnimeContxt;
    animeInfo.href = featureAnime[featureAnimeIndex].featureAnimeInfo;
}

setInterval(function(e) {
    if(featureAnimeIndex < featureAnime.length - 1){
        featureAnimeIndex += 1;
        featureAnimeLoad(featureAnimeIndex);
        e.preventDefault();
    }else{
        featureAnimeIndex = 0;
        featureAnimeLoad(featureAnimeIndex);
    }
}, 8000);

/*---------------------------NEXT SONGS---------------------------*/
function featureRightBtn(e){
    if(featureAnimeIndex < featureAnime.length - 1){
        featureAnimeIndex += 1;
        featureAnimeLoad(featureAnimeIndex);
        e.preventDefault();
    }else{
        featureAnimeIndex = 0;
        featureAnimeLoad(featureAnimeIndex);
    }
}
/*---------------------------PREV SONGS---------------------------*/
function featureLeftBtn(){
    if(featureAnimeIndex > 0){
        featureAnimeIndex -= 1;
        featureAnimeLoad(featureAnimeIndex);
    }else{
        featureAnimeIndex = featureAnime.length;
        featureAnimeLoad(featureAnimeIndex);
    }
}

/*---------------------------COl 2---------------------------*/

document.getElementById('col2').innerHTML = 
`
    <div class="col2Cont">
       <div class="col2Sub">
            <div class="col2Header">
                <button onclick="playAnimeBtn(event)" class="newReleaseBtn" id="newEpisodeBtn">New Episode</button>
                <button onclick="playAnimeBtn(event)" class="newReleaseBtn" id="newAnimeBtn">New Anime</button>
                <button onclick="playAnimeBtn(event)" class="newReleaseBtn" id="newMovieBtn">New Movie</button>
            </div>
            <div clas="newEpisodeCont" id="newEpisodeCont"></div>
            <div clas="newEpisodeCont" id="newAnimeCont" style="display: none"></div>
            <div clas="newEpisodeCont" id="newMovieCont" style="display: none"></div>
       </div>
    </div>
`

function playAnimeBtn(evt) {
    var i, tabs;
    tabs = document.getElementsByClassName("newReleaseBtn");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}
document.getElementById("newEpisodeBtn").click();
document.getElementById("newEpisodeBtn").addEventListener('click',()=>{
    document.getElementById("newEpisodeCont").style.display = 'flex';
    document.getElementById("newAnimeCont").style.display = 'none';
    document.getElementById("newMovieCont").style.display = 'none';
});
document.getElementById("newAnimeBtn").addEventListener('click',()=>{
    document.getElementById("newEpisodeCont").style.display = 'none';
    document.getElementById("newAnimeCont").style.display = 'flex';
    document.getElementById("newMovieCont").style.display = 'none';

});


document.getElementById("newMovieBtn").addEventListener('click',()=>{
    document.getElementById("newEpisodeCont").style.display = 'none';
    document.getElementById("newAnimeCont").style.display = 'none';
    document.getElementById("newMovieCont").style.display = 'flex';

});

/*--------------------------- COl 3

document.getElementById('col3').innerHTML = 
`
    <div class="col3Cont">
       <div class="co33Sub">
            <div class="col3Header">
                <h2>Recently Added</h2>
                <p>View All <i class="bi bi-arrow-right"></i></p>
            </div>
       </div>
       <div class="newEpisodeSubCont">
                    <!--
                    <a href="/v/attack-on-titan-final-season-part-2/" data-text="11" onclick="redirectToVideo1(this)">11</a>
                    <a href="/v/attack-on-titan-final-season-part-2/" data-text="12" onclick="redirectToVideo2(this)">12</a>
                    <a href="/v/attack-on-titan-final-season-part-2/" data-text="10" onclick="redirectToVideo3(this)">10</a>
                    -->
                </div>
    </div>
`
 ---------------------------*/

//updates time/display

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = `<i class="bi bi-clock"></i>` + formattedString;
}
setInterval(refreshTime, 1000);

const inputBox = document.querySelector("input");
const icon = document.querySelector("#search_icon");
let linkTag = document.querySelector("a");
// if user press any key and release

inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("search_icon").click();
    }
  });
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    if(userData){
        icon.onclick = ()=>{
            webLink = `/info/${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}