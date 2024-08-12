document.write(`
<nav id = "navBar" class="navbar navbar-expand-sm bg-dark navbar-dark position-absolute w-100 overflow-hidden text-wrap" style="">
    <div class="container-fluid">
        <img src="https://i.ibb.co/8XqMv7p/csii-logo.png" id="csiiLogo" onclick="window.open('home', '_self')" style="width:300px;">
        <button class="navButtons navbar-text px-3" id = "asd7122345234tafgtw46456222222222" onclick="window.open('artificialintelligence', '_self')" style="color:#f4b295;">Artificial Intelligence</button>
            <button class="navButtons navbar-text px-3" id = "asd7gasdfadfgsdf23423466dsbKAHe82" onclick="window.open('innovativedevelopment', '_self')" style="color:#f4b295;">Innovative Development</button>
            <button class="navButtons navbar-text px-3" id = "jashdkfhas968723ASFHASEFKJ123He82" onclick="window.open('competitivecoding', '_self')" style="color:#f4b295;">Competitive Coding</button>
            <button class="navButtons navbar-text px-3" id = "asd712fasAfrgtras921351jdsbKAHe82" onclick="window.open('datascience', '_self')" style="color:#f4b295;">Data Science</button>
            <button class="navButtons navbar-text px-3 me-3" id = "asd712fasAfrgasdfgasd23453456FFF2" onclick="window.open('websitedevelopment', '_self')" style="color:#f4b295;">Website Development</button>
    </div>
</nav>
<div id = "mobilePhone">

<div id = "mobileNav" onclick="openNav()">
<div id = "mobileImg">
    <img src="https://i.ibb.co/K5Vt3NG/Screenshot-2022-11-10-5-15-19-PM-removebg-preview.png" id="ham1" class="ham">
    <img src="https://i.ibb.co/K5Vt3NG/Screenshot-2022-11-10-5-15-19-PM-removebg-preview.png" id="ham2" class="ham">
    <img src="https://i.ibb.co/K5Vt3NG/Screenshot-2022-11-10-5-15-19-PM-removebg-preview.png" id="ham3" class="ham">
    <img src="https://i.ibb.co/K5Vt3NG/Screenshot-2022-11-10-5-15-19-PM-removebg-preview.png" id="ham4" class="ham">
</div>
</div>
<div id = "navPopup" style="margin-left:-50vh;">
</div>

<div id ="navContainer"  style="margin-left:-50vh;">

    <img src="https://i.ibb.co/8XqMv7p/csii-logo.png" id="csiiLogo" onclick="window.open('home', '_self')">
    <br>
    <button class="navButtons" id = "asd7122345234tafgtw46456222222222" onclick="window.open('artificialintelligence', '_self')">Artificial Intelligence</button>
    <br>
    <button class="navButtons" id = "asd7gasdfadfgsdf23423466dsbKAHe82" onclick="window.open('innovativedevelopment', '_self')">Innovative Development</button>
    <br>
    <button class="navButtons" id = "jashdkfhas968723ASFHASEFKJ123He82" onclick="window.open('competitivecoding', '_self')">Competitive Coding</button>
    <br>
    <button class="navButtons" id = "asd712fasAfrgtras921351jdsbKAHe82" onclick="window.open('datascience', '_self')">Data Science</button>
    <br>
    <button class="navButtons" id = "asd712fasAfrgasdfgasd23453456FFF2" onclick="window.open('websitedevelopment', '_self')">Website Development</button>
</div>
</div>
`);
if (document.title == "CSꞮꞮ - Data Science"){
        document.getElementById('asd712fasAfrgtras921351jdsbKAHe82').setAttribute("style", "background-color:#0a4d8a;");
    } else if (document.title == "CSꞮꞮ - Artificial Intelligence"){
        document.getElementById('asd7122345234tafgtw46456222222222').setAttribute("style", "background-color:#0a4d8a;");
    } else if (document.title == "CSꞮꞮ - Innovative Development"){
        document.getElementById('asd7gasdfadfgsdf23423466dsbKAHe82').setAttribute("style", "background-color:#0a4d8a;");
    } else if (document.title == "CSꞮꞮ - Website Development"){
        document.getElementById('asd712fasAfrgasdfgasd23453456FFF2').setAttribute("style", "background-color:#0a4d8a;");
    } else if (document.title == "CSꞮꞮ - Competitive Coding"){
        document.getElementById('jashdkfhas968723ASFHASEFKJ123He82').setAttribute("style", "background-color:#0a4d8a;");
    }

var compNav = document.getElementById('navBar');
var mobileNav = document.getElementById('mobileNav');
var mobilePhone = document.getElementById('mobilePhone');
var body = document.getElementsByTagName("body")[0];
var openedNav = false;
document.body.removeChild(mobilePhone);
document.styleSheets[1].disabled = true;
if(window.innerHeight/window.innerWidth>.8){
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = false;
    document.body.removeChild(compNav);
    body.insertBefore(mobilePhone, body.firstChild);
  }
window.addEventListener("resize", function(event) {
  if(window.innerHeight/window.innerWidth>.8){
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = false;
    document.body.removeChild(compNav);
    body.insertBefore(mobilePhone, body.firstChild);
  } else {
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
    body.insertBefore(compNav, body.firstChild);
    document.body.removeChild(mobilePhone);

  }
})

function openNav(){
    var navContainer = document.getElementById('navContainer');
    var ham2 = document.getElementById('ham2');
    var ham3 = document.getElementById('ham3');
    var ham1 = document.getElementById('ham1');
    var ham4 = document.getElementById('ham4');
    var navPopup = document.getElementById('navPopup');
    var mobileNav = document.getElementById('mobileNav');
    mobileNav.setAttribute("style", "");
    navContainer.setAttribute("style","");
    navPopup.setAttribute("style","");
    if (openedNav){
        ham2.classList.add("rotate0");
        ham2.classList.remove("rotate45");
        ham3.classList.add("rotate-0");
        ham3.classList.remove("rotate-45");
        ham1.classList.add("opacity1");
        ham4.classList.add("opacity1");
        ham1.classList.remove("opacity0");
        ham4.classList.remove("opacity0");
        openedNav = false;
        navContainer.classList.add("slideLeft");
        navContainer.classList.remove("slideRight");
        navPopup.classList.add("slideLeft");
        navPopup.classList.remove("slideRight");
    } else {
        ham2.classList.add("rotate45");
        ham2.classList.remove("rotate0");
        ham3.classList.add("rotate-45");
        ham3.classList.remove("rotate-0");
        ham1.classList.add("opacity0");
        ham4.classList.add("opacity0");
        ham1.classList.remove("opacity1");
        ham4.classList.remove("opacity1");
        openedNav = true;
        navContainer.classList.add("slideRight");
        navContainer.classList.remove("slideLeft");
        navPopup.classList.remove("slideLeft");
        navPopup.classList.add("slideRight");
    }
}
