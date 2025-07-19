
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
var sidenav = document.getElementById("sidenav")


menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})




var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(i=0;i<productlist.length;i++){
        var productname = productlist[i].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)==-1){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})