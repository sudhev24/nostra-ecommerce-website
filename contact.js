
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
var sidenav = document.getElementById("sidenav")


menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

