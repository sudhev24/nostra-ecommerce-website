var offcard = document.getElementById("offcard")
var closeoff = document.getElementById("closeoff")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
var sidenav = document.getElementById("sidenav")

closeoff.addEventListener("click",function(){
    offcard.style.display = "none";
})

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

