var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle")) ; 
var favs = Array.from(document.querySelectorAll(".fa-heart")) ;
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
var cards = Array.from(document.querySelectorAll(".card")) 
for ( let plusBtn of plusBtns){
    plusBtn.addEventListener("click", function(){ 
        plusBtn.nextElementSibling.innerHTML++
       
    })
} 

for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click" , function () {
       if  (minusBtn.previousElementSibling.innerHTML > 0) {
      minusBtn.previousElementSibling.innerHTML-- }
    })
}

for (let fav of favs) {
    fav.addEventListener ("click" , function () {
        if (fav.style.color == "black") {
            fav.style.color = "red"} 
        else {fav.style.color = "black"} 
        })  }

for (let i in deleteBtns)      
 { deleteBtns[i].addEventListener ("click" , function(){ 
    cards[i].remove() 
}) 
}
 

        
    
