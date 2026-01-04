var h1 = document.querySelector("h1");
var Card = document.querySelector("#card");
var teamname = document.querySelector("#teamname");
var trophy = document.querySelector("#trophy");
var trophywins = document.querySelector("#trophywins");
var img = document.querySelector("img");
var btn = document.querySelector("button");



var teams = [
   {
    team: 'mi',
    wins:  5,
    src: "images/mi.png"

   } ,
    {
    team: 'rcb',
    wins: 1,
     src: "images/rcb.png"
    } ,
    {
    team: 'csk',
    wins: 5,
      src: "images/csk.png"
    
   } ,
    {
    team: 'kkr',
    wins: 3,
    src: "images/kkr.png"
   } ,
    {
    team: 'srh',
    wins: 2,
    src: "images/srh.png"

   } , 
   {
    team: 'rr',
    wins: 1,
    src:  "images/rr.png"

   } ,
    {
    team: "gt",
    wins:  1,
    src: "images/gt.png"

   } ,
    {
    team: 'dc',
    wins: 1,
    src: "images/dc.png"

   } ,

]
btn.addEventListener("click", function(){
   var t = Math.floor(Math.random() * teams.length);
   teamname.textContent = teams[t].team;
   trophywins.textContent = "trophy wins: " + teams[t].wins;
   img.src = teams[t].src;
});