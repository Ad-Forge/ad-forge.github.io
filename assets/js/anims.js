function menuDeploy(event){
  if(!deployed){
    deployed=true;
    header.className = "deployed";
    nav.className = "deployed";
    bottomM.className = "deployed";
    boxMenu.firstChild.firstChild.className = "closeMenu";
  } else{
    deployed = false;
    header.className = "";
    nav.className = "";
    bottomM.className = "";
    boxMenu.firstChild.firstChild.className = "";
  }
}
// function closeMenu(){
//   if(deployed){
//     deployed = false;
//     header.className = "";
// }
var deployed = false;
var boxMenu = document.getElementById("box-menu");
var bottomM = document.getElementById("bottomMenu");
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementsByTagName("nav")[0];
var links = document.getElementById("links");
//var body = document.getElementsByTagName("body")[0];

boxMenu.firstChild.addEventListener("click",menuDeploy,false);
links.firstChild.addEventListener("click",menuDeploy,false);
//body.addEventListener("click",closeMenu,false);

//////////
//CLICKS//
//////////
$(".thumLinks").click(function(){
  menuDeploy();
  setTimeout(function(){
    $("#loader").toggleClass("show","false");
  },0);

  var current = $(this);
  setTimeout(function(){
    $(".panel").removeClass("active");
    console.log(current.attr("href"));
    $(current.attr("href")).addClass("active");
  },2000);

  setTimeout(function(){
    $("#loader").toggleClass("show","true");
  },3000);
});
$("#logo").click(function(){
  setTimeout(function(){
    $("#loader").toggleClass("show","false");
  },0);

  var current = $(this);
  setTimeout(function(){
    $(".panel").removeClass("active");
  },2000);

  setTimeout(function(){
    $("#loader").toggleClass("show","true");
  },3000);
});
//////////
//HOVERS//
//////////
$(".thumLinks").mouseenter(function(event){
  console.log("enter thumb :");
  $(".thumLinks").not(this).parent().toggleClass("nonhover","true");
});
$(".thumLinks").mouseleave(function(event){
  console.log("leave thumb :");
  $(".thumLinks").not(this).parent().toggleClass("nonhover","false");
});
//////////
//LOADER//
//////////
$(document).ready(function(){
   setTimeout(function(){
     $("#loader").toggleClass("show","false")
   },1000)
});
